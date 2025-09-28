import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'page-one', component: () => import('pages/PageOne.vue') },
      { path: 'page-two', component: () => import('pages/PageTwo.vue') },
      { path: 'page-three', component: () => import('pages/PageThree.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
