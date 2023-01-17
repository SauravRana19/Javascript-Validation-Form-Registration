<template>
  <div class="RegisterD">
    <h1>Edit UserData</h1>
    <form @submit.prevent="register()">
      <div class="form-group">
        <label for=""> FullName:</label
        ><input
          class="form-control"
          placeholder="Enter Full Name"
          type="text"
          v-model="data.FullName"
          @blur="register"
        />
        <!-- Error Message -->
       
          <p v-if="error.length">
            <ul>
              <li v-for =" e in error" v-bind:key="e.id"> 
                {{e.namereq}} 
               {{ e.nameValid }}         
              </li>
            </ul>
          </p>         
      
      </div>
      <div class="form-group">
        <label for=""> Email:</label
        ><input
          class="form-control"
          placeholder="Enter Email"
          type="email"
          v-model="data.email"
          @blur="register"
        />
        <!-- Error Message -->
        
          <p v-if="error.length">
            <ul>
              <li v-for =" e in error" v-bind:key="e.id"> 
                {{e.emailReqError}} 
               {{e.emailValid}}     
              </li>
            </ul>
          </p>          
      

      </div>
      <div class="form-group">
        <label for=""> number:</label
        ><input
          class="form-control"
          placeholder="Enter Number"
          type="number"
          v-model="data.number"
          @blur="register"
        />
        <!-- Error Message -->
        
          <p v-if="error.length">
            <ul>
              <li v-for =" e in error" v-bind:key="e.id"> 
                {{ e.numberValid}} 
                {{ e.regNumber }}    
              </li>
            </ul>
          </p>          
       
      </div>
      <button type="button" class="btn btn-warning" @click="Update(),register()">
        Update
      </button>
      <button type="button" class="btn btn-success" @click="back()">
        Return
      </button>
    </form>
  </div>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  name: "user-edit",
  data() {
    return {
      error:[],
      regEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      regName: /[^a-zA-Z]/,
      regNumber:/^[789]\d{9}$/,
      
        id: this.$route.params.id,
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
        .get(
          " https://api-generator.retool.com/jJl7vj/data/" +
            this.$route.params.id
        )
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        });
    },
    Update() {
     
      // var regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
      // var regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
      // var regName = /\d+$/g;

      // var regname = /[^a-zA-Z]/;
      // var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // var regnumb = /^[0-9]\d{9}$/;


        fetch("https://api-generator.retool.com/jJl7vj/data/" + this.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName: this.data.FullName,
            email: this.data.email,
            number: this.data.number,
          }),
        })
          .then((res) => {
            if (res.ok) {
              console.log("PUT Request Successful");
              alert("User Data Updated Successful");
              this.$router.push({ name: "userdata" });
            } else {
              console.log("PUT Request Failed");
            }
            return res;
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },

      register(e)
    {
  
     this.error=[];
     if(this.FullName && this.regName.test(!this.FullName) && this.email && this.regEmail.test(this.email) && this.number && this.regNumber.test(this.number))
     {
      console.warn("no error")
      

      // return true
      }
      if(!this.FullName)
      {
        this.error.push({
          namereq:"Name is required"});
      }
      else if 
      (this.regName.test(this.FullName)){
          this.error.push({
            nameValid: "Please enter alphabets only"});
          }
     if(!this.email)
      {
        this.error.push({
          emailReqError: "Email is required"
        });
      }
      else if 
        (!this.regEmail.test(this.email)){
          this.error.push({
            emailValid: "Email is not valid"});
      
      }
      if(!this.number){
     this.error.push({
      numberValid: "Number is required"
     });
      }
      else if(!this.regNumber.test(this.number)){
          this.error.push({
            numberValid: "Please enter number only"});
          }
      console.warn("Hello",this.error);
      e.preventDefault();
     
    },
    returnPage() {
      console.log("ddjs");
      this.$router.go(-1);
    },
    back() {
      this.$router.push({ name: "userdata" });
    },
  },
  mounted() {
    console.log(this.id);
    this.getdata();
  },
};
</script>
<style></style>
