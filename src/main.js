import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/router";
import store from "./store/store";
import i18n from "./setup/i18n-setup";
import MainToolbar from "./components/navigation/main-toolbar";
import sideBar from "./components/sideBar";
import sidebarBasket from "./components/ShoppingCardComponent";
import checkbox from "./components/checkbox";
import dropdown from "./components/dropdown";
import vueInput from "./components/vueInput";
import MobileSideBar from "./components/navigation/mobile-side-bar";
import Spinner from "./components/loaders/LoaderSpinner";
import DialogLayout from "./components/dialog/DialogLayout";
import init from "./modules/index";
import modal from "./components/modal";
import buttonSwitcher from "./components/buttons/buttonSwitcher";
import { Slider, Message, Button, Icon } from "element-ui";
import reviews from "./components/reviews";
import * as ModalDialogs from "vue-modal-dialogs";
import VueSidebarMenu from "vue-sidebar-menu";
import Auth from "./plugins/auth.plugin";

import "./styles/styles.scss";
import "element-ui/lib/theme-chalk/slider.css";
import "element-ui/lib/theme-chalk/message.css";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import { MediaQueries, CommonBands } from "vue-media-queries";
import CurrencyPlugin from "@/plugins/currency.plugin";

Vue.component("main-toolbar", MainToolbar);
Vue.component("sideBar", sideBar);
Vue.component("sidebarBasket", sidebarBasket);
Vue.component("checkbox", checkbox);
Vue.component("dropdown", dropdown);
Vue.component("vueInput", vueInput);
Vue.component("modal", modal);
Vue.component("buttonSwitcher", buttonSwitcher);
Vue.component("reviews", reviews);
Vue.component("loader-spinner", Spinner);
Vue.component("mobile-side-bar", MobileSideBar);
Vue.component("dialog-layout", DialogLayout);

const mediaQueries = new MediaQueries({
  bands: CommonBands.Materialize
});

Vue.use(Auth, {
  api: "https://usermanagement.lu13dev.fun/auth/login",
  provider: {
    steam: "steam",
    discord: "discord",
    google: "google",
    telegram: "telegram",
    vk: "vk"
  }
});
Vue.use(VueAxios, axios);
Vue.use(Slider);
Vue.use(Button);
Vue.use(Icon);
Vue.use(ModalDialogs);
Vue.use(VueSidebarMenu);
Vue.use(mediaQueries);
Vue.use(CurrencyPlugin);

Vue.prototype.$message = Message;

const requireComponent = require.context(
  "../public/icons",
  false,
  /(Icon)[A-Z]\w+\.(svg)$/
);

requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename);
  const componentName = filename
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  Vue.component(componentName, componentConfig.default || componentConfig);
});

init(store);

new Vue({
  router,
  store,
  i18n,
  mediaQueries,
  mixins: [CommonBands.Materialize.mixin],
  render: h => h(App)
}).$mount("#app");
