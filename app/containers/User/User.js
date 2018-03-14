import { mapActions } from 'vuex';
import PreviousSection from '../../components/PreviousSection';
import PreviousPerson from '../../components/PreviousPerson';
import { MOCK_API_URL, API_ERROR } from '../../constants';
import store from '../../store';

class UserService {
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
    getUser: {
      method: 'get',
      route: 'users',
    },
  });
}

export default {
  name: 'User',
  data: () => (
    {
      id: 0,
      msg: 'User',
      user: [],
      posts: [],
    }
  ),
  mounted() {
    this.service = this.$serviceFactory(new UserService(), this);
    this.load();
  },
  beforeDestroy() {
    store.commit('SET_PREVIOUS_PAGE', this.msg);
  },
  methods: {
    async load() {
      this.setErrorMessage('');
      try {
        this.id = this.$route.params.id;
        this.user = await this.service.append(`/${this.$route.params.id}`).call('getUser');
        this.posts = await this.service.append(`/${this.$route.params.id}/posts`).call('getUser');
        this.setPersonData(this.user);
      } catch (e) {
        if (e.message === 'Network Error') {
          this.setErrorMessage(`There was an error fetching the users. 
            If you're using the mock server, be sure to use the CORS extension on your browser.`);
        }
      }
    },
    validationError(message) {
      this.$log.error(message);
    },
    showUserId(id) {
      this.$log.debug('User ID:', id);
    },
    ...mapActions([
      'setPage',
      'setPersonData',
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
      complement: 'User',
    },
    link: [
      { rel: 'canonical', href: 'http://example.com/#/user/', id: 'canonical' },
    ],
  },
};
