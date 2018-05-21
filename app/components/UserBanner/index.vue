<template>
  <div class="userbanner userbanner-component">
    <Hero
      :image="user.banner"
      height="250px"
      bgP="center"
    />
    <div class="userbanner__metadata">
      <h2>{{ user.name }} {{ user.lastName }} <span class="userbanner-metadata__level"><v-icon color="black">{{ trainningIcon() }}</v-icon>{{ uppercase(user.trainningTime) }}</span> </h2>
      <h3>{{ user.age }} Years Old</h3>
    </div>
    <div class="userbanner__actions">
      <v-tooltip left>
        <v-btn
          fab
          dark
          small
          color="success"
          slot="activator">
          <v-icon dark>add</v-icon>
        </v-btn>
        <span>Add PR</span>
      </v-tooltip>
    </div>
    <Avatar
      :avatar="user.avatar"
      :alt="user.name"
      :topPosition="avatar.top"
    />
  </div>
</template>

<script src='./UserBanner.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
