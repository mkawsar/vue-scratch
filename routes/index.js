import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/about/About.vue'

import UserRoute from '../components/modules/users/router'
import authRoute from '../components/modules/auth/routes'

Vue.use(Router);

const baseRoute = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			title: 'Home',
			requireAuth: true
		}
	},
	{
		path: '/about',
		name: 'about',
		component: About,
		meta: {
			title: 'About',
			requireAuth: true
		}
	}
];

const routers = baseRoute.concat(
	UserRoute, authRoute,
);

const router = new Router({
	mode: 'history',
	base: '/',
	routes: routers,
	linkActiveClass: 'active',
	linkExactActiveClass: "exact-active"
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) {
		if (localStorage.getItem('jwt') == null) {
			next({
				path: '/login',
				params: {
					nextUrl: to.fullPath
				}
			});
		} else {
			let user = JSON.parse(localStorage.getItem('user'))
			if (to.matched.some(record => record.meta.is_admin)) {
				if (user.is_admin == 1) {
					next()
				}
				else {
					next({ name: 'home' })
				}
			} else {
				next()
			}
		}
	} else if (to.matched.some(record => record.meta.guest)) {
		if (localStorage.getItem('jwt') == null) {
			next()
		}
		else {
			next({ name: 'home' })
		}
	} else {
		next()
	}
});

export default router;
