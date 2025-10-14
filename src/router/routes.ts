import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home-page', component: () => import('pages/HomePage.vue') },
      { path: 'gallery-page', component: () => import('pages/GalleryPage.vue') },
      { path: 'memories-page', component: () => import('pages/MemoriesPage.vue') },
      { path: 'milestone-page', component: () => import('pages/MilestonePage.vue') },
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
