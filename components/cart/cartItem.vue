<template>
  <div class="cart-item">
    <ul>
      <li>{{product.name}}</li>
      <li>Price: € {{product.price}},-</li>
      <li>Size: {{product.size}}</li>
      <li>Quantity: {{product.quantity}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['product']
}
</script>

<style lang="scss" scoped>
  .cart-item {
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 10px;
  }
</style>

