/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import {checkCookie} from "./cookie-manager"

Vue.use(Router)

const checkCookieBeforeEnter = (to, from, next) => {
    if(checkCookie() === false) next('/login')
    else next()
}

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import ('./views/Home.vue'),
            beforeEnter: checkCookieBeforeEnter
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import ('./views/Dashboard.vue'),
            beforeEnter: checkCookieBeforeEnter
		},
        {
            path: '/login',
            name: 'login',
            component: () => import ('./views/Login.vue')
        },
		{
			path: '*',
			component: () => import ('./views/PageNotFound.vue')
		}
	]
});
