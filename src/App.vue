<template>
  <div class="container">
      Am I logged in? {{isLoggedIn}}
  </div>
  <p />
  <router-view/>
</template>
<script>
  export default {
    data: function() {
      return {
        isLoggedIn: !!localStorage.jwt
      }
    },
    watch: {
      $route: function() {
        this.isLoggedIn = !!localStorage.jwt
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
