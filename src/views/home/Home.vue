<template>
  <div id="home">
    <nav-bar class="home-nav" :bgcolor="'#ff8198'" :fontSize="14"
      ><div slot="center">购物车</div></nav-bar
    >
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature></feature>
    <tab-control
      class="tab-control"
      :title="['流行', '新款', '精品']"
      @tabClick="tabClick"
    />
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>
<script>
import { getHomeMultidata, getHomeGoods } from 'network/home.js'
import HomeSwiper from './homeChildren/HomeSwiper.vue'
import RecommendView from './homeChildren/RecommendView.vue'
import Feature from './homeChildren/Feature.vue'
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    NavBar,
    Feature,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
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
        console.log(res.data.list)
        this.goods[type].list.push(...res.data.list)
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
    }
  }
}
</script>

<style scoped>
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
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 99;
}
</style>
