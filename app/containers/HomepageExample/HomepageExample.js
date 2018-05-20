import FeatureItem from '../../components/FeatureItem';
import store from '../../store';

export default {
  name: 'Homepage-Example',
  data: () => (
    {
      msg: 'Me Against My Self',
      mobileText: 'Track your progress, get statistics and be better.',
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
    FeatureItem,
  },
  head: {
    title: {
      inner: 'Me Against Myself',
      complement: 'Homepage',
    },
    link: [
      { rel: 'canonical', href: 'http://example.com/', id: 'canonical' },
    ],
  },
};
