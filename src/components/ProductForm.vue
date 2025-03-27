<template>
  <div>
    <h2>Add New Product</h2>
    <q-form @submit.prevent="addProduct">
      <q-input v-model="product.name" label="Product Name" required />
      <q-input v-model="product.price" label="Product Price" type="number" required />
      <q-btn type="submit" label="Add Product" color="primary" />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();  // Initialize router
const product = ref({
  name: '',
  price: ''
});



const addProduct = () => {
  const products = JSON.parse(localStorage.getItem('products')) || [];

  const newProduct = {
    id: Date.now(),
    name: product.value.name,
    price: parseFloat(product.value.price)
  };

  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));

  product.value.name = '';
  product.value.price = '';

  router.push('/Products');
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
