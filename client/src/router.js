import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageNotFound from './views/PageNotFound'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import ('./views/Dashboard.vue')
		},
		{
			path: '*',
			component: PageNotFound
		}
	]
})
