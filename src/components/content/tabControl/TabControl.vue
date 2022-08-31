<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in title"
      :key="item"
      :class="{ active: index === currentIndex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemclick(index) {
      ;(this.currentIndex = index), this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>
