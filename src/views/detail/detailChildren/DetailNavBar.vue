<template>
  <div>
    <nav-bar :fontSize="18" :bgcolor="'#fff'" :color="'while'">
      <div slot="left" class="black" @click="itemBack">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in title"
          :key="item.id"
          class="title-item"
          @click="itemClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      console.log(index)
    },
    itemBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.black img {
  margin-top: 15px;
}
.title {
  display: flex;
  line-height: 50px;
}
.title-item {
  flex: 1;
  justify-content: space-around;
}
.active {
  color: var(--color-high-text);
}
</style>
