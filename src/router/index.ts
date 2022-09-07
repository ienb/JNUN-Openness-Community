import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const modules: any = import.meta.globEager('./modules/**/*.ts')

const routerList: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const item = modules[key].default || {}
  const itemList = Array.isArray(item) ? [item] : [...item]
  routerList.push(...itemList)
})

const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: () => import('@/views/home.vue'),
  meta: {
    title: '首页',
  }
}

const basicRoutes = [
  homeRoute,
  ...routerList
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
