<template>
   <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
  <div class="loginD">
    <div class="headers">
      <h1>Login form</h1>
      <form @submit.prevent="signIn()">
        <!-- Email -->
        <div
          class="form-group" :class="{ error: v$.form.email.$errors.length }"  >
          <label for="">Email</label>
          <input class="form-controls" placeholder="Enter your username" type="email"
             v-model="v$.form.email.$model"
          />
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
        <!-- password -->
        <div
          class="form-group"
          :class="{ error: v$.form.password.$errors.length }"
        >
          <label for="">Password</label>
          <input
            class="form-controls"
            placeholder="Enter your password"
            type="password"
            v-model="v$.form.password.$model"
          />
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
        <!-- Submit Button -->
        <div>
          <button
            :disabled="v$.form.$invalid"
            class="buttons-w"
            style="margin-top: 10%"
          >
            Login
          </button>
          <p> <a href="#" @click="registeruser()">Create account </a> </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "log-in",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      users: [],
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },
  methods: {
    signIn() {
      let EmailR = localStorage.getItem("registerUser");
      const tempData =JSON.parse(EmailR) 
      const [LocalData]= tempData
      const {email, password}=LocalData
      console.log("ssssssss",email,password)
      if (this.form.email === email && this.form.password === password) {
        alert("Login successful")
        this.$router.push("/dashboard");
      } else {
        alert("email and password is incorrect");
      }
    },
    registeruser(){
      this.$router.push("/register");
    }
  },
};
</script>
<style>
.headers {
  font-size: 1.5vw;
  text-align: center;
  margin-top: 30%;
}
.loginD {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 25em;
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(241, 235, 240) 13%,
    rgb(195, 221, 155) 100%
  );
  border-radius: 15px;
  height: 100%;
  margin-top: 5%;
}
.buttons-w {
  color: #fafafa;
  font-size: 20px;
  background-color: #d93476;
  padding: 10px 20px 10px 20px;
  border: none;
  color: #f0f3f5;
  border-radius: 10px;
  border: solid #f0f3f5 2px;
  text-decoration: none;
  width: 100%;
}
.form-controls {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: #f0f3f5;
  margin-bottom: 5px;
  position: relative;
}
.form-controls .input:focus {
  outline: 0;
  border: #f0f3f5;
}
.error-msg {
  color: red;
}
html {
   height:100%;
 }
 body {
   margin:0;
 }
 .bg {
   animation:slide 3s ease-in-out infinite alternate;
   background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
   bottom:0;
   left:-50%;
   opacity:.5;
   position:fixed;
   right:-50%;
   top:0;
   z-index:-1;
 }
 .bg2 {
   animation-direction:alternate-reverse;
   animation-duration:4s;
 }
 .bg3 {
   animation-duration:5s;
 }
 .content {
   background-color:rgba(255,255,255,.8);
   border-radius:.25em;
   box-shadow:0 0 .25em rgba(0,0,0,.25);
   box-sizing:border-box;
   left:50%;
   padding:10vmin;
   position:fixed;
   text-align:center;
   top:50%;
   transform:translate(-50%, -50%);
 }
 h1 {
   font-family:monospace;
 }
 @keyframes slide {
   0% {
     transform:translateX(-25%);
   }
   100% {
     transform:translateX(25%);
   }
 }
</style>
