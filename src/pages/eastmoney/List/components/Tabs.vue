<template>
  <view class="list-nav">
    <ul class="list-nav-ul" ref="NavBar" :class="{ fixed: isFixed }">
      <li
        v-for="item in tabs"
        :key="item.id"
        class="list-nav-item"
        :class="{ active: currentIndex === item.id }"
        @click="changeIndex(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </view>
</template>

<script setup lang="ts">
interface TabsType {
  id: number
  title: string
}
interface subListType {
  id: number
  top: number
}
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { throttle } from '@/static/util/throttle.ts'
import { tabs } from '@/static/mock/news.ts'

const props = defineProps({
  elementTopDistance: Array,
})
const currentIndex = ref(1)
const NavBar = ref()

// tab点击事件
const changeIndex = (item: TabsType) => {
  if (props.elementTopDistance[item.id - 1]) {
    window.scrollTo({
      top: props.elementTopDistance[item.id - 1].top - 70,
      //   behavior: 'smooth',
    })
  }
}
const NavBarOffsetTop = ref()
onMounted(() => {
  NavBarOffsetTop.value = NavBar.value.offsetTop
  window.addEventListener('scroll', throttle(handleScroll, 100), true)
})
const isFixed = ref(false)

// 下滑事件
const handleScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  isFixed.value = scrollTop > NavBarOffsetTop.value

  props.elementTopDistance?.map((item) => {
    if (item.top - scrollTop <= 80) {
      // 根据元素到浏览器顶部的距离高亮tab
      currentIndex.value = item.id
    }
  })
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', throttle(handleScroll, 100))
})
</script>

<style lang="less" scoped>
.list-nav {
  background-color: #fff;
  height: 90rpx;
  line-height: 90rpx;
  .list-nav-ul {
    width: 100%;
    overflow-x: auto;
    list-style: none;
    display: flex;
    font-size: 32rpx;
    background-color: #ffffff;
    padding: 0;
    z-index: 100;
    .list-nav-item {
      padding: 0 20rpx 0 10rpx;
      white-space: nowrap;
      position: relative;
      transition: all 0.3s;
      &.active {
        color: #ea5504;
        &::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
          content: '';
          height: 10rpx;
          width: 40rpx;
          border-radius: 5rpx;
          background-color: #ea5504;
        }
      }
    }
    &.fixed {
      position: fixed;
      top: 0;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
