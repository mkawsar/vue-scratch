import Vue from 'vue'
import Vuex from 'vuex'

import userStore from '../components/modules/users/store'
import auth from '../components/modules/auth/store'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		status: '',
		token: localStorage.getItem('jwt') || '',
		user: JSON.parse(localStorage.getItem('user')) || {}
	},
	modules: {
		userStore,
		auth
	}
})
