import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Store({
  modules: {},
  state: {
    previousSection: '',
    errorMessage: '',
    peopleList: [],
  },
  mutations,
  actions,
});
