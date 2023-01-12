import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


createApp(App).use(router, axios).mount("#app");
