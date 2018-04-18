<template>
  <v-container fluid text-xs-center class="user-list-container">
    <v-flex xs4 text-xs-left offset-xs4 offset-md4 offset-lg4>
      <h1>{{ msg }}</h1>
      <h3>Mocked user list, retrieved using vue-fast-axios:</h3>
      <ul class="user-list">
        <li v-for="user in users" :key="user.id">
          <router-link :to="'/user/' + user.id">
            {{user.name}}
          </router-link>
          <strong>&lt;{{user.email}}&gt;</strong>
        </li>
      </ul>
      <div class="errorMessage" v-if="$store.state.errorMessage">
        {{$store.state.errorMessage}}
      </div>
    </v-flex>
    <v-layout row>
      <v-flex xs12>
        <PreviousSectionExample />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <PreviousPersonExample />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./UserListExample.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
