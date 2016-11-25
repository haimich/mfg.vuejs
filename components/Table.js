import Vue from 'vue';

export Vue.component('my-component', {
  template: `<b>{{ message }}</b>`,
  // props: ['message'],
  data: {
    message: 'foo'
  }
});