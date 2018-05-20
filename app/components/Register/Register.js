import Vue from 'vue';

export default Vue.component('Register', {
  data: () => ({
    valid: false,
    terms: false,
    termsRules: [
      v => !!v || 'Please accept the T&C',
    ],
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    age: '',
    ageRules: [
      v => !!v || 'Age is required',
      v => v.length === 2 || 'Age must be 2 numbers',
    ],
    city: '',
    cityRules: [
      v => !!v || 'City is required',
    ],
    country: '',
    countryRules: [
      v => !!v || 'Country is required',
    ],
    lastName: '',
    lastNameRules: [
      v => !!v || 'Last Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    pass: true,
    passRules: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Password must be at least 8 characters',
    ],
    trainningTime: '',
  }),
  methods: {
    submit() {
      if (this.$refs.loginform.validate() && this.terms) {
        console.log('submited');
      }
    },
  },
  components: {
  },
});
