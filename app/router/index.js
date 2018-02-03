import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/foo',
      name: 'HelloWorld2',
      component: HelloWorld,
    },
    {
      path: '/bar',
      name: 'HelloWorld3',
      component: HelloWorld,
    },
  ],
});
