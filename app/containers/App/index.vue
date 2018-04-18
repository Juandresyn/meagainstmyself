<template>
  <v-app id="app">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <SidebarMenu />
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{name}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container d-flex fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-content>
            <router-view/>
          </v-content>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app inset>
      <v-layout row wrap justify-center>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy; {{year}} - {{name}}
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script src="./App.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
<style lang="scss">
   @import '../../styles/common-styles.scss'
</style>
