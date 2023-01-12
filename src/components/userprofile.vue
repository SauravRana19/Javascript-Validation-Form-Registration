<template>
  <div class="data">
    <h1 style="margin-left: 12em">User Data</h1>
    <div>
      <headers />
      <div class="container">
        <table class="table">
          <thead class="thead-dark">
            <th>Name</th>
            <th> Lastname</th>
            <th>Email</th>
            <th>Password</th>
            
            <tr v-for="item in data" v-bind:key="item.id">
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.password }}</td>
            </tr>
          </thead>
        </table>
      </div>
      <button class="btn1" @click="DiscUser(item.id)">User Data</button>
      <td>{{ post[0] }}</td>
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
      post: [],
      id: this.key,
    };
  },
  methods: {
    getData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then((response) => {
          this.post = response.data;
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
  width: 50em;
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
}
</style>
