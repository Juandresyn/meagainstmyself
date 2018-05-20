import Vue from 'vue';
import Router from 'vue-router';
import index from './routes/index';
import user from './routes/user';
import about from './routes/about';
import application from './routes/application';

Vue.use(Router);

export default new Router({
  routes: [
    index,
    user,
    about,
    application,
  ],
  linkActiveClass: 'active', // active class for non-exact links.
  linkExactActiveClass: 'active', // active class for *exact* links.
});
