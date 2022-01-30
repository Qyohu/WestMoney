<template>
  <view class="content">
    <text class="title" @click="toIndex">Welcome</text>
    <div class="count" @click="toIndex">跳过 {{ count }}</div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(5)
const interval = setInterval(() => {
  count.value--
  if (count.value <= 0) {
    uni.redirectTo({
      url: '/pages/eastmoney/index',
      success: () => {
        clearInterval(interval)
      },
    })
  }
}, 1000)
const toIndex = () => {
  uni.redirectTo({
    url: '/pages/eastmoney/index',
  })
}
</script>

<style lang="less" scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
  position: relative;
  .title {
    font-size: 40rpx;
    color: white;
  }
  .count {
    position: absolute;
    top: 30rpx;
    right: 30rpx;
    height: 50rpx;
    min-width: 80rpx;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10%;
    line-height: 50rpx;
    font-size: 20rpx;
    color: white;
    padding: 5rpx 10rpx;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
