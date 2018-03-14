<template>
  <div class="homepage-container">
    <h1>{{ msg }}</h1>
    <h2>Vue-boilerplate Homepage</h2>
    <p v-text="mobileText"></p>
    <p v-cloak v-text="currentBreakpoint" class="breakpoint"></p>
    <div>
      <h3>Vue i18n</h3>
      <p v-html="$t('message.translations')"></p>
      <Button type="primary" @click="lang('en')" v-if="$i18n.locale != 'en'">
        {{$t('message.en')}}
      </Button>
      <Button type="primary" @click="lang('es')" v-if="$i18n.locale != 'es'">
        {{$t('message.es')}}
      </Button>
    </div>
    <PreviousSection />
    <PreviousPerson />
  </div>
</template>

<script src="./Homepage.js"></script>
<style lang="scss" scoped>
   @import './styles.scss'
</style>
