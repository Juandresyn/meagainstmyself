<template>
  <div class="usercontent usercontent-component">
    <v-container fluid class="usercontent__movements">
      <v-layout row wrap class="flex-a-i-center">
        <v-flex >
          <v-select
            :items="userMovementsRecords"
            :filter="customFilter"
            v-model="selectedMovement"
            item-text="name"
            label="Select"
            autocomplete
          ></v-select>
        </v-flex>
        <v-flex xs1>
          <v-btn flat icon @click="resetFilter()">
            <v-icon>clear</v-icon>
            </v-btn>
        </v-flex>
      </v-layout>
      <Movement
        :list="[selectedMovement][0] ? [selectedMovement] : userMovementsRecords"
        :id="Math.floor(Math.random() * 1000000000)"
        ></Movement>
    </v-container>
  </div>
</template>

<script src='./UserContent.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
