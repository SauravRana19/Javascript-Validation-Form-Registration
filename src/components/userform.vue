<template>
  <div class="RegisterD">
  
    <h1>user Form</h1>
    <form @submit.prevent>
      <div class="form-group">
        <label for=""> First Name:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="text"
          v-model="FirstName"
        />
        <!-- Error Message -->
      </div>
      <div class="form-group">
        <label for=""> last Name:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="text"
          v-model="lastName"
        />
        <!-- Error Message -->
      </div>
      <div class="form-group">
        <label for=""> Email:</label
        ><input
          class="form-control"
          placeholder="Enter first name"
          type="text"
          v-model="Email"
        />
        <!-- Error Message -->
      </div>
      <button @click="Adddata()">Add</button>
    </form>
    <p>{{ post }}</p>
  </div>

</template>
<script>
export default {
  name: "user-form",
  data() {
    return {
      post: [],
      FirstName: "",
      lastName: "",
      Email: "",
    };
  },
  methods: {
    Adddata() {
      fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Firstname: this.FirstName,
          lastName: this.lastName,
          email: this.Email,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.post = data;
        });
      alert("user Added");
      this.$router.push("/newuser");
    },
  },
};
</script>
<style></style>
