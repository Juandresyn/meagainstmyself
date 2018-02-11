<template>
  <div v-if="$store.state.personData">
    <small>
      The last person that you looked:
      <strong>{{$store.state.personData.name}}</strong><br>
      (set with an action on the user detail page)
    </small>
  </div>
</template>
