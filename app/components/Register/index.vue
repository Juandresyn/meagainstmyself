<template>
  <div class="form form--register">
    <v-form v-model="valid" ref="registerform">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Your Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Your Last Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passRules"
        :append-icon="pass ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (pass = !pass)"
        :type="pass ? 'password' : 'text'"
        name="input-10-1"
        label="Enter your password"
        hint="At least 8 characters"
        min="8"
        counter
        required
      ></v-text-field>
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-text-field
            v-model="city"
            :rules="cityRules"
            label="Your City"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm1>
        </v-flex>
        <v-flex xs12 sm3>
          <v-text-field
            v-model="country"
            :rules="countryRules"
            label="Your Country"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm1>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-dialog
            ref="dialog"
            :rules="ageRules"
            v-model="dateModal"
            :return-value.sync="date"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="computedDateFormatted"
              label="Birth Date"
              readonly
              required
            ></v-text-field>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dateModal = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
      <v-container fluid>
        <h3>Time trainning Crossfit (Months)</h3>
        <v-radio-group v-model="trainningTime" row>
          <v-radio
            label="1-3"
            color="blue"
            value="beginner"
          ></v-radio>
          <v-radio
            label="4-7"
            color="red"
            value="intermedium"
          ></v-radio>
          <v-radio
            label="8-12"
            color="red darken-2"
            value="advance"
          ></v-radio>
          <v-radio
            label="13 +"
            color="red darken-4"
            value="pro"
          ></v-radio>
        </v-radio-group>
      </v-container>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-left">
          <p>Do you Accept the <a href="">Terms and Conditions</a>?</p>
        </v-flex>
        <v-flex xs12>
          <v-checkbox
            label="I do"
            v-model="terms"
            :rules="termsRules"
            required
          ></v-checkbox>
        </v-flex>
      </v-layout>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >submit</v-btn>
    </v-form>
  </div>
</template>

<script src='./Register.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
