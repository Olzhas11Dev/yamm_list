<template>
  <div class="container">
    <h3 class="text-center mt-5 mb-5">Shopping</h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-3" v-for="item in allItems" :key="item.id">
        <div class="card">
          <img :src="item.img" alt="" />
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      allItems: [],
    };
  },

  mounted() {
    Axios.get('https://61a71b7b8395690017be94e1.mockapi.io/products').then(
      (res) => (this.allItems = res.data),
    );
  },
};
</script>

<style></style>
