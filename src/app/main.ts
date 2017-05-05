import Vue from 'vue'
import App from './App.vue'

Vue.filter('filter0', function (value: any) {
  return "0"
})
Vue.filter('filter1', function (value: any) {
  return "1"
})

Vue.directive('focus', {
  inserted: (el: any) => {
    el.focus()
  }
})

Vue.config.errorHandler = function (err, vm, info) {
}

Vue.config.keyCodes = {
  zero: 48
}

Vue.config.silent = true
Vue.config.devtools = false
Vue.config.productionTip = false

Vue.nextTick(function () {
  console.log("Vue.nextTick")
})

var mixin = {

}

new Vue({
  el: '#app-sample',
  render: (h) => h(App, {
    props: { propMessage: 'World' }
  }),
   mixins: [mixin]
})
