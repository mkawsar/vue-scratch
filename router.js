import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import Login from './components/pages/auth/Login.vue'

Vue.use(Router);

let router = new Router({
	mode: 'history',
	base: '/',
	routes: [
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
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
			meta: {
				title: 'Contact',
				requireAuth: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				guest: true
			}
		}
	],
	linkActiveClass: 'active',
	linkExactActiveClass: "exact-active"
});


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
})

export default router;
