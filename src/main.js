import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify'
import VueFirestore from 'vue-firestore'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueFirestore)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
