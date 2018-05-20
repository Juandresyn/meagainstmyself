import Header from '../../components/Header';
import Hero from '../../components/Hero';

export default {
  data() {
    return {
      name: 'ME AGAINST MYSELF',
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
    Header,
    Hero,
  },
};
