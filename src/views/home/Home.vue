<template>
  <div id="home">
    <nav-bar class="home-nav" :bgcolor="'#ff8198'"
      ><div slot="center">蘑菇街</div></nav-bar
    >
    <tab-control
      ref="tabControl1"
      class="tabControl1"
      :title="['流行', '新款', '精品']"
      @tabClick="tabClick"
      v-show="isTabFixed"
    />
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        ref="tabControl"
        :title="['流行', '新款', '精品']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
import { debounce } from 'common/until.js'
import { getHomeMultidata, getHomeGoods } from 'network/home.js'

import HomeSwiper from './homeChildren/HomeSwiper.vue'
import RecommendView from './homeChildren/RecommendView.vue'
import Feature from './homeChildren/Feature.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/content/backTop/BackTop.vue'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
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
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
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
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('imgLoading', () => {
      // console.log('-----')
      refresh()
    })
    // console.log(this.$refs.tabControl.$el.offsetTop)
    // this.$refs.tabControl.$el.offsetTop
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // console.log(this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.$refs.scroll.getScrollY())
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
        // console.log(res.data.list)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成上啦加载更多
        this.$refs.scroll.finishPullUp()
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
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      // console.log('---')
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
/* 使用浏览器原声滚动个 */
/* .home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
} */
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 99;
} */
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabControl1 {
  position: relative;
  z-index: 9;
}
</style>
