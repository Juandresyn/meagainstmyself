import Vue from 'vue';

export default Vue.component('SidebarMenu', {
  props: ['isCollapsed'],
  data() {
    return {
      routes: this.$router.options.routes,
      icons: [
        'home',
        'contact_mail',
      ],
      menuitemClasses: ['menu-item'],
    };
  },
  methods: {
    menuItemIcon(index) {
      return this.icons[index];
    },
  },
});
