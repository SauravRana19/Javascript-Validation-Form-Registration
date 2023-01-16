<template>
  <div style="width: 40rem;margin-top: 10%; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
    <div><headers></headers></div>
    <div class="tables">
      <table class="table">
        <thead class="thead-dark">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>

          <tr v-for="item in post" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <a href="#"
              ><td @click="DiscUser(item.id)">{{ item.FullName }}</td></a
            >
            <td>{{ item.email }}</td>
            <td>{{ item.number }}</td>
          </tr>
        </thead>
      </table>
      <button style="margin-left: 16rem;" type="button" class="btn btn-success" @click="retur()" > Return</button>
    </div>
    
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
    retur(){
      this.$router.push({ name: "dash-board",});
    }
  },
  mounted() {
    this.getdata();
  },
};
</script>
<style></style>
