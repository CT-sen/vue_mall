<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imgLoading" />
    <div class="goods-info">
      <p class="info-title">{{ goodsItem.title }}</p>
      <span class="info-price">{{ goodsItem.price | showPrice }}</span>
      <span class="info-collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoading() {
      this.$bus.$emit('imgLoading')
    },
    itemClick() {
      // console.log(this.goodsItem.iid)
      this.$router.push('detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.info-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-list-item img {
  width: 100%;
}
.info-price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.info-collect {
  position: relative;
}
.info-collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
