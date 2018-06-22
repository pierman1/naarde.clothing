<template>
  <div class="product-cell">
    <nuxt-link :to="'/products/' + product.id">
      <div class="product-cell__header">

      </div>
      <div class="product-cell__body">
        <h4 class="product-title">
          {{product.name}}
        </h4>
        <div class="recipy">

        </div>
        <div class="product-price">
          Prijs: € {{product.price}}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "product-cell",
  props: ['product']
}
</script>

<style lang="scss" scoped>
  @import '~/assets/global.scss';
  .product-cell {
    border: 1px solid $pitch;
    width: 25%;
    height: 150px;
    margin-right: 10px;

    .product-cell__header {

    }

    .product-cell__body {
      padding: 10px;
      display: flex;
      flex-direction: column;
    }

    .product-title {
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 10px;
    }

    .product-price {
      font-size: 12px;
      font-weight: 100;
    }
  }
</style>


