<template>
  <view class="head-line">
    <NewsItem :list="newsList" />
  </view>
</template>

<script setup lang="ts">
import { NewsRes, newsList } from '@/static/mock/news'
import NewsItem from '@/components/NewsItem'
</script>

<style lang="less" scoped></style>
