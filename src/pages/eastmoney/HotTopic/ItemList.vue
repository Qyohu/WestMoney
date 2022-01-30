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
        <view class="news-header">
          <img src="@/static/images/orangeicon.png" class="header-img" />
          <div class="read-num">{{ item.read_num }}阅读</div>
          <div>{{ item.comment_num }}讨论</div>
        </view>
        <view class="news-content">
          <h1>
            {{ item.title }}
          </h1>
          <view class="describe">
            <div>{{ item.describe }}</div>
          </view>
        </view>
        <view class="stocks">
          <div class="front">
            <div>{{ item.start_name }}</div>
            <div>{{ item.start_index }}</div>
          </div>
          <div class="middle"></div>
          <div class="end">
            <div>{{ item.end_name }}</div>
            <div>{{ item.end_index }}</div>
          </div>
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
  margin-top: 30rpx;
  .news-ul {
    overflow-x: auto;
    list-style: none;
    display: flex;
    padding: 0 30rpx;
    .news-item {
      box-sizing: border-box;
      height: 334rpx;
      min-width: 634rpx;
      margin-right: 24rpx;
      padding: 30rpx 20rpx;
      border-radius: 20rpx;
      background: url('@/static/images/orangeBack.png') center no-repeat;
      .news-header {
        display: flex;
        color: #634242;
        font-size: 24rpx;
        .header-img {
          width: 40rpx;
          height: 32rpx;
        }
        div {
          line-height: 30rpx;
        }
        .read-num {
          margin: 0 48rpx 0 24rpx;
        }
      }
      .news-content {
        h1 {
          color: #333;
          font-size: 34rpx;
          margin: 20rpx 0;
        }
        .describe {
          color: #634232;
          font-size: 28rpx;
          overflow: hidden;
          white-space: normal;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          margin: 10rpx 0 40rpx;
        }
      }
      .stocks {
        display: flex;
        justify-content: space-between;
        height: 50rpx;
        border-radius: 25rpx;
        width: 100%;
        padding: 0 20rpx;
        box-sizing: border-box;
        background-image: linear-gradient(90deg, #f6c8c7, #f6d4d5);
        .front,
        .end {
          display: flex;
          gap: 10rpx;
          align-items: center;
          div:first-child {
            font-size: 24rpx;
            color: #634242;
          }
          div:nth-child(2) {
            font-size: 24rpx;
            color: #f22323;
          }
        }
        .front {
          text-align: left;
        }
        .middle {
          width: 1rpx;
          height: 30rpx;
          position: relative;
          top: 10rpx;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .end {
          text-align: right;
        }
      }
      &.trend-down {
        background: url('@/static/images/greenBack.png') center no-repeat;
        .stocks {
          background-image: linear-gradient(90deg, #caebca, #d5f4d5);
        }
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
