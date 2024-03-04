import clickOutside from './clickOutside/index.js'

const install = function (Vue) {
    Vue.directive('clickOutside', clickOutside)
}

if (window.Vue) {
    window['hasRole'] = hasRole
    window['hasPermi'] = hasPermi
    Vue.use(install) // eslint-disable-line
}

export default install