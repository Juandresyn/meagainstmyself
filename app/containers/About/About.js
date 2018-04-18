import { mapActions } from 'vuex';
import PreviousSection from '../../components/PreviousSection';
import PreviousPerson from '../../components/PreviousPerson';
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
  name: 'About',
  data: () => (
    {
      msg: 'About',
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
    PreviousSection,
    PreviousPerson,
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
