import JatButton from "../packages/button/index.js";
import JatTable from "../packages/table/index.js";

const components = [
  JatButton,
  JatTable
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
  JatButton,
  JatTable,
  install
}

export default {
  JatButton,
  JatTable,
  install
}

// export default install