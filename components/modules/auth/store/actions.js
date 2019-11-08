import axios from 'axios'

export default {
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
					reject(err.response.data.error)
				})
		});
	},
	user({ commit }) {
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
					reject(err);
				})
		});
	},

	logout({ commit }) {
		return new Promise((resolve, reject) => {
			const token = localStorage.clear();
			resolve(token);
			// let url = process.env.ENDPOINT + 'api/v1/logout';
			// let token = localStorage.getItem('jwt');
			// let config = {
			// 	headers: { 'Authorization': `Bearer ${token}` }
			// };
			// axios.get(url, config)
			// 	.then(res => {
			// 		localStorage.clear();
			// 		resolve(res);
			// 	})
			// 	.catch(err => {
			// 		console.log(err);
			// 	})
		});
	}
}
