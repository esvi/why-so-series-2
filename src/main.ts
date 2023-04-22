import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Bootstrap
import BootstrapVueNext from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faStarHalf,
  faHeart,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faSearch,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faStar,
  faStarHalf,
  faHeart,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faSearch,
  faHome
);

createApp(App)
  .use(createPinia())
  .use(router)
  .use(BootstrapVueNext)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
