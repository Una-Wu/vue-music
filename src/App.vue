<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
  import MHeader from 'components/content/m-header/MHeader.vue'
  import Tab from 'components/content/tab/tab.vue'

export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
