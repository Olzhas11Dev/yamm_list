<template>
  <div id="app">
    <div
      v-if="this.$route.path === '/'"
      style="margin-top: 10rem"
      class="d-flex justify-content-center container"
    >
      <div class="picMenu">
        <h6 class="text-center">Shopping</h6>
        <router-link to="/shopping">
          <img src="@/assets/food.png" style="width: 300px" class="img-fluid rounded border" />
        </router-link>
      </div>
      <div class="picMenu">
        <h6 class="text-center">Add Item</h6>
        <router-link to="/addProduct">
          <img src="@/assets/shop.png" style="width: 300px" class="img-fluid rounded border" />
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
