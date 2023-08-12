export default [
  {
    path: '/',
    name: 'home-page',
    routerName: '主页',
    component: () => import('../views/home-page/index.vue')
  },
  {
    path: '/init-map',
    name: 'init-map',
    routerName: '初始化地图',
    component: () => import('../views/init-map/index.vue')
  }
]
