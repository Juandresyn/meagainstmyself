import Vue from 'vue';

export default Vue.component('PrLogger', {
  props: ['data', 'newform'],
  data: () => ({
    valid: false,
    submmited: false,
    weight: '',
    weightRules: [
      v => !!v || 'Weight is required',
    ],
    reps: '',
    repsRules: [
      v => !!v || 'Reps is required, at least 1',
    ],
    time: '',
    notes: '',
  }),
  methods: {
    submitPR() {
      console.log('PR Submmited');
      this.submmited = !this.submmited;
      this.$refs.registerprform.reset();
      return true;
    },
    clear() {
      this.$refs.registerprform.reset();
    },
  },
  components: {
  },
});
