import { createApp } from "vue";
import VueClickAway from "vue3-click-away";
import formatCurrency from "./mixins/formatCurrency";
import App from "./App.vue";
import "nprogress/nprogress.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).mixin(formatCurrency).use(VueClickAway).use(store).use(router).mount("#app");
