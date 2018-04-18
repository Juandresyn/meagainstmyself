import { mapActions } from 'vuex';
import PreviousSectionExample from '../../components/PreviousSectionExample';
import PreviousPersonExample from '../../components/PreviousPersonExample';
import { MOCK_API_URL, API_ERROR } from '../../constants';
import store from '../../store';

class AboutService {
  base = () => MOCK_API_URL;
  defaultVMessage = () => API_ERROR;
  headers = () => ({});
  routes = () => ({
    users: {
      methods: 'get',
      path: '/users',
    },
  });
  methods = () => ({
    getUsers: {
      method: 'get',
      route: 'users',
    },
  });
}

export default {
  name: 'User-List-Example',
  data: () => (
    {
      msg: 'Users List Example',
      users: [],
    }
  ),
  mounted() {
    this.service = this.$serviceFactory(new AboutService(), this);
    this.load();
  },
  beforeDestroy() {
    store.commit('SET_PREVIOUS_PAGE', this.msg);
  },
  methods: {
    async load() {
      this.setErrorMessage('');
      try {
        this.users = await this.service.call('getUsers');
        this.setPeopleList(this.users);
      } catch (e) {
        console.log('error', e.message);
        if (e.message === 'Network Error') {
          this.setErrorMessage(`There was an error fetching the users. 
            If you're using the mock server, be sure to use the CORS extension on your browser.`);
        }
      }
    },
    validationError(message) {
      this.$log.error(message);
    },
    ...mapActions([
      'setPage',
      'setPeopleList',
      'setErrorMessage',
    ]),
  },
  components: {
    PreviousSectionExample,
    PreviousPersonExample,
  },
  head: {
    title: {
      inner: 'Vue.js Boilerplate',
      complement: 'About',
    },
    link: [
      { rel: 'canonical', href: 'http://example.com/#/about/', id: 'canonical' },
    ],
  },
};
