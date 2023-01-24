<template>
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <section
    style="
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: auto; 
      margin-top: 10%;
    "
  >
    <div><headers></headers></div>
    <div class="tables">
      <table class="table table-hover">
        <thead class="thead-dark">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <tr v-for="item in post" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <td @click="DiscUser(item.id)">
              <a href="#">{{ item.FullName }} </a>
            </td>
            <td>{{ item.email }}</td>
            <td>{{ item.number }}</td>
            <td>
              <button
                @click="editUser(item.id)"
                type="button"
                class="btn1"
                data-bs-toggle="modal"
                data-bs-target="#useredit"
              >
                <i class="fa fa-pencil" aria-hidden="true"></i>
                Edit
              </button>
            </td>
            <td>
              <button
                @click="Dell(item.id)"
                type="button"
                class="btn2"
              >
                <i class="fa fa-close"></i>
                Delete
              </button>
            </td>
          </tr>
        </thead>
      </table>
      
      <div class="modal" id="useredit">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
          <h1 class="modal-title fs-5" id="useredit" > Edit user Form</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <form>
              <div class="form-group">
                <label for=""> FullName:</label
                ><input
                  class="form-control"
                  placeholder="Enter Full Name"
                  type="text"
                  v-model="data.FullName"
                  @keyup="register"
                />
                <!-- Error Message -->
                <p v-if="error.length"></p>
                <ul>
                  <li v-for="e in error" v-bind:key="e.id">
                    {{ e.namereq }}
                    {{ e.nameValid }}
                  </li>
                </ul>
              </div>
              <div class="form-group">
                <label for=""> Email:</label
                ><input
                  class="form-control"
                  placeholder="Enter Email"
                  type="email"
                  v-model="data.email"
                  @keyup="register"
                />
                <!-- Error Message -->
                <p v-if="error.length"></p>
                <ul>
                  <li v-for="e in error" v-bind:key="e.id">
                    {{ e.emailReqError }}
                    {{ e.emailValid }}
                  </li>
                </ul>
              </div>
              <div class="form-group">
                <label for=""> Password:</label
                ><input
                  class="form-control"
                  placeholder="Enter Password"
                  type="password"
                  v-model="data.number"
                  @keyup="register"
                />
                <!-- Error Message -->
                <p v-if="error.length"></p>
                <ul>
                  <li v-for="e in error" v-bind:key="e.id">
                    {{ e.numberValid }}
                    {{ e.regNumber }}
                  </li>
                </ul>
              </div>
            </form>
            <div style="display: grid">
              <button
                type="button btn"
                class="btn btn-warning"
                
                @click="Update(data.id), register() "
                data-bs-dismiss="modal"              >
                <i class="fa fa-pencil" aria-hidden="true"></i>Update
              </button>
              <button type="button" class="btn btn-success" data-bs-dismiss="modal" >
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                Dashboard
              </button> 
                         
            </div>
           
          </div>
          
        </div>
        
      </div>
      <userform/> 
    </div>
    
  </section>
  
</template>
<Router-view></Router-view>
<script>
import axios from "axios";
import swal from "sweetalert2";
import userform from "@/components/userform.vue"
// import { inject } from 'vue'
import headers from "@/components/header.vue";
export default {
  name: "dash-board",
  components: { headers,userform },
  data() {
    return {
     
      post: [],
      b: [],
      id: this.$route.params.id,

      //Modal
      error: [],
      regEmail:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      regName: /^(?=.{1,5}$)[a-zA-Z]+\d+$/,
      regNumber: /^(?=.{1,5}$)[a-zA-Z]+\d+$/,
      // id: this.$route.params.id,
      data: {
        FullName: "",
        email: "",
        number: "",
      },
    };
  },
  methods: {
    getdata() {

      axios
        .get(`https://api-generator.retool.com/jJl7vj/data`)
        .then((response) => {
          this.post = response.data;
          // console.log(this.post);
          this.b = response.data;
          this.b.map((data) => {
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
    Add() {
      this.$router.push({
        name: "user-form",
      });
    },
    Dell(recordId) {
      swal
        .fire({
          html: "Are you sure want to delete",
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
        })
        .then((response) => {
          if (response.isConfirmed) {
            fetch("https://api-generator.retool.com/jJl7vj/data/" + recordId, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((response) => {
              if (response.ok) {
                swal.fire({html:"Deleted! success",});
                // this.$router.go(this.$router.currentRoute);
                setTimeout(() => {
                location.reload()
              }, 3000);
              }
            });
          }
        });
    },
    editUser(recordId) {
      axios
        .get(" https://api-generator.retool.com/jJl7vj/data/" + recordId)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        });
    },
    Update(recordId) {
      // var regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
      // var regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
      // var regName = /\d+$/g;
      // var regname = /[^a-zA-Z]/;
      // var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // var regnumb = /^[0-9]\d{9}$/;
      if (
        this.data.FullName == "" ||
        this.data.email == "" ||
        this.data.number == ""
      ) {
        swal.fire({ title: "Empty Fields" });
      } else {
        var a = this.data.number;
        this.b = window.btoa(a);
        fetch("https://api-generator.retool.com/jJl7vj/data/" + recordId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName: this.data.FullName,
            email: this.data.email,
            number: this.b,
          }),
        })
          .then((res) => {
            if (res.ok) {
              console.log("PUT Request Successful");
              
              // setTimeout(() => {
              //   location.reload()
              // }, 2000);
              this.getdata()
              swal.fire({ html: "Updated!" });
            
              
            } else {
              console.log("PUT Request Failed");
            }
            return res;
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }
    },
    register() {
      this.error = [];
      if (
        this.data.FullName &&
        this.regName.test(!this.data.FullName) &&
        this.data.email &&
        this.regEmail.test(this.data.email) &&
        this.data.number &&
        this.regNumber.test(this.data.number)
      ) {
        console.warn("no error");
        // return true
      }
      if (!this.data.FullName) {
        this.error.push({
          namereq: "Name is required",
        });
      } else if (this.regName.test(this.data.FullName)) {
        this.error.push({
          nameValid: "Please enter alphabets only",
        });
      }
      if (!this.data.email) {
        this.error.push({
          emailReqError: "Email is required",
        });
      } else if (!this.regEmail.test(this.data.email)) {
        this.error.push({
          emailValid: "Email is not valid",
        });
      }
      if (!this.data.number) {
        this.error.push({
          numberValid: "password is required",
        });
      } else if (!this.regNumber.test(this.data.number)) {
        this.error.push({
          numberValid: "Please enter password only",
        });
      }
    },
    
    
  },
  mounted() {
    this.getdata();

    // swal.fire({html:"Dashboard",});
  },

  
};
</script>
<style>
.btn1{
  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn2{
  background-color: rgba(255, 0, 0, 0.626);
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}


li {
  list-style: none;
}
ul {
  color: red;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: large;
  margin-left: -30px;
}
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
.align-right {
  text-align: right;
}
.btn{
  width: 10rem;
  margin-left: 30%;
  margin-top: 10px;
}
</style>
