<template>
  <div class="product-cell">
    <nuxt-link :to="'/products/' + product.id">
      <div class="product-cell__header">
        <img class="product-img" src="~/assets/images/product.jpg" alt="">
      </div>
      <div class="product-cell__body">
        <h4 class="product-title">
          {{product.name}}
        </h4>
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
    border-bottom: 1px solid $pitch;
    width: calc(25% - 20px);
    background-color: #fff;
    margin-bottom: 20px;

    .product-cell__header {
      height: 250px;
      padding: 20px;
      width: 100%;

    }

    .product-img {
      width: 80%;
      display: block;
      margin: 0 auto;
      transition: .2s;
    }

    .product-cell__body {
      padding: 10px;
      display: flex;
      flex-direction: column;
    }

    .product-title {
      font-weight: 700;
      font-size: 1em;
      margin-bottom: 10px;
    }

    .product-price {
      font-size: 1em;
      font-weight: 100;
    }

    &:hover {
      .product-img {
        width: 90%;
      }
    }
  }
</style>


