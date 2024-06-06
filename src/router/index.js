import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../views/WorkView.vue"),
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
