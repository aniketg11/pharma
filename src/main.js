import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from "../src/components/Layout/Header"
import Footer from "../src/components/Layout/Footer"
Vue.component('Header', Header)
Vue.component('Footer', Footer)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import '../src/assets/css/app.css'
import '../src/assets/css/responsive.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
