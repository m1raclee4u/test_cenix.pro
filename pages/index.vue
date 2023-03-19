<template>
  <div class="wrapper">
    <posts/>

  </div>
</template>

<script>
import Posts from '~/components/posts/posts.vue'
export default {
  name: 'IndexPage'
}
    Posts
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    max-width: 1920px;
    margin: 0 auto;
    padding: 100px 20px 0;
  }
</style>
