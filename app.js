import Vue from 'vue'
import Vuelidate from 'vuelidate'

import Main from './components/Main.vue'
import router from './router'

Vue.use(Vuelidate);

new Vue({
	render: (createEl) => createEl(Main),
	router: router,
}).$mount('#app');
