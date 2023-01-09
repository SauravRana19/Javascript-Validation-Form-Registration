<template>
  <div class="RegisterD">
    <div class="header">
      <h1>Register form</h1>
    </div>
    <form @submit.prevent id="form">
      <div class="form-group">
        <label for=""> First Name:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="text"
          v-model="v$.form.firstName.$model"
        />
        <div class="pre-icon os-icon os-icon-user-male-circle"></div>
        <!-- Error Message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.firstName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form-group">
        <label for="">Last Name:</label
        ><input
          class="form-control"
          placeholder="Enter last name"
          type="text"
          v-model="v$.form.lastName.$model"
        />
        <!-- Error Message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.lastName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form-group">
        <label for=""> Email address</label
        ><input
          class="form-control"
          placeholder="Enter email"
          type="email"
          v-model="v$.form.email.$model"
        />
        <div class="pre-icon os-icon os-icon-email-2-at2"></div>
        <!-- Error Message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form-group">
        <label for=""> Password</label
        ><input
          class="form-control"
          placeholder="Password"
          type="password"
          v-model="v$.form.password.$model"
        />
        <div class="pre-icon os-icon os-icon-fingerprint"></div>
        <!-- Error Message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.password.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-group">
        <label for="">Confirm Password</label
        ><input
         
          class="form-control"
          placeholder="Confirm Password"
          type="password"
          v-model="v$.form.confirmPassword.$model"
          @keyup="confirmP()"
        />
        <!-- Error Message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.confirmPassword.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>         
        </div>
      </div>

      <div>
        <div>
          <button class="buttons-w" style="margin-top: 10%;" :disabled="v$.form.$invalid">Signup</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength,sameAs} from "@vuelidate/validators";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  name: "regis-ter",

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        
      },
    };
  },
  validations() {
    return {
      form: {
        firstName: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        lastName: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        email: { required, email },
        password: { required, min: minLength(6) },
        confirmPassword: { required, sameAs: sameAs(this.form.password)},
      },
    };
  },
};
</script>

<style>
.header h1 {
  margin-left: 20%;
  font-size: 3vw;
  color: rgba(14, 28, 107, 0.996);
}
.RegisterD {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(241, 235, 240) 13%,
    rgb(158, 155, 221) 100%
  );
  border-radius: 15px;
  width: 29em;
  height: 100%;
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
  margin-left: 15%;
  padding: 5px;
  width: 70%;
}
.form-control {
 
  margin-bottom: 5px;
  position: relative;
}
.form-control label {
  display: inline-block;

  font-size: 1.2vw;
}
.form-control input {
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
