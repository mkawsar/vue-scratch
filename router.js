import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { title: 'Home' }
		},
		{
			path: '/about',
			name: 'about',
			component: About,
			meta: { title: 'About' }
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
			meta: { title: 'Contact' }
		}
	]
})
