<template>
  <div>
    <h3>Vue i18n</h3>
    <p v-html="$t('message.translations')"></p>
    <v-btn color="success" @click="lang('en')" v-if="$i18n.locale != 'en'">
      {{$t('message.en')}}
    </v-btn>
    <v-btn color="error" @click="lang('es')" v-if="$i18n.locale != 'es'">
      {{$t('message.es')}}
    </v-btn>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('LocalizationExample', {
  props: ['lang'],
});
</script>
