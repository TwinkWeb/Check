<template>
  <div class="container">
    <div class="about-title">
      {{ $t("about.title") }}
    </div>
    <div class="about-description">
      <span class="about-description-text">
        <span class="about-description-color-text">
          {{ $t("about.nameProject") }}</span
        >
        {{ $t("about.mainText") }}
      </span>
    </div>
    <div class="about-content">
      <div class="about-block" v-for="(value, index) in blocks" :key="value.id">
        <div class="about-block-title">
          <span>{{ $t(`about.block${index + 1}.title`) }}</span>
          <div
            @click="value.isOpen = !value.isOpen"
            :class="
              !value.isOpen
                ? 'about-block-show-btn-open'
                : 'about-block-show-btn-close'
            "
          >
            <icon-arrow></icon-arrow>
          </div>
        </div>
        <div
          :style="{ display: value.isOpen ? '' : 'none' }"
          class="about-block-description"
        >
          <span>
            {{ $t(`about.block${index + 1}.text`) }}
          </span>
        </div>
      </div>
    </div>
    <div class="about-footer"></div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: '$t("about.block1.title")',
          text:
            'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
          isOpen: false
        },
        {
          id: 2,
          title: "Продажа – куда жать?",
          text:
            'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
          isOpen: false
        },
        {
          id: 3,
          title: "«Продать бота» - как реализовали? ",
          text:
            'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
          isOpen: false
        },
        {
          id: 4,
          title: "Проверка бота – что это?",
          text:
            'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
          isOpen: false
        },
        {
          id: 5,
          title: "Вывод – Наконец-то!",
          text:
            'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
          isOpen: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "node_modules/include-media/dist/include-media";

.container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  .about-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 60px;
  }

  .about-description {
    background-image: url("/img/bonusBG1.png");
    min-height: 156px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 25px;

    span {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      text-transform: lowercase;
      max-width: 900px;
    }

    .about-description-color-text {
      color: #f8c300;
    }
  }

  .about-content {
    .about-block {
      background-color: #292b36;
      border-radius: 20px;
      padding: 16px 16px 16px 32px;
      margin-bottom: 16px;

      .about-block-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        //margin-bottom: 25px;

        span {
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 23px;
          text-align: center;
          color: #f8c300;
        }

        .about-block-show-btn-open {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 35px;
          min-height: 35px;
          background-color: #1d1d21;
          border: 1px solid #f8c300;
          border-radius: 50%;
          cursor: pointer;
          color: #f8c300;
        }

        .about-block-show-btn-close {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 35px;
          min-height: 35px;
          background-color: #f8c300;
          border-radius: 50%;
          cursor: pointer;
          color: #1d1d21;
          transform: rotate(180deg);
        }
      }

      .about-block-description {
        margin-bottom: 30px;
        max-width: 1000px;
        margin-top: 25px;

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #ffffff;
        }
      }
    }
  }

  .about-footer {
    height: 200px;
  }
}

@include media("<=tablet") {
  .about-description-text {
    padding: 25px;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 23px;
    text-align: center;
    text-transform: lowercase;
    max-width: 900px;
  }
  .about-block-title {
    span {
      margin-right: 10px;
    }
  }
}

@include media("<=phone") {
  .about-block-title {
    span {
      margin-right: 10px;
    }
  }
}
</style>
