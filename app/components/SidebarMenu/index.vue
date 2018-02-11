<template>
  <Menu
    theme="light"
    width="auto"
    :class="menuClasses"
  >
    <MenuItem
      v-for="(link, index) in routes"
      :key="index"
      name="index.name"
      :class="menuitemClasses"
      v-if="!link.path.includes(':')"
    >
      <router-link :to="link.path">
        <Icon :type="menuItemIcon(index)"></Icon>
        <span>{{link.name}}</span>
      </router-link>
    </MenuItem>
  </Menu>
</template>

<script src='./SidebarMenu.js'></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
