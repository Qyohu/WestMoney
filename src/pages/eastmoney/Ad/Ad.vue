<template>
  <view class="ad-top">
    <img src="@/static/images/top.png" class="ad-img" />
    <view class="banner">
      <view class="header-nav">
        <tui-icon
          name="arrowleft"
          class="arrow-left"
          :size="48"
          unit="rpx"
          color="white"
        ></tui-icon>
        <dis class="share" @click="shareVisible = true">分享</dis>
      </view>
      <view class="header-content">
        <h1 class="content-title">多家基金公司自购旗下基金</h1>
        <p class="content-intro">
          1月27日，多家公募巨头发布公告，基于对中国资本市场长期健康稳定发展的信心，将在近期出巨资自购旗下偏股型基金，所投资的基金持有期限不少于一年。
        </p>
      </view>
    </view>
  </view>

  <!-- 分享抽屉 -->
  <tui-drawer mode="bottom" :visible="shareVisible" @close="closeDrawer">
    <view class="d-container">
      <ul>
        <li v-for="item in shareList" :key="item.id">
          <view class="shareItem">
            <tui-icon
              :name="item.type"
              :size="90"
              unit="rpx"
              :color="item.color"
            ></tui-icon>
          </view>
          <div class="share-text">{{ item.text }}</div>
        </li>
      </ul>
      <view
        class="btn-cancle"
        hover-class="btn-cancle-hover"
        @click="shareVisible = false"
      >
        取消
      </view>
    </view>
  </tui-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const shareVisible = ref(false)
const shareList = ref([
  {
    id: 1,
    type: 'wechat',
    text: '微信',
    color: '#3FBF36',
  },
  {
    id: 2,
    type: 'alipay',
    text: '支付宝',
    color: '#05B1FE',
  },
  {
    id: 3,
    type: 'qq',
    text: 'QQ',
    color: '#5283F0',
  },
  {
    id: 4,
    type: 'android',
    text: '其他',
    color: 'green',
  },
])
const closeDrawer = () => {
  shareVisible.value = false
}
</script>

<style lang="less" scoped>
.ad-top {
  .ad-img {
    height: 115rpx;
  }
  .banner {
    height: 375rpx;
    background: url('/static/images/background.png') center;
    .header-nav {
      display: flex;
      justify-content: space-between;
      color: white;
      font-size: 30rpx;
      padding: 10rpx 10rpx 0;
      align-content: center;
    }
    .header-content {
      overflow: hidden;
      margin: 40rpx 25rpx 0;
      color: white;
      .content-title {
        font-size: 42rpx;
        font-weight: 500;
        margin: 30rpx 0 30rpx;
      }
      .content-intro {
        font-size: 28rpx;
      }
    }
  }
}
.d-container {
  height: 332rpx;
  background-color: #f7f8fa;
  ul {
    display: flex;
    list-style: none;
    gap: 65rpx;
    margin: 50rpx 0 60rpx;
    .shareItem {
      text-align: center;
      line-height: 120rpx;
      height: 120rpx;
      width: 120rpx;
      background-color: white;
      border-radius: 20rpx;
    }
    .share-text {
      font-size: 28rpx;
      text-align: center;
    }
  }
  .btn-cancle {
    background-color: white;
    font-size: 34rpx;
    text-align: center;
    line-height: 100rpx;
    transition: all 0.5s;
  }
  .btn-cancle-hover {
    background-color: #dee1e6;
  }
}
</style>
