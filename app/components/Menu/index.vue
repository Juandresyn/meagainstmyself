<template>
  <ul class="menu-component">
      <li v-for="link in routes" :key="link.component._scopeId">
        <router-link :to="link.path">
          {{link.name}}
        </router-link>
      </li>
    </ul>
</template>

<script src='./Menu.js'></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
