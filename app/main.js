// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import App from './containers/App';
import router from './router';


Vue.use(Vuex);
Vue.use(VueRouter);
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
