import axios from 'axios';

export default {
	state: {
		status: '',
		token: localStorage.getItem('jwt') || '',
		user: {}
	},
	actions: {
		login({ commit }, user) {
			return new Promise((resolve, reject) => {
				let url = process.env.ENDPOINT + 'api/v1/login';
				axios.post(url, {
					email: user.data.email,
					password: user.data.password
				})
					.then(res => {
						localStorage.setItem('jwt', res.data.token);
						localStorage.setItem('user', JSON.stringify(res.data.user));
						axios.defaults.headers.common['Authorization'] = res.data.token
						resolve(res);
					})
					.catch(err => {
						console.log(err)
					})
			});
		},

		user({ commit }) {
			console.log(this.state.token)
			return new Promise((resolve, reject) => {
				let url = process.env.ENDPOINT + 'api/v1/user';
				axios.get(url, {
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('jwt')
					}
				})
					.then(res => {
						resolve(res)
					})
					.catch(err => {
						console.log(err);
					})
			});
		},
	}
}
