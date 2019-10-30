import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import Vuex from 'vuex'

import Main from './components/Main.vue'
import router from './router'
import store from './stores'
import config from './config';

Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.prototype.config = config;

new Vue({
	render: (createEl) => createEl(Main),
	router: router,
	store: store,
}).$mount('#app');
