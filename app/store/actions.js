import * as types from './mutation-types';

export const setPage = ({ commit }) => {
  commit(types.SET_PREVIOUS_PAGE);
};
export const setPeopleList = ({ commit }, peopleList) => {
  commit(types.SET_PEOPLE_LIST, peopleList);
};
export const setPersonData = ({ commit }, personData) => {
  commit(types.SET_PERSON_DATA, personData);
};

