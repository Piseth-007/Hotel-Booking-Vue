import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Experience from "../views/Experience.vue";
import About from "../views/About.vue";
import Stays from "../views/Stays.vue";
import HotelDetail from "../views/HotelDetail.vue";
import ExperienceBooking from "../views/ExperienceBooking.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/stays",
    name: "Stays",
    component: Stays,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/hoteldetail",
    name: "HotelDetail",
    component: HotelDetail,
  },
  {
    path: "/experiencedetail",
    name: "ExperienceBooking",
    component:ExperienceBooking,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
