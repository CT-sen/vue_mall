<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.id" :goodsItem="item">
      <!-- {{ item.pop }} -->
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { GoodsListItem }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2px;
}
</style>
