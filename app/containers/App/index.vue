<template>
  <div id="app" class="layout">
    <Layout>
      <Header :style="{height: '10vh'}">
        <div class="logo">
          <router-link to="/">
            <img src="/assets/VueBoilerplate.png" />
          </router-link>
        </div>
      </Header>
      <Layout :style="{minHeight: '90vh'}">
        <Sider
          collapsible
          :collapsed-width="78"
          v-model="isCollapsed"
          :style="{background: '#fff'}"
        >
          <SidebarMenu v-bind="{isCollapsed}" />
        </Sider>
        <Layout>
          <Content :style="{minHeight: '80vh', padding: '3vh 3vw'}">
            <router-view/>
          </Content>
          <Footer :style="{minHeight: '3vh'}">
            Vue-boilerplate - 2018
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss" scoped>
   @import './styles.scss'
</style>
<style lang="scss">
   @import '../../styles/common-styles.scss'
</style>
