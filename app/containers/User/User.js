import Menu from '../../components/Menu';
import { API_URL, API_ERROR } from '../../constants';

class UserService {
  base = () => API_URL;
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
  methods: {
    async load() {
      this.id = this.$route.params.id;
      this.user = await this.service.append(`/${this.$route.params.id}`).call('getUser');
      this.posts = await this.service.append(`/${this.$route.params.id}/posts`).call('getUser');
    },
    validationError: (message) => {
      console.log(message);
    },
    showUserId: (id) => {
      console.log('User ID:', id);
    },
  },
  components: {
    Menu,
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
