import Vue from 'vue'
import VueRouter from 'vue-router'
const Cart = () => import('../views/cart/Cart.vue')
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
