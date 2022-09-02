<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <h1>商品详情</h1>
    <detail-swiper :topImage="topImage" class="detailSwiper"></detail-swiper>
    {{ iid }}
  </div>
</template>

<script>
import DetailNavBar from './detailChildren/DetailNavBar.vue'
import DetailSwiper from './detailChildren/DetailSwiper.vue'
import { getDetail } from '@/network/detail'
export default {
  name: 'Detail',
  components: { DetailNavBar, DetailSwiper },
  data() {
    return {
      iid: null,
      topImage: []
    }
  },
  created() {
    // 保存转入的id
    this.iid = this.$route.params.iid

    getDetail(this.iid).then((res) => {
      console.log(res)
      // console.log(res.result.itemInfo.topImages)
      this.topImage = res.result.itemInfo.topImages
    })
  }
}
</script>

<style scoped>
.detailSwiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>
