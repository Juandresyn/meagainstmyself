import Vue from 'vue';

export default Vue.component('Menu', {
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
});
