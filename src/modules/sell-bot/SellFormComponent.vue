<template>
  <div class="sell-bot-form">
    <div class="bg"></div>

    <div class="wrap">
      <div class="headline mb">
        {{ $t("sell-bot.form.provide-data") }}
      </div>
      <div class="subTitle">
        {{ $t("sell-bot.form.mail") }}
      </div>
      <div class="row">
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.mail") }}
          </div>
          <vue-input
            :disabled="loader"
            @input="setLoggerData"
            v-model="mail_login"
            :class="{
              error__border: $v.$dirty && $v.mail_login.$invalid
            }"
          ></vue-input>
        </div>
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.password") }}
          </div>
          <vue-input
            :disabled="loader"
            @input="setLoggerData"
            inputType="password"
            v-model="mail_pass"
            :class="{
              error__border: $v.$dirty && $v.mail_pass.$invalid
            }"
          ></vue-input>
        </div>
      </div>
      <div class="subTitle">
        {{ $t("sell-bot.form.account") }}
      </div>
      <div class="row">
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.password") }}
          </div>
          <vue-input
            :disabled="loader"
            @input="setLoggerData"
            inputType="password"
            v-model="steam_pass"
            :class="{
              error__border: $v.$dirty && $v.steam_pass.$invalid
            }"
          ></vue-input>
        </div>
        <div class="col">
          <div class="title">
            Мафайл
          </div>
          <div class="buttonWrapper">
            <div class="fileDisplay" v-if="maFile">
              {{ maFile.name }}
              <icon-cross-logger @click="deleteMaFile" />
            </div>

            <div v-else class="wrapper">
              <vue-input
                :disabled="loader"
                @input="setLoggerData"
                placeholder="http://steam"
              ></vue-input>
              <file-upload :maFile="maFile" @select="selectFile" />
            </div>
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <button
        type="button"
        @click="submit"
        :class="[
          validationLoggerData && !loader
            ? 'btn btn2 big formBtn '
            : 'btn btn2 big formBtn disabled'
        ]"
      >
        {{ $t("common.done") }}
      </button>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import FileUpload from "./FileUploadComponent";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      validation_mafile: true,
      mail_login: null,
      mail_pass: null,
      steam_login: null,
      steam_pass: null,
      steam_mafile: {
        shared_secret: null,
        serial_number: null,
        revocation_code: null,
        uri: null,
        server_time: null,
        account_name: null,
        token_gid: null,
        identity_secret: null,
        secret_1: null,
        status: null,
        device_id: null,
        fully_enrolled: false,
        Session: {
          SessionID: null,
          SteamLogin: null,
          SteamLoginSecure: null,
          WebCookie: null,
          OAuthToken: null,
          SteamID: null
        }
      },
      items: []
    };
  },
  props: {
    loader: {
      type: Boolean
    },
    validationLoggerData: {
      type: Boolean
    },
    maFile: {
      type: File
    }
  },
  methods: {
    toggleFullBotInventory() {
      this.$emit("toggle-full-bot-inventory");
    },
    deleteMaFile() {
      this.$emit("deleteMaFile");
    },
    selectFile({ maFile, loggerFile }) {
      const mustHaveKeys = Object.keys(this.steam_mafile);
      const entries = Object.entries(maFile);

      for (const [key, value] of entries) {
        const keyValidation = !!mustHaveKeys.find(c => {
          return c === key;
        });
        const valueValidation = !!value != false;

        if (!keyValidation || !valueValidation) {
          console.log("Ваш файл поврежден");
          return;
        }
      }

      const loggerData = {
        maFile: loggerFile
      };

      this.$emit("setLoggerData", loggerData);
    },
    mapMaFile(value) {
      this.steam_mafile = value;
    },
    setLoggerData() {
      const loggerData = {
        email: this.mail_login,
        emailPassword: this.mail_pass,
        accountPassword: this.steam_pass,
        validationState: !this.$v.$invalid
      };
      this.$emit("setLoggerData", loggerData);
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid && !!this.maFile) {
        this.$emit("loaderActive", true);
        this.$emit("submit");
      }
    }
  },
  validations: {
    mail_login: {
      required,
      allowedDomains(email) {
        const domains = ["@mail.ru", "@inbox.ru", "@list.ru", "@bk.ru"];
        return domains.some(domain => email.endsWith(domain));
      }
    },
    mail_pass: {
      required
    },
    // steam_login: {
    //   required
    // }
    steam_pass: {
      required
    }
  },
  components: {
    FileUpload
  }
};
</script>

<style lang="scss">
@import "src/modules/sell-bot/sell-common";
.sell-bot-form {
  @include sell-common-styles();

  .fileDisplay {
    border-radius: 8px;
    font-weight: 500;
    font-size: 12px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    background-color: #f8c302;

    svg {
      cursor: pointer;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .col {
      width: calc(50% - 15px);
    }
  }
  .subTitle {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    opacity: 0.9;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .separator {
    height: 16px;
  }
}

.buttonWrapper {
  position: relative;
  width: 100%;

  .wrapper {
    display: flex;
    align-items: center;
  }
}

.disabled {
  background-color: #22232b !important;
  color: grey !important;
  cursor: default;
}
.disabled:hover {
  box-shadow: none !important;
}
</style>
