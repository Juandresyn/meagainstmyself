<template>
  <div class="homepage-container">
    <h1>{{ msg }}</h1>
    <h2>Vue-boilerplate Homepage</h2>
    <p v-text="mobileText"></p>
    <p v-cloak v-text="currentBreakpoint" class="breakpoint"></p>
    <PreviousSection />
    <PreviousPerson />
  </div>
</template>

<script src="./Homepage.js"></script>
<style lang="scss" scoped>
   @import './styles.scss'
</style>
