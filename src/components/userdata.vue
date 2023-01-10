<template>
  <div class="tables">
    <table class="table">
      <thead class="thead-dark">
        <th>UserID</th>

        <th style="text-align: center">Show Data</th>

        <tr v-for="item in data" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.body }}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Us-er",
  data() {
    return {
      data: [],
      errormsg: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    getdata() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/` + this.$route.params.id
        )
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errormsg = "error in Data";
        });
    },
  },
  mounted() {
    this.getdata();
    console.log(this.id);
  },
};
</script>
<style></style>
