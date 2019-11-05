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
		})
		console.log(process.env.ENDPOINT)
	}
}
