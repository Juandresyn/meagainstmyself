import * as types from './mutation-types';

export const mutations = {
  [types.SET_PREVIOUS_PAGE](state, payload) {
    state.previousSection = payload;
  },
  [types.SET_PEOPLE_LIST](state, payload) {
    state.peopleList = [...payload];
  },
  [types.SET_PERSON_DATA](state, payload) {
    state.personData = payload;
  },
};
