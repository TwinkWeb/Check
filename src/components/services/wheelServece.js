export default class MoveCircle {
  items = [];
  direction = 0;
  currentStep = 0;
  currentArray = [];

  constructor(items = [], currentStep) {
    this.items = items;
    if (items.length > 0) {
      this._initCurrentStep(currentStep);
    }
  }

  setState(items, currentStep) {
    this.items = items;
    this._initCurrentStep(currentStep);
  }

  steps(step) {
    let steps = 0;
    let direction = this.defineDirection(step, this.items);
    const len = this.items.length;
    if (direction === 0) {
      return { direction, steps: 0 };
    }

    if (direction === 1) {
      for (let i = len; i > 0; i--) {
        if (this.items[i] === step) {
          break;
        }
        steps++;
      }
    } else {
      for (let i = 0; i < len - 1; i++) {
        if (this.items[i] === step) {
          break;
        }
        steps++;
      }
    }
    return { direction, steps };
  }

  rotateTo(step, items) {
    const head = [];
    let i = 0;
    while (step !== items[i]) {
      head.push(items[i]);
      i++;
    }

    const rest = items.filter(item => !head.some(h => h === item));
    this.currentArray = rest.concat(head);
    return rest.concat(head);
  }

  defineDirection(newStep, items) {
    const newPositions = items;
    const idx = newPositions.indexOf(newStep);

    const h = newPositions.length / 2;

    if (newStep === this.currentStep) {
      return 0;
    }

    if (idx < h) {
      return -1;
    } else if (idx > h) {
      return 1;
    } else {
      return -1;
    }
  }

  log() {
    console.log(`items: ${this.items}, current: ${this.currentStep}`);
  }

  _initCurrentStep(step) {
    this.currentStep = step != null ? step : this.items[0];
    this.items = this.rotateTo(this.currentStep, this.items);
  }
}
