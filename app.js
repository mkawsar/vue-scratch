import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import toastr from 'vue-toastr';
import VeeValidate from 'vee-validate'

import Main from './components/Main.vue'
import router from './routes'
import store from './stores'

Vue.use(Vuex);
Vue.use(toastr, {
	duration: 1000,
});
Vue.use(VeeValidate);
Vue.prototype.$http = axios;

const token = localStorage.getItem('jwt');
if (token) {
	Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
	render: (createEl) => createEl(Main),
	router: router,
	store: store,
}).$mount('#app');
