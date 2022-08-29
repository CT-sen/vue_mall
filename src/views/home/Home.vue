<template>
  <div id="home">
    <nav-bar class="home-nav" :bgcolor="'#ff8198'" :fontSize="14"
      ><div slot="center">购物车</div></nav-bar
    >
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature></feature>
    <tab-control
      :title="['流行', '新款', '精品']"
      @tabClick="tabClick"
    ></tab-control>
    <button @click="btn">打印数据</button>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>
<script>
import { getHomeMultidata, getHomeGoods } from 'network/home.js'
import HomeSwiper from './homeChildren/HomeSwiper.vue'
import RecommendView from './homeChildren/RecommendView.vue'
import NavBar from '@/components/common/navbar/NavBar.vue'
import Feature from './homeChildren/Feature.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
export default {
  name: 'Home',
  components: { HomeSwiper, RecommendView, NavBar, Feature, TabControl },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data)
        // console.log(res.data.recommend)
        ;(this.banners = res.data.banner.list),
          (this.recommends = res.data.recommend.list)
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        console.log(res)
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    btn() {
      console.log(this.recommends)
    }
  }
}
</script>

<style>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
</style>
