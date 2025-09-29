import * as Vue from "vue";

import App from "./App.vue";
import VueEcharts from "./index";
// @ts-ignore
import "virtual:uno.css";

const app = Vue.createApp(App);

app.use(VueEcharts);

app.mount("#app");
