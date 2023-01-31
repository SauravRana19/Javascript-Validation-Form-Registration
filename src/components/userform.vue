<template>
  <button
    type="button "
    data-bs-toggle="modal"
    data-bs-target="#userforms"
    class="btn btn-success"
  >
    <i class="fa fa-address-book" aria-hidden="true"></i>Add New User
  </button>
  <div class="modal" id="userforms" @close="getdata()">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="userforms">user Form</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="form-group">
            <label for=""> FullName:</label
            ><input
              class="form-control"
              placeholder="Enter first name"
              type="text"
              v-model="FullName"
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
              v-model="Email"
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
              placeholder="Enter password"
              type="password"
              v-model="number"
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
          <button
            data-bs-dismiss="modal"
            type="button"
            class="btn btn-primary"
            @click="Adddata()"
          >
            <i class="fa fa-address-book" aria-hidden="true"></i>Add
          </button>
          <button
            type="button"
            class="btn btn-warning"
            data-bs-dismiss="modal"
            @click="returnd()"
          >
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Return
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert2";
export default {
  name: "user-form",
  data() {
    return {
      post: [],
      FullName: "",
      Email: "",
      number: "",
      id: this.$route.params.id,
      error: [],
      regEmail:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/,
      regName: /^[a-z A-Z]\w{15}$/,
      regNumber: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
    };
  },
  methods: {
    Adddata() {
      if (this.FullName == "" || this.Email == "" || this.number == "") {
        swal.fire({ title: "Empty Fields" });
      } else {
        var a = this.number;
        this.b = window.btoa(a);
        fetch(" https://api-generator.retool.com/jJl7vj/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName: this.FullName,
            email: this.Email,
            number: this.b,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.post = data;
            this.FullName = "",
            this.Email = "",
            this.number = "",
            this.$emit("showData");
          });
        swal.fire({ html: "User Added" });
      }
    },
    returnd() {
      swal.fire({ html: "Previous Page" });
    },
    register() {
      this.error = [];
      if (
        this.FullName &&
        this.regName.test(!this.FullName) &&
        this.Email &&
        this.regEmail.test(this.Email) &&
        this.number &&
        this.regNumber.test(this.number)
      ) {
        console.warn("no error");
      }
      if (!this.FullName) {
        this.error.push({
          namereq: "Name is required",
        });
      } else if (this.regName.test(this.FullName)) {
        this.error.push({
          nameValid: "Minimum 15 alphabets ",
        });
      }
      if (!this.Email) {
        this.error.push({
          emailReqError: "Email is required",
        });
      } else if (!this.regEmail.test(this.Email)) {
        this.error.push({
          emailValid: "Email is not valid",
        });
      }
      if (!this.number) {
        this.error.push({
          numberValid: "Password is required",
        });
      } else if (!this.regNumber.test(this.number)) {
        this.error.push({
          numberValid:
            "Password Should containe one Numeric, one Special Character, Minimum 6 Chracter  ",
        });
      }
    },
    showdata() {
      this.$emit("showData");
    },
  },
};
</script>
<style></style>
