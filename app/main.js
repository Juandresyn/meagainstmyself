// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFastAxios from 'vue-fast-axios';
import VueHead from 'vue-head';
import VueLogger from 'vuejs-logger';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

import App from './containers/App';
import router from './router';
import store from './store';
import * as config from './config';
import messages from './translations';

Vue.use(VueRouter);
Vue.use(VueFastAxios);
Vue.use(VueHead);
Vue.use(VueI18n);
Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken4,
    secondary: colors.indigo.lighten1,
    accent: colors.red.base,
    success: colors.green.darken2,
    error: colors.red.darken2,
    warning: colors.amber.darken1,
    info: colors.blue.darken2,
  },
});
Vue.use(VueLogger, config.loggerOptions);

const i18n = new VueI18n({
  locale: 'en', // default locale
  messages,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  render: h => h(App),
  head: config.headOptions,
});
