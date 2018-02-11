// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFastAxios from 'vue-fast-axios';
import VueHead from 'vue-head';
import VueLogger from 'vuejs-logger';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import App from './containers/App';
import router from './router';
import store from './store';
import * as config from './config';

Vue.use(VueRouter);
Vue.use(VueFastAxios);
Vue.use(VueHead);
Vue.use(iView);
Vue.use(VueLogger, config.loggerOptions);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  head: config.headOptions,
});
