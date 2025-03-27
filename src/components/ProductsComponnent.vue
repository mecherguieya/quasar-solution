<template>
  <div>
    <h1>Products</h1>

    <!-- Display product list -->
    <q-list bordered>
      <q-item v-for="product in products" :key="product.id">
        <q-item-section>
          <q-item-label>{{ product.name }}</q-item-label>
          <q-item-label caption>{{ product.price }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- Button to add a new product -->
    <q-btn to="/addproduct" label="Add New Product" color="primary" class="full-width" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Array to store products from local storage
const products = ref([]);

// Fetch products from local storage when the page is loaded
onMounted(() => {
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  products.value = storedProducts;
});
</script>

<style scoped>
h1 {
  text-align: center;
}

.full-width {
  margin-top: 20px; /* Adjust margin if needed */
}
</style>
