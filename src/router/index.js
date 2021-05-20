import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/messages',
    name: 'MessageList',
    // lazy loading
    component: () => import(/* webpackChunkName: "about" */ '../components/MessageList.vue'),

  },
  
];


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes
})