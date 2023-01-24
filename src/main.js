import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuelidate from 'vuelidate'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import VueSimpleAlert from "vue-simple-alert";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'



createApp(App).use(router,VueSweetalert2, axios,Vuelidate).mount("#app");
