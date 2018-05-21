<template>
  <div class="movement movement-component">
    <v-expansion-panel focusable expand >
      <v-expansion-panel-content
        v-for="(movement, index) in list"
        :key="index"
        value="true">
        <div slot="header">{{ movement.name }}</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          <div :id="`chartdiv-${movement.id}`" style="width: 100%; height: 400px;"></div>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script src='./Movement.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
