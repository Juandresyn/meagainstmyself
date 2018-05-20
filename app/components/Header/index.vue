<template>
  <header :class="[className ? className : defaultClasses.header]">
    <div v-if="image || appname" class="main-header__logo-wrapper">
      <img v-if="image" :src="image" class="main-header__logo">
      <h1 class="main-header__logo-text"><a href="/">{{ appname }}</a></h1>
    </div>
    <InlineMenu
      v-if="list"
      :list="list"
      appendClass="hidden-sm-and-down"
      className="main-header__menu">
    </InlineMenu>
    <v-layout justify-end class="hidden-md-and-up">
      <v-btn
        color="white"
        class="close-modal right"
        flat
        icon
        @click.stop="sidebar = !sidebar">
        <v-icon>menu</v-icon
      ></v-btn>
    </v-layout>
    <v-navigation-drawer
      v-model="sidebar"
      temporary
      dark
      absolute
      right
    >
      <InlineMenu
        v-if="list"
        :list="list"
        :sidebar="sidebar"
        className="main-header__menu">
      </InlineMenu>
    </v-navigation-drawer>
  </header>
</template>

<script src='./Header.js'></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
