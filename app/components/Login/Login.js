import Vue from 'vue';

export default Vue.component('Login', {
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    pass: true,
    passRules: [
      v => !!v || 'Password is required',
      v => v.length <= 20 || 'Password must be less than 8 characters',
    ],
  }),
  methods: {
    submit() {
      if (this.$refs.loginform.validate()) {
        console.log('submited');
      }
    },
  },
  components: {
  },
});
