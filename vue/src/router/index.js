import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'home',
        component: Home
    },
    {path: '/KeHuTouSu', component: () => import(/* webpackChunkName: "KeHuTouSu" */ '../views/KeHuTouSu.vue')},
    {path: '/BianHuaDianGuanLi', component: () => import(/* webpackChunkName: "BianHuaDianGuanLi" */ '../views/BianHuaDianGuanLi.vue')},
    {path: '/GaiShanGuanLi', component: () => import(/* webpackChunkName: "GaiShanGuanLi" */ '../views/GaiShanGuanLi.vue')},
    {path: '/OEE', component: () => import(/* webpackChunkName: "OEE" */ '../views/OEE.vue')},
    {path: '/PPM', component: () => import(/* webpackChunkName: "PPM" */ '../views/PPM.vue')},
    {path: '/RenYuanJuZhen', component: () => import(/* RenYuanJuZhen: "PPM" */ '../views/RenYuanJuZhen.vue')},
    {path: '/ShouJianGuanLi', component: () => import(/* webpackChunkName: "ShouJianGuanLi" */ '../views/ShouJianGuanLi.vue')},
    {path: '/TEEP', component: () => import(/* webpackChunkName: "TEEM" */ '../views/TEEP.vue')},
    {path: '/WuSGuanli', component: () => import(/* webpackChunkName: "WuSGuanli" */ '../views/WuSGuanli.vue')},
    {path: '/Test', component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')},
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
