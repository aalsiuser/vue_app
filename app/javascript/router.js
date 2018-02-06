import Vue from "vue/dist/vue.js";
import Router from "vue-router";
import Main from "components/blog/Main.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{ path: "/blogs", name: "blog", component: Main }]
});

export default router;
