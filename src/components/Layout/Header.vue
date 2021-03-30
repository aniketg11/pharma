<template>
  <div class="header">
    <b-navbar toggleable="lg">
       <b-navbar-brand href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" right></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
        <router-link to="/">
            Home
        </router-link>
        </b-nav-item>
        <b-nav-item href="#" right>
            Product
        </b-nav-item>
        <b-nav-item  right>
          <router-link to="/AboutUs">
              About Us
          </router-link>
        </b-nav-item>
        <b-nav-item href="#" right>
            Contact Us
        </b-nav-item>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Header",
  components: {},
};
</script>
