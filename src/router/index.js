import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Shockproof from "@/views/features/Shockproof.vue";
import SmartSpace from "@/views/features/SmartSpace.vue";
import Kitchen from "@/views/features/Kitchen.vue";
import Ceramics from "@/views/features/Ceramics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/feature/shockproof",
    name: "shockproof",
    component: Shockproof
  },
  {
    path: "/feature/smartspace",
    name: "smartspace",
    component: SmartSpace
  },
  {
    path: "/feature/kitchen",
    name: "kitchen",
    component: Kitchen
  },
  {
    path: "/feature/ceramics",
    name: "ceramics",
    component: Ceramics
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
