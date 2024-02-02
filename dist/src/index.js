import JatCard from "../packages/Card/index.js";
import JatContainer from "../packages/Container/index.js";

const components = [
  JatCard,
  JatContainer
]

const install = function(Vue, opts={}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  JatCard,
  JatContainer
}

export default {
  install,
  JatCard,
  JatContainer
}

// export default install