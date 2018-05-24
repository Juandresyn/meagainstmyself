<template>
  <div class="prlogger prlogger-component">
    <v-layout row wrap class="flex-a-i-center">
      <v-form
      v-model="valid"
      ref="registerprform"
      class="prlogger__form"
      v-if="!submmited">
        <v-flex >
          <v-select
            :items="data"
            item-text="name"
            label="Select the Movement you just got BETTER at!"
            autocomplete
            required
          ></v-select>
        </v-flex>
        <v-text-field
          v-model="weight"
          :rules="weightRules"
          label="Weight (Lb)"
          mask="###"
          required
        ></v-text-field>
        <v-text-field
          v-model="reps"
          :rules="repsRules"
          label="Reps"
          mask="##########"
          required
        ></v-text-field>
        <v-text-field
          v-model="time"
          label="Time (mm:ss)"
          mask="##:##"
        ></v-text-field>
        <v-text-field
          textarea
          v-model="notes"
          label="Notes"
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          @click="submitPR"
        >submit</v-btn>
        <v-btn
          @click="clear"
        >Clear</v-btn>
      </v-form>
      <v-flex xs12 v-if="!submmited ? submmited : newform ">
        <v-card>
          <v-card-media src="/assets/images/success.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div class="text-xs-left">
              <h3 class="headline mb-0">WOW! What a PRO!</h3>
              <div>Keep Trainning, keep Trainning hard!<br/>If it was easy, everybody will do it.</div>
            </div>
          </v-card-title>
          <v-card-actions>
             <v-btn flat color="red" @click="submmited = false">Log New PR</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src='./PrLogger.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
