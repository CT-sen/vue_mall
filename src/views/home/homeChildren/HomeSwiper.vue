<template>
  <div>
    <swiper>
      <ul class="slide" v-for="(item, id) in banners" :key="id">
        <li>
          <a :href="item.link">
            <img :src="item.image" alt="" />
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
