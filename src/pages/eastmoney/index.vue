<template>
  <view class="east-main">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <Ad />
    <List class="Subtitle" :elementTopDistance="elementTopDistance" />
    <HotTopic class="Subtitle" />
    <Popular class="Subtitle" />
    <Headline class="Subtitle" />
  </view>
</template>
<script setup lang="ts">
import Ad from './ad/Ad.vue'
import List from './List/index.vue'
import HotTopic from './HotTopic/index.vue'
import Popular from './popular/index.vue'
import Headline from './List/components/Headline'
import { onMounted, ref } from 'vue'
interface subListType {
  id: number
  top: number
}

// 获得所有标题高度
const elementTopDistance = ref<subListType[]>([])

const getAllSubtitleTop = () => {
  const subListDom: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.Subtitle'
  )
  for (let i = 0; i < subListDom.length; i++) {
    elementTopDistance.value.push({
      id: i + 1,
      top: subListDom[i].offsetTop,
    })
  }
}
onMounted(() => {
  getAllSubtitleTop()
})
</script>

<style lang="less" scoped>
.east-main {
  background-color: #f7f8fa;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }
}
</style>
