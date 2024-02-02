import JatCard from "./src/main.vue"

/* istanbul ignore next */
JatCard.install = function(Vue) {
  Vue.component(JatCard.name, JatCard);
};

export default JatCard;
