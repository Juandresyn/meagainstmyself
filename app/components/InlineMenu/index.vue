<template>
  <nav :class="['inline-menu', className, { 'sidebar-menu horizontal': sidebar }, appendClass]">
    <ul :class="['inline-menu__ul', `${className}__ul`]">
      <li v-for="item in list" :key="item.key" :class="['inline-menu__item', `${className}__item`]">
        <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        <router-link
          :to="item.url"
          v-if="!item.modal"
          :class="['inline-menu__link', `${className}__link`]">
          {{ item.text }}
          </router-link>
        <span v-if="item.modal" @click.stop="showForm(item.text)" :class="['inline-menu__link', `${className}__link`]">{{ item.text }}</span>
      </li>
    </ul>
    <v-dialog v-model="signInUp.modal" max-width="500px">
    <v-card>
      <v-card-title>
      <h2 class="primary--text">
        {{ signInUp.signIn ? 'Sign In' : 'Sign up' }}
        <v-icon color="red">{{ signInUp.signIn ? 'whatshot' : 'person_add' }}</v-icon>
      </h2>
      <v-btn color="primary" class="close-modal right" flat icon @click.stop="signInUp.modal = false"><v-icon>clear</v-icon></v-btn>
      </v-card-title>
      <v-card-actions>
        <Login v-if="signInUp.signIn" />
        <Register v-if="signInUp.signUp" />
      </v-card-actions>
    </v-card>
  </v-dialog>
  </nav>
</template>

<script src='./InlineMenu.js'></script>

<style lang="scss" scoped>
  @import '../../styles/components/_modals.scss';
  @import './styles.scss';
</style>
