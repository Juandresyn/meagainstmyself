<template>
  <div class="about-container">
    <h1>{{ msg }}</h1>
    <h2>Vue-boilerplate About page</h2>
    <Menu />
    <h3>Mocked user list, retrieved using vue-fast-axios:</h3>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
        {{user.name}} <strong>&lt;{{user.email}}&gt;</strong>
      </li>
    </ul>
  </div>
</template>

<script src="./About.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
