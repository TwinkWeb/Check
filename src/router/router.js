import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "." : "/",
  routes: [
    {
      path: "",
      name: "route.sell-items",
      component: () => import("@/views/Common/Common.vue"),
      children: [
        {
          path: "",
          redirect: { name: "route.shopping" }
        },
        {
          path: "shopping",
          name: "route.shopping",
          components: {
            default: () =>
              import("@/modules/sell-items/SellItemsFormContainer.vue"),
            controls: () =>
              import("@/modules/sell-items/SellItemsControlsContainer.vue")
          }
        }
      ]
    },
    {
      path: "/styles",
      name: "route.styles",
      component: () => import("@/views/Design-System/Design-System.vue")
    },
    {
      path: "/bots",
      name: "route.bots",
      component: () => import("@/views/Common/Common.vue"),
      children: [
        {
          path: "",
          redirect: { name: "route.rate-bot" }
        },
        {
          path: "rate",
          name: "route.rate-bot",
          components: {
            default: () =>
              import("@/modules/sell-bot/RateBotFormContainer.vue"),
            controls: () =>
              import("@/modules/sell-bot/RateBotControlsContainer.vue")
          }
        },
        {
          path: "sell",
          name: "route.sell-bot",
          components: {
            default: () =>
              import("@/modules/sell-bot/SellBotFormContainer.vue"),
            controls: () =>
              import("@/modules/sell-bot/SellBotControlsContainer.vue")
          }
        }
      ]
    },
    {
      path: "/withdraw",
      name: "withdraw",
      component: () => import("@/views/Common/Common.vue"),

      children: [
        {
          path: "/",
          name: "withdraw",
          components: {
            default: () =>
              import("@/modules/Withdraw/WithdrawFormContainer.vue"),
            controls: () =>
              import("@/modules/Withdraw/WithdrawControlsContainer.vue")
          }
        }
      ]
    },
    {
      path: "/bonus",
      name: "route.bonus",
      component: () => import("@/views/Bonus/Bonus.vue")
    },
    {
      path: "/contacts",
      name: "route.contacts",
      component: () => import("@/views/Contacts/Contacts")
    },
    {
      path: "/about",
      name: "route.about",
      component: () => import("@/views/About/About")
    },
    {
      path: "/partners",
      name: "route.partners",
      component: () => import("@/views/Partners/Partners")
    }
  ]
});

export { router };
