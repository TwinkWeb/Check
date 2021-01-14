<template>
  <div class="file-input">
    <input ref="fileRef" type="file" id="selectFiles" value="Import" /><br />
    <button id="import">Import The File!</button>
  </div>
</template>

<script>
export default {
  name: "file-upload",
  data() {
    return {
      json: null
    };
  },
  created() {
    console.log(this.ref);
    document.getElementById("import").onclick = () => {
      const files = document.getElementById("selectFiles").files;
      if (files.length <= 0) {
        return false;
      }

      const fr = new FileReader();

      fr.onload = e => {
        try {
          this.json = JSON.parse(e.target.result);
        } catch (e) {
          console.error("unable to parse json from mofile: " + e.target.result);
        }
      };
      fr.readAsText(files.item(0));
    };
  }
};
</script>

<style>
.file-input {
}
</style>
