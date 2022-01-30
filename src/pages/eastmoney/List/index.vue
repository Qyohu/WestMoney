<template>
  <view class="list-main">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <Tabs :elementTopDistance="props.elementTopDistance" />
    <Headline />
  </view>
</template>

<script setup lang="ts">
import Tabs from './components/Tabs'
import Headline from './components/Headline'
const props = defineProps({
  elementTopDistance: Array,
})
</script>

<style lang="less" scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
</style>
