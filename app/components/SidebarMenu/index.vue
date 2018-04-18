<template>
  <v-list>
    <v-list-tile
      v-for="(link, index) in routes"
      v-if="!link.path.includes(':')"
      :key="index"
      :to="link.path"
      :class="menuitemClasses"
      name="index.name"
      ripple
    >
      <v-list-tile-action>
        <v-icon>{{menuItemIcon(index)}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{link.name}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script src='./SidebarMenu.js'></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
