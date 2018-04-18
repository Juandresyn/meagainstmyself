<template>
  <div class="user-container">
    <h1>{{ msg }}</h1>
    <h2>Vue-boilerplate User: {{user.name}} (ID: {{id}})</h2>
    <h3>Posts: </h3>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index">
        {{post.title}}
      </li>
    </ul>
    <div class="errorMessage" v-if="$store.state.errorMessage">
      {{$store.state.errorMessage}}
    </div>
    <PreviousSection />
    <PreviousPerson v-bind="{userId: id, label: 'Show User ID on Console', showUserId}" />
  </div>
</template>

<script src="./User.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
