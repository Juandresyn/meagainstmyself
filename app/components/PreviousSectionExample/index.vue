<template>
  <small v-if="$store.state.previousSection">
    Previous section (set directly from the component):
    <strong>{{$store.state.previousSection}}</strong>
  </small>
</template>
