<template>
  <div id="home">
    <nav-bar :bgcolor="'#ff8198'" :fontSize="14"
      ><div slot="center">购物车</div></nav-bar
    >

    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <button @click="btn">打印数据</button>
  </div>
</template>
<script>
import { getHomeMultidata } from 'network/home.js'
import HomeSwiper from './homeChildren/HomeSwiper.vue'
import RecommendView from './homeChildren/RecommendView.vue'
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'Home',
  components: { HomeSwiper, RecommendView, NavBar },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    this.getHomeMultidata()
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data)
        console.log(res.data)
        ;(this.banners = res.data.banner.list),
          (this.recommends = res.data.recommend.list)
      })
    },
    btn() {
      console.log(this.recommends)
    }
  }
}
</script>

<style>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
</style>
