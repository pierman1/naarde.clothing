<template>
  <div class="navigation">
    <ul>
      <li>
        <nuxt-link to="/overview">Products</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
  .navigation {
    ul {
      list-style: none;
      padding: 0;
    }
  }
</style>

