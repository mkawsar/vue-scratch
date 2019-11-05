import axios from 'axios';
export default {
	profile({ commit }) {
		return new Promise((resolve, reject) => {
			let url = process.env.ENDPOINT + 'api/v1/user';
			let token = this.state.user.token;

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
		console.log(this.state.user.token)
	}
}
