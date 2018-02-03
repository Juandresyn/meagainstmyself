<template>
  <div id="app">
    <img :src="require('../../assets/logo.png')" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Vue Boilerplate',
};
</script>

<style lang="scss" scoped>
   @import 'styles.scss'
</style>
