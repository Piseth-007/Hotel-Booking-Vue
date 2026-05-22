import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Experience from "../views/Experience.vue";
import About from "../views/About.vue";
import Stays from "../views/Stays.vue";
import HotelDetail from "../views/HotelDetail.vue";
import ExperienceBooking from "../views/ExperienceBooking.vue";
import PaymentLayout from "../Payments/PaymentLayout.vue";
import GuestDetail from "../views/GuestDetail.vue";

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
    path: "/stay/:slug",
    name: "HotelDetail",
    component: HotelDetail,
  },
  {
    path: "/experiencedetail",
    name: "ExperienceBooking",
    component:ExperienceBooking,
  },
  {
    path:"/paymentlayout",
    name:"PaymentLayout",
    component:PaymentLayout,
  },
  {
    path:"/guestdetail",
    name:"GuestDetail",
    component:GuestDetail,
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
