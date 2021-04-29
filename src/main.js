import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faArrowLeft,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueRouter);

library.add(faMusic, faArrowLeft, faArrowRight, faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
