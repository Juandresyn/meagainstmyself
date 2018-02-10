<template>
  <div>
    <h2>Menu for: {{pageName}}</h2>
    <ul class="menu-component">
      <li v-for="(link, index) in routes" :key="index" v-if="!link.path.includes(':')">
        <router-link :to="link.path">
          {{link.name}}
        </router-link>
      </li>
      <li>
        <a v-if="userId" @click="showUserId(userId)">{{label}}</a>
      </li>
    </ul>
  </div>
</template>

<script src='./Menu.js'></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
