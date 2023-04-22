import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
// 	faStar,
// 	faStarHalf,
// 	faHeart,
// 	faChevronRight,
// 	faChevronLeft,
// 	faChevronUp,
// 	faChevronDown,
// 	faSearch,
// 	faHome,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(
// 	faStar,
// 	faStarHalf,
// 	faHeart,
// 	faChevronRight,
// 	faChevronLeft,
// 	faChevronUp,
// 	faChevronDown,
// 	faSearch,
// 	faHome
// );

// Vue.component('font-awesome-icon', FontAwesomeIcon);

// Bootstrap
// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);

// Filters
// import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
// import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';

// Vue.use(VueFilterDateFormat);
// Vue.use(VueFilterDateParse);

createApp(App).use(createPinia()).use(router).mount("#app");
