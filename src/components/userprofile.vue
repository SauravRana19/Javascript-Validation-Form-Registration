<template>
  <div class="data">
    <h2 style="margin-left: 8em"> Welcome Admin </h2>
    <h1 style="margin-left: 9.5em;font-size: 2.2vw;" >All Users info</h1>
    <div>
      <headers />
      <div class="container">
        <table class="table">
          <thead class="thead-dark">
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <tr v-for="item in data" v-bind:key="item.id">
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.password }}</td>
            </tr>                  
          <tr v-for="index in userdata" v-bind:key="index.id">
            <td>{{ index?.first_name}}</td>
            <td>{{ index?.last_name}}</td>
            <td>{{ index?.email}}</td>
            
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
    };
  },
  methods: {
    getData() {
      axios.get(`https://reqres.in/api/users`).then((response) => {
        console.log("response",response.data?.data);
        // this.userdata = response.data;
        this.userdata = response.data?.data;
        console.log(this.userdata);
        
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

  //   let EmailR = localStorage.getItem("registerUser");

  //   let tempData = JSON.parse(EmailR);
  //   this.data.push(this.tempData);
  //   console.log(tempData);

  //   const [LocalData] = tempData;

  //   const { firstName, lastName, email, password } = LocalData;

  //   this.data.push(firstName, lastName, email, password);
  //   console.log(this.data);
  // },

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
