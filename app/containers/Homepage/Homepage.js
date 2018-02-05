import Menu from '../../components/Menu';

export default {
  name: 'Homepage',
  data: () => (
    {
      msg: 'Homepage',
      mobileText: `This boilerplate uses mobile-first, so you'll find an example
       of the mobile mixins on the stylesheet.`,
      currentBreakpoint: 'Your current breakpoint is: ',
    }
  ),
  components: {
    Menu,
  },
  head: {
    title: {
      inner: 'Vue.js Boilerplate',
      complement: 'Homepage',
    },
    link: [
      { rel: 'canonical', href: 'http://example.com/', id: 'canonical' },
    ],
  },
};
