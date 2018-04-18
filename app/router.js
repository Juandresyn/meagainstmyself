import Vue from 'vue';
import Router from 'vue-router';
import index from './routes/index';
import usersList from './routes/user-list';
import user from './routes/user';

Vue.use(Router);

export default new Router({
  routes: [
    index,
    usersList,
    user,
  ],
});
