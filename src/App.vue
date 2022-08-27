<template>
  <div id="app">
    <nav>
      <router-view> </router-view>
      <main-tab-bar></main-tab-bar>
    </nav>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
export default {
  components: { MainTabBar }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
