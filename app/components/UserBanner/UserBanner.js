import Vue from 'vue';
import Hero from '../../components/Hero';
import Avatar from '../../components/Avatar';
import PrLogger from '../../components/PrLogger';

export default Vue.component('UserBanner', {
  props: ['dataInfo'],
  data: () => ({
    user: {
      name: 'Juandres',
      lastName: 'Yepes N',
      avatar: 'https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/22090050_10155964883782437_1192516419572903534_n.jpg?_nc_cat=0&oh=19a7fcd89f95ccd7b38832829357ad7e&oe=5B7C42C9',
      banner: 'https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/30706885_10156816568842437_8563554596974257498_n.jpg?_nc_cat=0&oh=96b64f6f0d901a0db3778117d5d6197d&oe=5B7AE457',
      age: '26',
      trainningTime: 'intermedium',
    },
    avatar: {
      top: '-100%',
    },
    showNewRPForm: false,
  }),
  methods: {
    trainningIcon() {
      let icon = 'expand_more';
      if (this.user.trainningTime === 'intermedium') {
        icon = 'unfold_less';
      } else if (this.user.trainningTime === 'advance') {
        icon = 'expand_less';
      } else if (this.user.trainningTime === 'pro') {
        icon = 'keyboard_capslock';
      }

      return icon;
    },
    uppercase(string) {
      return string.toUpperCase();
    },
    toggleNewRPForm() {
      this.showNewRPForm = !this.showNewRPForm;
    },
  },
  components: {
    Hero,
    Avatar,
    PrLogger,
  },
});
