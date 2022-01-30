<template>
  <view class="news-list">
    <ul class="news-ul">
      <li
        v-for="item in props.list"
        :key="item.id"
        class="news-item"
        :class="{
          'trend-down': item.trend === 'down',
        }"
      >
        <div class="title">{{ item.title }}</div>
        <div class="trend">
          {{ item.trend === 'down' ? '-' : '+' }}{{ item.trend_num }}%
        </div>
      </li>
      <li class="clear"></li>
    </ul>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  list: Array,
})
</script>

<style lang="less" scoped>
.news-list {
  margin-top: 30rpx;
  .news-ul {
    list-style: none;
    width: 100%;
    text-align: center;
    padding: 0 0 0 30rpx;
    .news-item {
      float: left;
      box-sizing: border-box;
      background: #fe5454;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10rpx;
      margin-bottom: 5rpx;
      .title {
        font-size: 38rpx;
      }
      .trend {
        font-size: 30rpx;
      }
      &:nth-child(1) {
        height: 180rpx;
        width: 250rpx;
        border-radius: 20rpx 0 0 0;
      }
      &:nth-child(2) {
        height: 180rpx;
        width: 166rpx;
        margin: 0 5rpx;
      }
      &:nth-child(3) {
        height: 132rpx;
        width: 256rpx;
        border-radius: 0 20rpx 0 0;
      }
      &:nth-child(4) {
        width: 126rpx;
        height: 176rpx;
        font-size: 24rpx;
        .title {
          font-size: 26rpx;
        }
        .trend {
          font-size: 24rpx;
        }
      }
      &:nth-child(5) {
        margin-left: 5rpx;
        width: 126rpx;
        height: 176rpx;
        border-radius: 0 0 20rpx 0;
        .title {
          font-size: 26rpx;
        }
        .trend {
          font-size: 24rpx;
        }
      }
      &:nth-child(6) {
        height: 126rpx;
        width: 210rpx;
        border-radius: 0 0 0 20rpx;
        margin-top: -131rpx;
        .title {
          font-size: 26rpx;
        }
        .trend {
          font-size: 24rpx;
        }
      }
      &:nth-child(7) {
        height: 126rpx;
        width: 206rpx;
        margin-left: 215rpx;
        margin-top: -131rpx;
        .title {
          font-size: 26rpx;
        }
        .trend {
          font-size: 24rpx;
        }
      }
      &.trend-down {
        background: #4fc74f;
      }
    }
  }
  .clear {
    clear: both;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
