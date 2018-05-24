import UserBanner from '../../components/UserBanner';
import UserContent from '../../components/UserContent';

export default {
  data: () => ({
    movementsList: [
      { name: 'Hang Power Clean', abbr: 'HPC', id: 1 },
      { name: 'Over Head Squad', abbr: 'OHS', id: 2 },
      { name: 'Push Up', abbr: 'PU', id: 3 },
      { name: 'Front Squad', abbr: 'FS', id: 4 },
      { name: 'Dumbbell Over Head Lunges', abbr: 'DBOHL', id: 5 },
    ],
  }),
  methods: {
  },
  computed: {
  },
  components: {
    UserBanner,
    UserContent,
  },
};
