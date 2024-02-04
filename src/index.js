import JatCard from "../packages/Card/index.js";
import JatContainer from "../packages/Container/index.js";
import JatIcon from "../packages/Icon/index.js"
import JatButton from "../packages/Button/index.js";

const components = [
  JatCard,
  JatContainer,
  JatIcon,
  JatButton
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
  JatCard,
  JatContainer,
  JatIcon,
  JatButton
}

export default {
  install,
  JatCard,
  JatContainer,
  JatIcon,
  JatButton
}

// export default install