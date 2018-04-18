import SidebarMenu from '../../components/SidebarMenu';

export default {
  data() {
    return {
      name: 'Vue Boilerplate',
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      return this.drawer;
    },
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  components: {
    SidebarMenu,
  },
};
