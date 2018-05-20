<template>
  <v-app id="app">
    <Header
      image="/assets/images/logo.png"
      :appname=name
    />
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="black" app inset>
      <v-layout row wrap justify-center>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy; {{year}} - {{name}}
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script src="./App.js"></script>

<style lang="scss">
   @import '../../styles/common-styles.scss';
</style>
<style lang="scss" scoped>
   @import './styles.scss';
</style>
