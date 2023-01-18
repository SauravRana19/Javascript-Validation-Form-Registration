<template>
     <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>

  <section
    style="
      margin-top: 1%;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: auto;
    "
  >
    <div><headers></headers></div>
    <div class="tables">
      <table class="table table-hover">
        <thead class="thead-dark">
          <th >Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>

          <tr v-for="item in post" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <td @click="DiscUser(item.id)">
              <a href="#">{{ item.FullName }} </a>
            </td>
            <td @click="DiscUser(item.id)">{{ item.email }}</td>
            <td>{{ item.number }}</td>
            <td>
              <button
                @click="editUser(item.id)"
                type="button"
                class="btn btn-warning btn-sm"
              >
              <i class="fa fa-pencil" aria-hidden="true"></i>
                Edit
              </button>
            </td>
            <td>
              <button
                @click="Dell(item.id)"
                type="button"
                class="btn btn-danger btn-sm"
                
                
              ><i class="fa fa-close"></i>
                Delete
              </button>
            </td>
          </tr>
        </thead>
      </table>
      <div class="align-right">
        <button type="button" class="btn btn-success" @click="Add()">
          <i class="fa fa-address-book" aria-hidden="true"></i>Add New User
        </button>
        </div>
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
      // id: this.key,
      id: this.$route.params.id,
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
      if (confirm("Are you sure you want to delete")) {
        fetch("https://api-generator.retool.com/jJl7vj/data/" + recordId, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.ok) {
              // prompt("Are you sure you want to delete")

              console.log("DELETE Request Successful");
              location.reload();
              this.$router.push({ name: "dash-board" });
            } else {
              console.log("DELETE  Request Failed");
            }
            return res;
          })
          .then((res) => console.log(res));
      }
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
td a {
  text-decoration: none;
}
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
.align-right {
        text-align: right;
       
      }
</style>
