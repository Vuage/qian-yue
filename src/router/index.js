import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/webchangelog',
    name: 'WebsiteChangeLog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WebsiteChangeLog.vue'),
  },
  {
    path: '/developer',
    name: 'Developer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Developer.vue'),
  },
  {
    path: '/connectip',
    name: 'ConnectIP',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConnectIP.vue'),
  },
  {
    path: '/dcbot',
    name: 'DiscordBot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DiscordBot.vue'),
    children: [
      {
        path: 'intro',
        component: () => import('../views/DiscordBotIntro.vue'),
      },
      {
        path: 'cmd',
        component: () => import('../views/DiscordBotCmd.vue'),
      },
      {
        path: 'api',
        component: () => import('../views/DiscordBotApi.vue'),
      },
      {
        path: 'doc',
        component: () => import('../views/DiscordBotDoc.vue'),
      },
      {
        path: 'log',
        component: () => import('../views/DiscordBotLog.vue'),
      },
      {
        path: 'dev',
        component: () => import('../views/DiscordBotDev.vue'),
      },
    ],
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
    ],
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (to.fullPath.match('newPage')) {
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
