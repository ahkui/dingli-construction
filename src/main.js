import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VModal, {
  dynamic: true,
  dynamicDefaults: {
    clickToClose: false,
    injectModalsContainer: true,
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
