/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you set extractStyles to true
// in config/webpack/loaders/vue.js) to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import App from './components/app.vue';
import Store from './store.js';

Vue.use(Vuex);

let store = new Vuex.Store(Store);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#application',
    store,
    components: { App }
  })
})
