import Vue from 'vue';

export default Vue.component('Menu', {
  props: ['pageName', 'userId', 'showUserId', 'label'],
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
});
