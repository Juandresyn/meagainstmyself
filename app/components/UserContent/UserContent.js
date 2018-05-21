import Vue from 'vue';
import Movement from '../../components/Movement';

export default Vue.component('UserContent', {
  props: ['index'],
  data: () => ({
    selectedMovement: null,
    movementsList: [
      { name: 'Hang Power Clean', abbr: 'HPC', id: 1 },
      { name: 'Over Head Squad', abbr: 'OHS', id: 2 },
      { name: 'Push Up', abbr: 'PU', id: 3 },
      { name: 'Front Squad', abbr: 'FS', id: 4 },
      { name: 'Dumbbell Over Head Lunges', abbr: 'DBOHL', id: 5 },
    ],
    userMovementsRecords: [
      { name: 'Dumbbell Over Head Lunges',
        abbr: 'DBOHL',
        id: 5,
        records: [
          {
            date: '',
            reps: 1,
            weight: 75,
            scale: 'lb',
          },
          {
            date: '',
            reps: 1,
            weight: 95,
            scale: 'lb',
          },
          {
            date: '',
            reps: 1,
            weight: 115,
            scale: 'lb',
          },
        ],
      },
      { name: 'Front Squad',
        abbr: 'FS',
        id: 4,
        records: [
          {
            date: '',
            reps: 1,
            weight: 75,
            scale: 'lb',
          },
          {
            date: '',
            reps: 1,
            weight: 95,
            scale: 'lb',
          },
          {
            date: '',
            reps: 1,
            weight: 115,
            scale: 'lb',
          },
        ],
      },
    ],
  }),
  methods: {
    customFilter(item, queryText) {
      const hasValue = val => val || '';
      const text = hasValue(item.name);
      const query = hasValue(queryText);
      return text.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1;
    },
    resetFilter() {
      this.selectedMovement = null;
    },
  },
  components: {
    Movement,
  },
});
