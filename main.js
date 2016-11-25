import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import './style.css';

Vue.use(VueMaterial)
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})

Vue.component('my-component', {
  template: `<b>{{ message }} {{ message2 }}</b>`,
  props: ['message'],
  data: () => {
    return {
      message2: 'foo'
    }
  }
});

let app = new Vue({
  el: '#app',
  template: `
    <md-toolbar>
        <div class="md-title">My App</div>

        <md-button>My Button</md-button>

        <md-avatar>
          <img src="//placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <my-component message="foo1"></my-component>
    </md-toolbar>
  `,
  data: {
    message: 'Hello Vue!'
  }
});