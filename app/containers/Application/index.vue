<template>
  <v-container class="application application-container">
    <UserBanner :dataInfo="movementsList"></UserBanner>
    <UserContent :dataInfo="movementsList"></UserContent>
  </v-container>
</template>

<script src="./Application.js"></script>
<style lang="scss" scoped>
   @import './styles.scss';
</style>
