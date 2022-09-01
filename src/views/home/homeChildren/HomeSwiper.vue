<template>
  <div>
    <swiper>
      <ul class="slide" v-for="(item, id) in banners" :key="id">
        <li>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad" />
          </a>
        </li>
      </ul>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper
  },
  methods: {
    imgLoad() {
      // console.log('----')
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
ul {
  width: 100%;
  flex-shrink: 0;
}

ul img {
  width: 100%;
}
</style>
