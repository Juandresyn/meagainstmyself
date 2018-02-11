// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFastAxios from 'vue-fast-axios';
import VueHead from 'vue-head';
import VueLogger from 'vuejs-logger';
import App from './containers/App';
import router from './router';
import store from './store';
import * as config from './config';

Vue.use(VueRouter);
Vue.use(VueFastAxios);
Vue.use(VueHead);
Vue.use(VueLogger, config.loggerOptions);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  head: config.headOptions,
});
