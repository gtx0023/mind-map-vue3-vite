import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 配置 errorsRouter
const errorsRouter: Array<RouteRecordRaw> = [
  // 404
  // 500
];

const routes: Array<RouteRecordRaw> = [
  ...errorsRouter,
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
