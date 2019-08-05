import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/router.js';
import bulma from "bulma/css/bulma.css";
import windowSizeMixin from './mixins/WindowSizeMixin.js';

Vue.mixin(windowSizeMixin)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  bulma,
  render: h => h(App)
}).$mount('#app')
