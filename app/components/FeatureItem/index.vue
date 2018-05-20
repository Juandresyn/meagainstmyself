<template>
  <div :class="['feature-item', className]">
    <h2 v-if="title" class="feature-item__title">{{ title }}</h2>
    <img
      v-if="image && !imageAsBg"
      :src="image"
      :alt="alt"
      :class="['feature-item__image']">
    <div
      v-else-if="image && imageAsBg"
      :style="{backgroundImage: `url('${image}')`}"
      :class="['feature-item__image--bg']">
      <div v-if="byline" class="feature-item__byline">
        <a
          v-if="link"
          :href="link"
          target="_blank"
        >{{ byline }}</a>
        <span v-else>{{ byline }}</span>
      </div>
    </div>
    <p v-if="description"> {{ description }}</p>
  </div>
</template>

<script src='./FeatureItem.js'></script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
