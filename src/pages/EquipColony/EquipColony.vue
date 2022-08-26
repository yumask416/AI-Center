<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentIndex = ref(0)

const routeArr = [
  {
    name: '设备管理',
    path: '/equip-colony/equip-manage',
  },
  {
    name: '设备总报表',
    path: '/equip-colony/total-report',
  },
  {
    name: '工作率-时间',
    path: '/equip-colony/work-rate',
  },
  {
    name: '设备热力图',
    path: '/equip-colony/thermo-dynamic',
  },
]

watchEffect(() => {
  currentIndex.value = routeArr.findIndex(item => item.path == route.path)
})

const switchHandler = index => {
  router.push(routeArr[index].path)
  currentIndex.value = index
}
</script>

<template>
  <div class="area">
    <div class="tabBar">
      <div
        class="tabBar-item"
        v-for="(item, index) in routeArr"
        :key="index"
        :class="currentIndex == index ? 'active' : ''"
        @click="switchHandler(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  width: 100%;
  height: 100%;
  // background-color: skyblue;
}
.tabBar {
  display: flex;
  height: 3.5vw;
  margin-left: 0.25vw;
  &-item {
    width: 9.5vw;
    height: 100%;
    cursor: pointer;
    border-radius: 0.3vw 0.3vw 0 0;
    // background-color: green;
    font-size: 1.05vw;
    line-height: 3.5vw;
    text-align: center;
    color: var(--card-title-color);
  }
}
.view {
  width: calc(100% - 0.5vw);
  height: calc(100% - 3.75vw);
  margin: 0 0.25vw 0.25vw;
  background: var(--equip-bg-color);
}
.active {
  background-color: var(--equip-bg-color);
  color: white;
}
</style>
