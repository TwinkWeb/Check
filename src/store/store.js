import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/store/auth.state";
import { commonLayoutModule } from "@/store/common-layout.state";
import { profileState } from "@/store/profile.state";
import { dealsState } from "@/store/deals.state";
import { currency } from "@/store/currency.store";
import { payment } from "@/store/withdraw.state";
import { sellBot } from "@/modules/sell-bot/sell-bot.store";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    commonLayoutModule,
    profileState,
    dealsState,
    auth,
    currency,
    payment,
    sellBot
  }
});
