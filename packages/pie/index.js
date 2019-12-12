import PieCharts from './src/component';

/* istanbul ignore next */
PieCharts.install = function(Vue) {
  Vue.component(PieCharts.name, PieCharts);
};

export default PieCharts;
