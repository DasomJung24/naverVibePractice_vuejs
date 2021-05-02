import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/today",
    component: () => import("../components/layouts/Layout.vue"),
    children: [
      {
        name: "Today",
        path: "/today",
        meta: {
          name: "투데이",
        },
        component: () => import("../views/Today.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  hashbang: false,
  base: "/",
  routes,
});

export default router;
