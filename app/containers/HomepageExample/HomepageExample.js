import PreviousSectionExample from '../../components/PreviousSectionExample';
import PreviousPersonExample from '../../components/PreviousPersonExample';
import LocalizationExample from '../../components/LocalizationExample';
import store from '../../store';

export default {
  name: 'Homepage-Example',
  data: () => (
    {
      msg: 'Homepage Example',
      mobileText: `This boilerplate uses mobile-first, so you'll find an example
       of the mobile mixins on the stylesheet.`,
      currentBreakpoint: 'Your current breakpoint is: ',
    }
  ),
  beforeDestroy() {
    store.commit('SET_PREVIOUS_PAGE', this.msg);
    store.commit('SET_ERROR_MESSAGE', '');
  },
  methods: {
    lang(language) {
      this.$i18n.locale = language;
    },
  },
  components: {
    PreviousSectionExample,
    PreviousPersonExample,
    LocalizationExample,
  },
  head: {
    title: {
      inner: 'Vue.js Boilerplate',
      complement: 'Homepage Example',
    },
    link: [
      { rel: 'canonical', href: 'http://example.com/', id: 'canonical' },
    ],
  },
};
