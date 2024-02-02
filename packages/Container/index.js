import JatContainer from "./src/main.vue"

/* istanbul ignore next */
JatContainer.install = function(Vue) {
  Vue.component(JatContainer.name, JatContainer);
};

export default JatContainer;
