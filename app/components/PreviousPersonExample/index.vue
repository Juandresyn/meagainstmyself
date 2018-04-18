<template>
  <div v-if="$store.state.personData">
    <small>
      The last person that you looked:
      <strong>{{$store.state.personData.name}}</strong><br>
      (set with an action on the user detail page)
    </small>
    <a v-if="userId" @click="showUserId(userId)">{{label}}</a>
  </div>
</template>
<script src='./PreviousPersonExample.js'></script>
