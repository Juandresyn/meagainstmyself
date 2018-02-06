// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFastAxios from 'vue-fast-axios';
import VueHead from 'vue-head';
import App from './containers/App';
import router from './router';
// import store from './store';

Vue.use(VueRouter);
Vue.use(VueFastAxios);
Vue.use(VueHead);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  head: {
    title: {
      inner: 'Vue.js Boilerplate',
      complement: 'Homepage',
    },
    meta: [
      { name: 'application-name', content: 'Vue.js Boilerplate', id: 'appName' },
      { name: 'description', content: 'Vue.js Boilerplate', id: 'desc' },
    ],
    link: [
      { rel: 'canonical', href: 'http://example.com/', id: 'canonical' },
    ],
  },
});
