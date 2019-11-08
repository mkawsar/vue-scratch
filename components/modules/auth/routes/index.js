import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

export default [
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			guest: true
		}
	},

	{
		path: '/register',
		name: 'register',
		component: Register,
		meta: {
			guest: true,
			title: 'Register'
		}
	}
]
