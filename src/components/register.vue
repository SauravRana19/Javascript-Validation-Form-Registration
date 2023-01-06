<template>
  <div class="container">
    <div class="header">
      <h1>Register Validations form</h1>
    </div>
    <form @submit.prevent id="form">
      <div class="form-control">
        <label>Username</label>
        <input
          type="text"
          v-model="username"
          id="username"
          placeholder="Enter your Username"
          autocomplete="off"
          @keyup="validateName"
        />
        <span id="username-error">{{ nameError }}</span>
      </div>

      <div class="form-control">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          id="contact-email"
          placeholder="Enter your Email"
          autocomplete="off"
          @keyup="validateEmail()"
        />
        <span id="email-error">{{ emailError }} </span>
      </div>

      <div class="form-control">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="Enter your password"
          autocomplete="off"
          @keyup="validatePswd()"
        />
        <span id="password-error">{{ passError }}</span>
      </div>

      <div class="form-control">
        <label>Repeat password</label>
        <input
          type="password"
          v-model="Cpassword"
          id="Cpassword"
          placeholder="Check your password"
          autocomplete="off"
          @keyup="validateChPswd()"
        />
        <span id="Cpassword-error">{{ chpswdError }}</span>
      </div>

      <div>
        <div class="form-controls">
          <input type="submit" value="Signup" class="btn1" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "regi-ster",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      cpassword: "",

      nameError: "",
      emailError: "",
      passError: "",
      cpassError: "",
      chpswdError: "",
    };
  },
  methods: {
    validateName() {
      if (this.username.length == 0) {
        this.nameError = "Please enter a name";
        return false;
      }
      if (!this.username.match(/^[a-zA-Z0-9]+$/)) {
        this.nameError = "Please enter full name";
        return false;
      }
      this.nameError = " Username Valid";
      return true;
    },
    validateEmail() {
      if (this.email.length == 0) {
        this.emailError = "Email is required";
        return false;
      }
      if (
        !this.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        this.emailError = "Email is valid";
        return false;
      }
      this.emailError = "";
      return true;
    },
    validatePswd() {
      if (this.password.length == 0) {
        this.passError = "Password is required";
        return false;
      }
      if (
        !this.password.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        this.passError = "Password is valid";
        return false;
      }
      this.passError = "";
      return true;
    },
    validateChPswd() {
      if (this.cpassword.length == 0) {
        this.chpswdError = "Repeat Password required";
        return false;
      }
      if (
        !this.cpassword.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        this.chpswdError = "Password Repeated";
        return false;
      }
      this.chpswdError = "";
      return true;
    },
  },
};
</script>

<style>
.header h1 {
  font-size: 2.5vw;
  color: rgba(14, 28, 107, 0.996);
}
.container {
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(241, 235, 240) 13%,
    rgb(158, 155, 221) 100%
  );
  border-radius: 15px;
  width: 32vw;
  height: auto;
  margin-top: 5%;
}
.form-controls .btn1 {
  color: #fafafa;
  font-size: 20px;
  background-color: #d93476;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 10px;
  border: solid #f0f3f5 2px;
  text-decoration: none;
  width: 100%;
}
.form .btn:hover {
  background: #6cfc3c;
  background-image: linear-gradient(to bottom, #6cfc3c, #3498db);
  text-decoration: none;
}
form {
  padding: 5px;
}
.form-control {
  width: 100%;
  height: 7vw;
  margin-bottom: 5px;
  position: relative;
}
.form-control label {
  display: inline-block;

  font-size: 1.2vw;
}
.form-control input {
  width: 98%;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  display: block;
  font-size: 1vw;
  padding: 5px;
}
.form-control input:focus {
  outline: 0;
  border-color: #777;
}
.form-control span {
  position: absolute;
  bottom: 5px;
  right: 12px;
  font-size: 1.2vw;
  color: red;
}
</style>
