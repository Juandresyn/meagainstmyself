import Vue from 'vue';

export default Vue.component('Hero', {
  props: ['image', 'className', 'height', 'bgP'],
  data() {
    return {
      defaultClasses: {
        hero: 'hero',
      },
    };
  },
  methods: {
    menuItemIcon(index) {
      return this.icons[index];
    },
  },
  components: {
  },
});
