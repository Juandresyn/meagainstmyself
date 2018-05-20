<template>
  <v-container fluid text-xs-center class="user-container">
    <v-flex xs4 text-xs-left offset-xs4 offset-md4 offset-lg4>
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
    </v-flex>
    <v-layout row>
      <v-flex xs12>
        <!-- <PreviousSectionExample /> -->
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
      <!-- <PreviousPersonExample v-bind="{userId: id, label: 'Show User ID on Console', showUserId}" /> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./UserExample.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
