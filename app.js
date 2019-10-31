import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import Vuex from 'vuex'

import Main from './components/Main.vue'
import router from './router'
import store from './stores'

Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.prototype.$http = axios;

const token = localStorage.getItem('jwt')
if (token) {
	Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
	render: (createEl) => createEl(Main),
	router: router,
	store: store,
}).$mount('#app');
