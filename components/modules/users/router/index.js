import Profile from '../views/Profile.vue'

export default [
	{
		path: '/profile',
		name: 'profile',
		component: Profile,
		meta: {
			title: 'Profile',
			requireAuth: true
		}
	}
]
