import { createRouter, createWebHistory } from 'vue-router'
import Session from '/services/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';
import Workoutlog from '../views/Workoutlog.vue';
import Sharing from '../views/Sharing.vue';
import Signup from '../views/Signup.vue';
import Contact from '../views/Contact.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/feed',
        name: 'Feed',
        component: Feed,
        meta: { requiresLogin: true }
      },
      {
        path: '/workoutlog',
        name: 'Workoutlog',
        component: Workoutlog,
      },
      {
        path: '/sharing',
        name: 'Sharing',
        component: Sharing,
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup,
       
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
      },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !Session.user){
        next('/login');
    }else{
        next();
    }
  } )

export default router