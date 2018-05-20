  <template>
    <div :class="['hero']">
      <div
        class="hero__image"
        :style="{backgroundImage: `url(${image})`,  height, backgroundPosition: bgP}"></div>
    </div>
  </template>

  <script src='./Hero.js'></script>

  <style lang="scss" scoped>
    @import './styles.scss';
  </style>
