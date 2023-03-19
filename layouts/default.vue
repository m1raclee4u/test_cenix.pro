<template>
  <div class="">
    <headerComponent/>
    <Nuxt/>
  </div>

</template>

<script>
  import headerComponent from "../components/headerComponent";

  export default {
    name: "default.vue",
    components: {headerComponent}
  }
</script>

<style scoped>

</style>
