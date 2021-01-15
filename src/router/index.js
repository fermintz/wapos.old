import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/login.vue';
import Option from '../views/option.vue';
import Home from "../views/home.vue";

import UserLogin from "../views/userLogin.vue";
import LoginAfter from "@/components/layout/loginAfter";

import Product from "../views/product.vue";
import CreditSelect from '../views/creditSelect.vue';
import OrderCheck from '../views/orderCheck.vue';
import Mypage from '../views/mypage.vue';
import Finish from '../views/finish.vue';
import CashChage from '../views/cashChage.vue';
import CardChage from '../views/cardChage.vue';
import InputCash from '../views/inputCash.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/option",
    name: "option",
    component: Option,
  },
  {
    path: "/userLogin",
    name: "userLogin",
    component: UserLogin,
  },
  {
    path: "/user",
    component: LoginAfter,
    children: [
      {
        name: "product",
        path: "/product",
        component: Product,
      },
      {
        name:'creditSelect',
        path:'/creditSelect',
        component:CreditSelect,
      },
      {
        name:'orderCheck',
        path:'/orderCheck',
        component:OrderCheck,
      },
      {
        name:'inputCash',
        path:'/inputCash',
        component:InputCash,
      },
      {
        name:'cardChage',
        path:'/cardChage',
        component:CardChage,
      },
      {
        name:'cashChage',
        path:'/cashChage',
        component:CashChage,
      },
      {
        name:'mypage',
        path:'/mypage',
        component:Mypage,
      },
    ],
  },
  {
    path: "/finish",
    name: "finish",
    component: Finish,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
