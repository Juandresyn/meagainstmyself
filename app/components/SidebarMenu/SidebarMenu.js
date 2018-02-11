import Vue from 'vue';

export default Vue.component('SidebarMenu', {
  props: ['isCollapsed'],
  data() {
    return {
      routes: this.$router.options.routes,
      icons: [
        'home',
        'information-circled',
      ],
      menuitemClasses: ['menu-item'],
    };
  },
  methods: {
    menuItemIcon(index) {
      return this.icons[index];
    },
  },
  computed: {
    menuClasses() {
      return [
        'menu-component',
        this.isCollapsed ? 'collapsed-menu' : '',
      ];
    },
  },
});
