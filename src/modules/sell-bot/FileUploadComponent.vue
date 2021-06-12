<template>
  <div class="file-input">
    <label for="file-upload" class="file-upload-label">
      <div class="btn-upload">
        <icon-pin></icon-pin>
        <span>{{ $t("common.select") }}</span>
      </div>
    </label>
    <input
      accept=".maFile, .mafile"
      type="file"
      id="file-upload"
      @change="select"
    />
  </div>
</template>

<script>
import { fileReader, getFileName } from "@/utils/helpers";

export default {
  name: "file-upload",
  data() {
    return {
      fileName: null
    };
  },

  methods: {
    select(event) {
      const files = event.target.files;

      fileReader(files).then(maFile => {
        this.$emit("select", { maFile, loggerFile: files[0] });
        this.fileName = getFileName(files);
      });
    }
  }
};
</script>

<style lang="scss">
.btn-upload {
  text-align: center;
  font-size: 8px;
  font-weight: 600;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.3s ease-in-out;
  color: #333333;
  cursor: pointer;
  user-select: none;
  text-decoration: unset;
  width: 65px;
  height: 25px;
  background-color: #f8c300;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #ffca62;
    box-shadow: 0 5px 13px rgba(254, 208, 37, 0.41);
  }
}
.file-input {
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input[type="file"] {
    display: none;
  }
  .file-name {
    font-size: small;
  }
}
</style>
