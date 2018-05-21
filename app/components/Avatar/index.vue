<template>
  <div class="avatar avatar-component">
    <img
      :src="avatar"
      :alt="`${alt} Photo`"
      class="avatar__image"
      :style="{ marginTop: topPosition }">
  </div>
</template>

<script src='./Avatar.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
