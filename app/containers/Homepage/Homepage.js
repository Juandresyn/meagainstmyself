import PreviousSection from '../../components/PreviousSection';
import PreviousPerson from '../../components/PreviousPerson';
import store from '../../store';

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
  beforeDestroy() {
    store.commit('SET_PREVIOUS_PAGE', this.msg);
  },
  components: {
    PreviousSection,
    PreviousPerson,
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
