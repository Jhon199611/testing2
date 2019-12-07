import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.post["Content-Type"] = 
"application/x-www-form-urlencoded";

import {store} from "./store/store"

new Vue({
  store: store,
  render: h => h(App)
}).$mount("#app");
