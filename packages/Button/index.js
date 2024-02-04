import JatButton from "./src/main.vue"

/* istanbul ignore next */
JatButton.install = function(Vue) {
  Vue.component(JatButton.name, JatButton);
};

export default JatButton;
