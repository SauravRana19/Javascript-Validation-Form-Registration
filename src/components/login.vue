<template>
  <div class="container" style="width: 30vw; height: 70vh; margin-top: 20%">
    <div class="headers">
      <h1>Login</h1>
    </div>
    <form class="form" id="form">
      <div class="form-control">
        <label>Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter your Email"
          autocomplete="off"
          @keyup="validateName()"
        />
        <span id="emailsEr"> {{ emailsEr }} </span>
      </div>
      <div class="form-control">
        <label>Password</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Enter your password"
          autocomplete="off"
          @keyup="validatePswd()"
        />
        <span id="passwdEr">{{ passwdEr }} </span>
      </div>
      <div>
        <input
          type="submit"
          value="Login"
          class="btn1"
          style="margin-top: 10%"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Log-in",
  data() {
    return {
      emails: "",
      passwords: "",

      emailsEr: "",
      passwdEr: "",
    };
  },
  methods: {
    validateName() {
      if (this.emails.length == 0) {
        this.emailsEr = "Email is required";
        return false;
      }
      if (
        !this.emails.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        this.emailsEr = "Email is valid";
        return false;
      }
      this.emailsEr = "";
      return true;
    },
    validatePswd() {
      if (this.passwords.length == 0) {
        this.passwdEr = "Password is required";
        return false;
      }
      if (
        !this.passwords.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        this.passwdEr = "Password is valid";
        return false;
      }
      this.passwdEr = "";
      return true;
    },
  }
}

</script>
<style>
.headers h1 {
  font-size: 3vw;
  margin-left: 8rem;
}
.form .btn1 {
  color: #fafafa;
  font-size: 20px;
  background: #d93476;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 10px;
  border: solid #f0f3f5 2px;
  text-decoration: none;
  width: 100%;
}
</style>
