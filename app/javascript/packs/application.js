import Vue from "vue/dist/vue.js"; //defined path here instead of using alias in development.js
import App from "../App.vue";
import router from "../router";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
