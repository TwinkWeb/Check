import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/store/auth.state";
import { commonLayoutModule } from "@/store/common-layout.state";
import { profileState } from "@/store/profile.state";
import { dealsState } from "@/store/deals.state";
import { itemsdb } from "@/store/itemdb.store";
import { currency } from "@/store/currency.store";
import { payment } from "@/store/withdraw.state";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    commonLayoutModule,
    profileState,
    dealsState,
    auth,
    itemsdb,
    currency,
    payment
  }
});
