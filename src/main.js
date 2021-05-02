import Vue from "vue";
import store from "./store";
import router from "./router";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faSearch,
  faTimes,
  faUserCircle,
  faHeadphones,
  faTrophy,
  faCompactDisc,
  faStickyNote,
  faCalendarCheck,
  faPlay,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faSyncAlt,
  faRandom,
  faList,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);

library.add(
  faMusic,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faSearch,
  faTimes,
  faUserCircle,
  faHeadphones,
  faTrophy,
  faCompactDisc,
  faStickyNote,
  faCalendarCheck,
  faPlay,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSyncAlt,
  faRandom,
  faList,
  faVolumeUp
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app");
