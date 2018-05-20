import Vue from 'vue';
import InlineMenu from '../../components/InlineMenu';

export default Vue.component('Header', {
  props: ['image', 'appname', 'className'],
  data() {
    return {
      sidebar: false,
      list: {
        0: {
          url: '/about',
          text: 'What is this?',
          icon: '',
          modal: '',
        },
        1: {
          url: '/login',
          text: 'Sign In',
          icon: '',
          modal: 'SignInUp',
        },
        2: {
          url: '/signup',
          text: 'Sign Up',
          icon: '',
          modal: 'SignInUp',
        },
      },
      defaultClasses: {
        header: 'main-header',
      },
    };
  },
  methods: {
    menuItemIcon(index) {
      return this.icons[index];
    },
  },
  components: {
    InlineMenu,
  },
});
