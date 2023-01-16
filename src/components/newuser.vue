<template>
  <div><headers></headers></div>
  <div class="tables">
    <table class="table">
      <thead class="thead-dark">
        <th>ID</th>
        <th>Email</th>
        <th>Number</th>

        <tr v-for="item in post" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <a href="#"><td @click="DiscUser(item.id)">{{ item.FullName}}</td></a>
          <td>{{ item.email }}</td>
          <td>{{ item.number }}</td>
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
  components: { headers },
  data() {
    return {
      post: "",
    };
  },
  methods: {
    getdata() {
      axios
        .get(`https://api-generator.retool.com/jJl7vj/data`)
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
    this.getdata();
  },
};
</script>
<style></style>
