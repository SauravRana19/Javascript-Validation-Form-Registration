<template>
  <div><headers></headers></div>
  <div class="tables">
    <table class="table">
      <thead class="thead-dark">
        <th>UserID</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>

        <tr v-for="item in post" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<Router-view></Router-view>
<script>
import axios from "axios";
import headers from "@/components/header.vue";
export default {
  name: "new-Users",
  components:{ headers},
  data() {
    return {
      post: "",
    };
  },
  methods: {
    getdata() {
      axios.get(`https://reqres.in/api/users`).then((response) => {
        this.post = response.data.data;
      });
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>
<style></style>
