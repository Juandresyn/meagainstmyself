import Vue from 'vue';
import AmCharts from 'amcharts3';
import AmSerial from 'amcharts3/amcharts/serial';

export default Vue.component('Movement', {
  props: ['list'],
  data: () => ({
  }),
  methods: {
    reacyCharts(list) {
      list.map(i => window.AmCharts.makeChart(`chartdiv-${i.id}`, {
        type: 'serial',
        categoryField: 'type',
        chartCursor: {},
        graphs: [
          {
            type: 'column',
            title: 'Pizza types',
            valueField: 'sold',
            fillAlphas: 0.8,
          },
        ],
        dataProvider: [
          { type: 'Margherita', sold: 120 },
          { type: 'Funghi', sold: 82 },
          { type: 'Capricciosa', sold: 78 },
          { type: 'Quattro Stagioni', sold: 71 },
        ],
      }),
      );
    },
  },
  components: {
  },
  created() {
    this.reacyCharts(this.list);
  },
  updated() {
    this.reacyCharts(this.list);
  },
});
