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
      path: "/sobre mi",
      name: "sobre mi",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/trabajos",
      name: "trabajos",
      component: () => import("../views/WorkView.vue"),
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
