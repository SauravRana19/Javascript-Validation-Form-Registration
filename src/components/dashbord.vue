<template>
  <section
    style="
      margin-top: 15%;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
      width: 40rem;
    "
  >
    <div><headers></headers></div>
    <div class="tables">
      <table class="table">
        <thead class="thead-dark">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>

          <tr v-for="item in post" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <a href="#"
              ><td @click="DiscUser(item.id)">
                {{ item.FullName }}
              </td></a
            >
            <td @click="DiscUser(item.id)">{{ item.email }}</td>
            <td>{{ item.number }}</td>
            <td>
              <button @click="editUser(item.id)" type="button" class="btn btn-warning">
                Edit
              </button>
            </td>
            <td>
              <button @click="Dell()" type="button" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </thead>
      </table>
      <button
        style="margin-left: 15rem"
        type="button"
        class="btn btn-success"
        @click="Add()"
      >
        Add New User
      </button>
    </div>
  </section>
</template>
<Router-view></Router-view>
<script>
import axios from "axios";
import headers from "@/components/header.vue";

export default {
  name: "dash-board",
  components: { headers },
  data() {
    return {
      post: [],
      id: this.key,
      // id: this.$route.params.id,
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
    Add() {
      this.$router.push({
        name: "user-form",
      });
    },

    Dell(recordId) {
      this.$router.push({ params: { id: recordId } });
      fetch("https://api-generator.retool.com/jJl7vj/data/" + this.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("Delete successfully");
            // prompt("Are you sure you want to delete")
            // confirm("Are you sure you want to delete");
            console.log("DELETE Request Successful");
            window.location.reload();
            this.$router.push({ name: "dash-board" });
          } else {
            console.log("DELETE  Request Failed");
          }
          return res;
        })
        .then((res) => console.log(res));
    },
    editUser(recordId) {
      this.$router.push({
        name: "user-edit",
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
<style>
.tables {
  /* margin-top: 20px; */
  border-radius: 0 0 10px 10px;
  background-color: aliceblue;
  width: 100%;
  height: auto;
}
span {
  font-size: 2vw;
  color: darkslategray;
}
.gradient-custom {
  /* fallback for old browsers */
  background: #f6d365;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );
}
.btn1 {
  width: auto;
  height: auto;
  background: #ef6666e3;
  border-radius: 28px;
  font-family: Georgia;
  color: #ffff;
  font-size: 1.2vw;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn1:hover {
  background: #3cb0fd;
  text-decoration: none;
}
</style>
