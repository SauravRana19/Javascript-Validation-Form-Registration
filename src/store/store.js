import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
  state: {
    post: [],
  },
  getters: {},
  mutations: {},
  
  actions: {
    getdata() {
      axios
        .get(`https://api-generator.retool.com/jJl7vj/data`)
        .then((response) => {
          this.post = response.data;
          console.log(this.post);
          // this.b = response.data;
          // this.b.map((data) => {
          //   console.log("data", data.number);
          //   data.number = window.atob(data.number);
        });
    },
  },

  modules: {},
});
