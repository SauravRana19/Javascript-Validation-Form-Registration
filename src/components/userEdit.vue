<template>
     <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
  
  <div class="RegisterD" style="margin-top: 20%;">
    <h1>Edit UserData</h1>
    <form >
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
          @keyup="register"
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
        <label for=""> Password:</label
        ><input
          class="form-control"
          placeholder="Enter Password"
          type="password"
          v-model="data.number"
          @keyup="register"
        />
        <!-- Error Message -->
        
          <p v-if="error.length">
            <ul >
              <li v-for =" e in error" v-bind:key="e.id"> 
                {{ e.numberValid}} 
                {{ e.regNumber }}    
              </li>
            </ul>
          </p>          
       
      </div>
      <button type="button" class="btn btn-warning" @click="Update(),register()">
        <i class="fa fa-pencil" aria-hidden="true"></i>Update
      </button>
      <button type="button" class="btn btn-success" @click="back()">
        <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Return
      </button>
    </form>
  </div>
  <div></div>
</template>
<script>
import swal from "sweetalert2";
import axios from "axios";
export default {
  name: "user-edit",
  data() {
    return {

      // regex for name with max lenght ?

      error:[],
      regEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      regName:  /^(?=.{1,5}$)[a-zA-Z]+\d+$/,
      regNumber: /^(?=.{1,5}$)[a-zA-Z]+\d+$/,
      
        id: this.$route.params.id,
      data: {
        FullName: "",
        email: "",
        number: "",    
      },
      //what is regex for name?
    };
  },
  methods: {
    getdata() {
      axios
        .get(
          " https://api-generator.retool.com/jJl7vj/data/" +
            this.id
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

      if( this.data.FullName == '' || this.data.email == '' || this.data.number == ''){
        alert("Empty Field")
      }
      else{
        var a = this.data.number;
       this.b = window.btoa(a);
        fetch("https://api-generator.retool.com/jJl7vj/data/" + this.id, {
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
              swal.fire({html:"Updated!",});
              
              this.$router.push({ name: "userdata" });
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
      register()
    {
  
     this.error=[];
     if(this.data.FullName && this.regName.test(!this.data.FullName)
      && this.data.email && this.regEmail.test(this.data.email)
       && this.data.number && this.regNumber.test(this.data.number))
     {
      console.warn("no error")
      

      // return true
      }
      if(!this.data.FullName)
      {
        this.error.push({
          namereq:"Name is required"});
      }
      else if 
      (this.regName.test(this.data.FullName)){
          this.error.push({
            nameValid: "Please enter alphabets only"});
          }
     if(!this.data.email)
      {
        this.error.push({
          emailReqError: "Email is required"
        });
      }
      else if 
        (!this.regEmail.test(this.data.email)){
          this.error.push({
            emailValid: "Email is not valid"});
      
      }
      if(!this.data.number){
     this.error.push({
      numberValid: "password is required"
     });
      }
      else if(!this.regNumber.test(this.data.number)){
          this.error.push({
            numberValid: "Please enter password only"});
          }
      console.warn("Hello",this.error);
    
     
    },
    back() {
      swal.fire({html:"Previous Page",});
      this.$router.push({ name: "dash-board" });
    },
  },
  mounted() {
    console.log(this.id);
    this.getdata();
  },
};
</script>
<style>
li {
  list-style: none;
}
ul{
  color: red;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
  margin-left: -30px;
}



</style>
