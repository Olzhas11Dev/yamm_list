import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddProduct from '../views/AddProduct.vue';
import Shopping from '../views/Shopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping,
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
