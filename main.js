import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './style.css'

Vue.use(VueMaterial)
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});