<template>
  <v-container fluid text-xs-center class="homepage-container">
    <v-layout row>
      <v-flex xs12 lg12>
        <h1>{{ msg }}</h1>
        <h2>Vue-boilerplate Homepage</h2>
        <p v-text="mobileText"></p>
        <p v-cloak v-text="currentBreakpoint" class="breakpoint"></p>
        <LocalizationExample v-bind="{lang}" />
      </v-flex>
    </v-layout>
    <v-divider light />
    <v-layout row>
      <v-flex xs12 lg12>
        <PreviousSectionExample />
      </v-flex>
    </v-layout>
    <v-divider light />
    <v-layout row>
      <v-flex xs12 lg12>
        <PreviousPersonExample />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./HomepageExample.js"></script>
<style lang="scss" scoped>
   @import './styles.scss'
</style>
