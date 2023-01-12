<template>
  <b4 class="container"></b4>
  <div class="">
    <headers> </headers>
    <div class="tables">
      <h5 style="position: absolute; top: 9%; z-index: 1; right: 12%">
        User Id{{ data.id }}
      </h5>

      <table class="table">
        <thead class="thead-dark">
          <th class="borderr">User Data</th>
          <tr>
          <td>{{ data.body }}</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<Router-View></Router-View>
<script>
import axios from "axios";
import headers from "@/components/header.vue";
export default {
  name: "Us-er",
  components: { headers },
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
<style>
.borderr {
  font-size: 1.5vw;
}
</style>
