<template>
  <Swiper>
    <SwiperItem v-for="item in topImage" :key="item.id">
      <img :src="item" alt="" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  props: {
    topImage: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { Swiper, SwiperItem }
}
</script>

<style></style>
