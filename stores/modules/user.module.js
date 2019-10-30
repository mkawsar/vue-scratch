export default {
	state: {
		status: '',
		token: localStorage.getItem('jwt'),
		user: {}
	},
	actions: {
		login({ commit }, user) {
			console.log(process.env.VUE_APP_ROOT_API);
		}
	}
}
