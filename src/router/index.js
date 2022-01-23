import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Diary from '../views/Diary.vue';
import Chat from '../views/Chat.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/chat',
      children: [
        {
          path: 'diary',
          name: 'diary',
          component: Diary,
        },
        {
          path: 'chat',
          name: 'chat',
          component: Chat,
        }
      ]
    }
  ]
})

export default router