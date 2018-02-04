<template>
  <div class="hello">
    <vue-helmet title='About' />
    <h1>{{ msg }}</h1>
    <h2>Vue-boilerplate About page</h2>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About page</router-link>
      </li>
      <li>
        <router-link to="/helloworld">Hello World</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data: () => (
    {
      msg: 'Homepage',
    }
  ),
};
</script>

<style lang="scss" scoped>
   @import 'styles.scss'
</style>
