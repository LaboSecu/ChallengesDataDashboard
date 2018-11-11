import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from './cookie-manager'
import { client } from './feathers-services'

Vue.use(Router)

function checkCookieIsValidBeforeEnter(to, from, next){
	if(client.passport.payloadIsValid(getCookie('access-token')) === true) next()
	else next('login')
}

function checkCookieInLogin(to, from, next){
	if(client.passport.payloadIsValid(getCookie('access-token')) === true) next('/')
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
			beforeEnter: checkCookieIsValidBeforeEnter
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import ('./views/Dashboard.vue'),
			beforeEnter: checkCookieIsValidBeforeEnter
		},
		{
			path: '/login',
			name: 'login',
			component: () => import ('./views/Login.vue'),
			beforeEnter: checkCookieInLogin
		},
		{
			path: '*',
			component: () => import ('./views/PageNotFound.vue')
		}
	]
})
