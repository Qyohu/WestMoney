<template>
  <view class="topic-main">
    <div class="header">
      <h1>热门话题</h1>
      <text class="end"
        >前往APP<tui-icon
          name="arrowright"
          class="arrow-left"
          :size="30"
          unit="rpx"
          color="#999"
        ></tui-icon
      ></text>
    </div>
    <div class="topic-list">
      <ItemList :list="topicList" />
    </div>
  </view>
</template>

<script setup>
import { topicList } from '@/static/mock/news'
import ItemList from './ItemList.vue'
</script>

<style lang="less" scoped>
.topic-main {
  margin: 10rpx 0;
  padding: 40rpx 0 20rpx;
  background: #ffffff;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30rpx;
    h1 {
      font-size: 40rpx;
      font-weight: 500;
    }
    .end {
      color: #999;
      font-size: 28rpx;
    }
  }
}
</style>
