<template>
  <view class="news-list">
    <ul class="news-ul">
      <li v-for="item in props.list" :key="item.id" class="news-item">
        <view class="news-content">
          <h1>
            {{ item.title }}
          </h1>
          <view class="describe">
            <div>{{ item.author }}</div>
            <div>{{ item.comment_num }}评</div>
          </view>
        </view>
        <view class="news-img">
          <img :src="item.url" />
        </view>
      </li>
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
  .news-ul {
    list-style: none;
    padding: 0;
    .news-item {
      height: 246rpx;
      padding: 30rpx;
      margin-bottom: 30rpx;
      display: flex;
      background-color: white;
      box-sizing: border-box;
      h1 {
        height: 150rpx;
        font-weight: 500;
        font-size: 34rpx;
        line-height: 50rpx;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .describe {
        margin-top: 15rpx;
        display: flex;
        gap: 20rpx;
        color: #999;
        font-size: 24rpx;
      }
      img {
        height: 148rpx;
        width: 224rpx;
        border-radius: 10rpx;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
