<template>
     <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
  <div class="RegisterD" style="width: auto;">
    <h1 >All Users info</h1>
    <div>
      <headers />
      <div class="container">
        <table class="table">
          <thead class="thead-dark">
            <th>Name</th> 
            <th>Email</th>
            <th>Password</th>
            <tr v-for="item in data" v-bind:key="item.id">
              <td>{{ item.firstName }}</td> 
              <td>{{ item.email }}</td>
              <td>{{ item.password }}</td>
            </tr>
            <tr v-for="index in userdata" v-bind:key="index.id">
              <td>{{ index.FullName}}</td>
              <td>{{ index.email }}</td>
              <td>{{ index.number }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "@/components/header.vue";
import axios from "axios";
export default {
  name: "userProfile",
  components: { headers },
  data() {
    return {
      data: [],
      userdata: [],
      id: this.key,
      b:[]
    };
  },
  methods: {
    getData() {
      
      axios
        .get(`https://api-generator.retool.com/jJl7vj/data`)
        .then((response) => {
          console.log("response", response.data);
          this.userdata = response.data;
          this.userdata.map((data) => {
            // console.log("data", data.number);
            data.number = window.atob(data.number);
          });
        });
    },
    DiscUser(recordId) {
      this.$router.push({
        name: "userdata",
        params: {
          id: recordId,
        },
      });
    },
  },
  mounted() {
    this.data = localStorage.getItem("registerUser");
    let tempData = JSON.parse(this.data);
    // this.data.push(this.tempData);
    this.data = tempData;
    console.log(tempData);
    this.getData();
  },
};
</script>
<style>
.data {
  width: 35em;
  margin-top: 5%;
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  font-size: 1.7vw;
}
tr {
  height: 2em;
  font-size: larger;
  font-style: initial;
}
</style>
