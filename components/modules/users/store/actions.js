import axios from 'axios';
export default {
	profile({ commit }) {
		return new Promise((resolve, reject) => {
			let url = process.env.ENDPOINT + 'api/v1/user';
			let token = localStorage.getItem('jwt');

			axios.get(url, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					reject(err.response);
				})
		});
	},
	profileUpdate({ commit, state }, user) {
		return new Promise((resolve, reject) => {
			const url = process.env.ENDPOINT + 'api/v1/user/profile/update';
			const token = localStorage.getItem('jwt');
			axios.put(url, {
				first_name: user.data.first_name,
				last_name: user.data.last_name
			}, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				})
		})
	}
}
