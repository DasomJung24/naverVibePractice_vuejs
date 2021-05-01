import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "mainContent",
    component: () => import("../components/layouts/Layout.vue"),
    children: [
      {
        name: "MainContent",
        path: "mainContent",
        meta: {
          name: "메인콘텐츠",
        },
        component: () => import("../views/MainContent.vue"),
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
