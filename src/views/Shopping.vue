<template>
  <div class="container">
    <h3 class="text-center mt-5 mb-5">Shopping</h3>
    <div>Total:{{ rounded }}</div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-3" v-for="item in allItems" :key="item.id">
            <div class="card item" @click="addToBasket(item)">
              <img :src="item.img" alt="" />
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 border pt-4">
        <h3>Items</h3>
        <div v-for="elem in addedToBasket" :key="elem.id">
          <div class="bg-secondary d-flex justify-content-between mb-2 p-2 text-white">
            <div>{{ elem.title }} x {{ elem.quantity }}</div>
            <div>{{ (elem.quantity * elem.price).toFixed(2) }}</div>
          </div>
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
      addedToBasket: [],
      total: 0,
      rounded: 0,
    };
  },

  methods: {
    addToBasket(product) {
      let founded = this.addedToBasket.find((elem) => elem.id === product.id);
      if (founded) {
        founded.quantity += 1;
        console.log(this.addedToBasket);
      } else {
        this.addedToBasket.push(product);
      }
      this.total += product.price;
      this.rounded = Math.round((this.total + Number.EPSILON) * 100) / 100;
    },
  },

  mounted() {
    Axios.get('https://61a71b7b8395690017be94e1.mockapi.io/products').then(
      (res) => (this.allItems = res.data),
    );
  },
};
</script>

<style>
.item {
  cursor: pointer;
}
</style>
