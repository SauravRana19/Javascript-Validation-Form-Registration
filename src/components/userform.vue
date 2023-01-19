<template>
     <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
   
  <div class="RegisterD" style="margin-top: 20%;">
    <h1>user Form</h1>
    <form >
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
          v-model="Email"
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
          placeholder="Enter password"
          type="password"
          v-model="number"
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
      <button type="button" class="btn btn-primary"  @click="register(),Adddata()"><i class="fa fa-address-book" aria-hidden="true"></i>Add</button>
      <button type="button" class="btn btn-warning"  @click="returnd()"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Return</button>
    </form>
  </div>
</template>
<script>
import swal  from "sweetalert2";
export default {
  name: "user-form",
  
  data() {
    return {
      post: [],
      data:[],
      FullName: "",
      Email: "",
      number: "",
      id:this.$route.params.id,

      error:[],
      regEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      regName: /^[a-z A-Z][1,9]\d{1,5}$/,
      regNumber:/^[a-z A-Z]$/,
      
    };
  },
  methods: {
    
    Adddata(){
      if( this.FullName == "" || this.Email == "" || this.number == ''){
        alert("Empty Fields")

      }else{ 
      fetch(" https://api-generator.retool.com/jJl7vj/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FullName: this.FullName,
          email: this.Email,
          number: this.number,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.post = data;       
        });
        alert("user Added")
        this.$router.push({name: "dash-board"}); 
      }   
       
      
     
      
    },
    returnd(){
      this.$router.push({ name: "dash-board" });
      swal.fire({ html: "previous Page" });
    },
    register()
    {
  
     this.error=[];
     if(this.FullName && this.regName.test(!this.FullName) && this.Email && this.regEmail.test(this.Email) && this.number && this.regNumber.test(this.number))
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
     if(!this.Email)
      {
        this.error.push({
          emailReqError: "Email is required"
        });
      }
      else if 
        (!this.regEmail.test(this.Email)){
          this.error.push({
            emailValid: "Email is not valid"});
      
      }
      if(!this.number){
     this.error.push({
      numberValid: "password is required"
     });
      }
      else if(!this.regNumber.test(this.number)){
          this.error.push({
            numberValid: "Please Password only"});
          }
          
      console.warn("Hello",this.error);
    
     
    },
  },
  
};
</script>
<style></style>
