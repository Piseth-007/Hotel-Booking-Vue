import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Experience from "../views/Experience.vue";
import About from "../views/About.vue";
import Stays from "../views/Stays.vue";
import HotelDetail from "../views/HotelDetail.vue";
import ExperienceBooking from "../views/ExperienceBooking.vue";
import GuestDetail from "../views/GuestDetail.vue";
import Confirmation from "../views/Confirmation.vue";
import PaymentLayout from "@/components/Payments/PaymentLayout.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

import { useAuthStore } from "@/Store/auth.js";

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
    path: "/destination/:slug",
    name: "StaysByDestination",
    component: Stays,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/stay/:slug",
    component: HotelDetail,
  },

  {
    path: "/experiencedetail/:slug",
    component: ExperienceBooking,
  },

  {
    path: "/guestdetail",
    component: GuestDetail,

    meta: {
      auth: true,
    },
  },

  {
    path: "/paymentlayout",
    component: PaymentLayout,

    meta: {
      auth: true,
    },
  },

  {
    path: "/confirmation",
    component: Confirmation,

    meta: {
      auth: true,
    },
  },

  {
    path: "/login",
    component: Login,
  },

  {
    path: "/signup",
    component: Signup,
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


router.beforeEach((to) => {
  const auth = useAuthStore();

  if (to.meta.auth && !auth.user) {
    return {
      path: "/login",
    };
  }
});

export default router;
