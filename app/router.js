import Vue from 'vue';
import Router from 'vue-router';
import index from './routes/index';
import about from './routes/about';
import helloworld from './routes/helloworld';

Vue.use(Router);

export default new Router({
  routes: [
    index,
    about,
    helloworld,
  ],
});
