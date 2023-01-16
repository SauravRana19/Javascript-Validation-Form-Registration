<template>
  <div class="RegisterD">
    <h1>Edit UserData</h1>
    <form @submit.prevent>
      <div class="form-group">
        <h2>{{ post }}</h2>
        <tr v-for="item in post" v-bind:key="item.id">
              <td>{{ item.FullName}}</td> 
              <td>{{ item.email }}</td>
              <td>{{ item.password }}</td>
            </tr>
        <label for=""> FullName:</label
        ><input
          class="form-control"
          placeholder=""
          type="text"
          v-model="FullName"
        />
        <!-- Error Message -->
      </div>
      <div class="form-group">
        <label for=""> Email:</label
        ><input
          class="form-control"
          placeholder=""
          type="email"
          v-model="Email"
        />
        <!-- Error Message -->
      </div>
      <div class="form-group">
        <label for=""> number:</label
        ><input
          class="form-control"
          placeholder=""
          type="number"
          v-model="number"
        />
        <!-- Error Message -->
      </div>
      <button type="button" class="btn btn-warning" @click="Update()">
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
export default {
  name: "user-edit",
  data() {
    return {
      post: [],
      FullName: "",
      Email: "",
      number: "",
      id: this.$route.params.id,
      
    };
  },
  methods: {
    Update() {
      fetch("https://api-generator.retool.com/jJl7vj/data/" + this.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FullName: this.FullName,
          email: this.Email,
          number: this.number,
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
    back() {
      this.$router.push({ name: "userdata" });
    },
  },
  mounted() {
    console.log(this.id);
    fetch("https://api-generator.retool.com/jJl7vj/data/" + this.id, )
      .then((response) => {
        this.post = response.json();
       
        return this.post
        
        
         
      }).then((data) =>{
        console.log("data",data)

        console.log(this.post);
      })
      
      .catch((error) => {
        console.log(error);
        this.errormsg = "error in Data";
      });
  },
};
</script>
<style></style>
