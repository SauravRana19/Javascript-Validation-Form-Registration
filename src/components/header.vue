<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light border border-bottom-0-dark rounded-top"
    >
      <div class="container-fluid">
        <a
          @click="home()"
          class="nav-link active"
          aria-current="page"
          href="#"
          style="font-size: 1.5vw"
          >Home</a
        >

        <div class="navbar" style="margin-left: 50%">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li @click="alluser()"><a class="dropdown-item" href="#">All Users info </a></li>
                <li @click="logout()">
                  <a class="dropdown-item" href="">Log out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "hea-der",
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("registerUser");
      window.alert("logout succesfuly succeeded");
      this.$router.push({ name: "login" });
    },
    alluser(){
      
      this.$router.push({ name: "user-profile" });

    }
  },
  home() {
    this.$router.push({ name: "login" });
  },
};
</script>
<style></style>
