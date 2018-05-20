import Vue from 'vue';
import Login from '../../components/Login';
import Register from '../../components/Register';

export default Vue.component('InlineMenu', {
  props: ['list', 'className', 'sidebar', 'appendClass'],
  data() {
    return {
      signInUp: {
        modal: false,
        signIn: false,
        signUp: false,
      },
      defaultClasses: {
      },
    };
  },
  methods: {
    showForm(form) {
      this.signInUp.modal = true;
      if (form === 'Sign In') {
        this.signInUp.signIn = true;
        this.signInUp.signUp = false;
      } else if (form === 'Sign Up') {
        this.signInUp.signUp = true;
        this.signInUp.signIn = false;
      }
    },
  },
  components: {
    Login,
    Register,
  },
});
