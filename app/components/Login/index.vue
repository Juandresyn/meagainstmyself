<template>
  <div class="form form--login">
    <v-form v-model="valid" ref="loginform">
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
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >submit</v-btn>
    </v-form>
  </div>
</template>

<script src='./Login.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
