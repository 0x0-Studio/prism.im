import Vue from 'vue'
import App from './App.vue'
// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
// Vuex
import store from './store'
// Vue Router
import router from './router';
// Notification
import VueNativeNotification from 'vue-native-notification'

Vue.config.productionTip = false

Vue.use(VueNativeNotification, {
  requestOnNotify: true
});

Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
