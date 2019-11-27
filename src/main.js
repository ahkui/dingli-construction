import Vue from 'vue';
import VModal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue';
// import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faFacebook);


Vue.config.productionTip = false;

Vue.use(VModal, {
  dynamic: true,
  dynamicDefaults: {
    clickToClose: false,
    injectModalsContainer: true,
  },
});

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  // store,
  render: h => h(App),
}).$mount('#app');
