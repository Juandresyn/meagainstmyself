<template>
  <div class="about-container">
    <h1>{{ msg }}</h1>
    <h2>Vue-boilerplate About page</h2>
    <h3>Mocked user list, retrieved using vue-fast-axios:</h3>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
        <router-link :to="'/user/' + user.id">
          {{user.name}}
        </router-link>
        <strong>&lt;{{user.email}}&gt;</strong>
      </li>
    </ul>
    <PreviousSection />
    <PreviousPerson />
  </div>
</template>

<script src="./About.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
