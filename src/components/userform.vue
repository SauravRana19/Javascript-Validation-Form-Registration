<template>
  <div class="RegisterD">
    <h1>user Form</h1>
    <h1>{{data.FullName}}</h1>
    <form @submit.prevent>
      <div class="form-group">
        <label for=""> FullName:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="text"
          v-model="FullName"
        />
        <!-- Error Message -->
      </div>
      <div class="form-group">
        <label for=""> Email:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="email"
          v-model="Email"
        />
        <!-- Error Message -->
      </div>
      <div class="form-group">
        <label for=""> number:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="number"
          v-model="number"
        />
        <!-- Error Message -->
      </div>
      <button type="button" class="btn btn-primary"  @click="Adddata()">Add</button>
      <button type="button" class="btn btn-warning"  @click="returnd()"> Return</button>
    </form>
  </div>
</template>
<script>

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
    };
  },
  methods: {
    
    Adddata() {
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
     
      
    },
    returnd(){
      this.$router.push({ name: "dash-board" });
    }
  },
  
};
</script>
<style></style>
