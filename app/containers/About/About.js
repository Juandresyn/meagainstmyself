import Menu from '../../components/Menu';

class AboutService {
  base = () => 'https://jsonplaceholder.typicode.com/';
  defaultVMessage = () => 'Error with the API request';
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
  methods: {
    async load() {
      this.users = await this.service.call('getUsers');
    },
    validationError: (message) => {
      console.log(message);
    },
  },
  components: {
    Menu,
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
