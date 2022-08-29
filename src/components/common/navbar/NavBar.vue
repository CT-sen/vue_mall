<template>
  <div
    class="navbar"
    :style="{
      backgroundColor: bgcolor,
      fontSize: fontSize + 'px',
      color: color
    }"
  >
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: 'pink'
    },
    fontSize: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style>
.navbar {
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* color: blue; */
}
</style>
