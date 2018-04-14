import Vue from "vue/dist/vue.js"; //defined path here instead of using alias in development.js
import App from "../App.vue";
import router from "../router";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";

let token = document.getElementsByName("csrf-token")[0].getAttribute("content");
axios.defaults.headers.common["X-CSRF-Token"] = token;
axios.defaults.headers.common["Accept"] = "application/json";

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
