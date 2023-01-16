<template>
  <div class="RegisterD">
    <h1>Edit UserData</h1>
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
      <button type="button" class="btn btn-warning" @click="Update()">
        Update
      </button>
      <button type="button" class="btn btn-success" @click="back()"> Return</button>
    </form>
  </div>
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
            this.$router.push({ name: "dash-board" });
          } else {
            console.log("PUT Request Failed");
          }
          return res;
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    },
    back(){
        this.$router.push({ name: "userdata" });
    }
  },
};
</script>
<style></style>
