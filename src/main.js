import Vue from 'vue'
import App from './App.vue'
//import HomeApp from './HomeApp.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)
Vue.prototype.nativeDoc  = document

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
new Vue({
  router,
  store,
  render: h => h(HomeApp),
  //components: {Home, Default, Foo, Bar, Baz, WithParams, FooBar, Foobar}
}).$mount('#app')
*/