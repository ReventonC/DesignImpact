import Vue from 'vue'
import Router from 'vue-router'
import Raccoonal from '@/components/Raccoonal'
import Home from '@/components/Home'
import JsaWebsite from '@/components/JsaWebsite'

Vue.use(Router)

/* eslint-disable */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Raccoonal',
            name: 'Raccoonal',
            component: Raccoonal
        },
        {
            path: '/JSA',
            name: 'UCSD JSA',
            component: JsaWebsite
        }
    ]
})
