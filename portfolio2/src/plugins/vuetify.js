import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    primary: '#03a9f4',
    secondary: '#ff9800',
    accent: '#ff5722',
    error: '#f44336',
    warning: '#ffc107',
    info: '#607d8b',
    success: '#2196f3',
    clear: '#00000000'
  }
});
