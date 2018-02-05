import Menu from '../../components/Menu';

export default {
  name: 'About',
  data: () => (
    {
      msg: 'About',
    }
  ),
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
