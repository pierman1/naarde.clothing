<template>
  <div class="navigation">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
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
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      display: flex;

      li {
        padding: 16px 15px 0;

        a {
          font-size: 14px;
        }
      }
    }
  }
</style>

