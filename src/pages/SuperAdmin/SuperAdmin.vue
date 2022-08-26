<script setup>
// import BaseSeting from "/components/BaseSeting.vue";
import { ref, watchEffect } from "vue"
import { useRoute, useRouter } from 'vue-router'


const route = useRoute();
const router = useRouter();

const currentIndex = ref(0)

const routeList = [
  {
    name: '出厂配置说明',
    path: '/super-admin/base-seting'
  },
  {
    name: ' AI算法对照表',
    path: '/super-admin/ai-list'
  },
  {
    name: '出厂产品配置',
    path: '/super-admin/deliver-Config'
  },
];

watchEffect(() => {
  currentIndex.value = routeList.findIndex(item => item.path == route.path);
  console.log('currentIndex.value1', currentIndex.value);
})
// console.log("list", Arr[0].label);

const switchHandler = index => {
  router.push(routeList[index].path);
  currentIndex.value = index;
  console.log('currentIndex.value', currentIndex.value);
};
</script>

<template>
  <div class="box">
    <!-- <div class="box-left">
      <div class="left-menu" v-for="(item, index) in routeList" :key="index" @click="switchHandler(index)">
        <div class="left-menu" :style="currentIndex == index ? 'background-color: #1C627D;' : ''">
          <span>{{ item.name }}</span>
        </div>
        <div class="menu-active" :style="currentIndex == index ? 'background-color: #00b0f0;' : ''"></div>
      </div>
    </div>
    <div class="box-right">
      <router-view></router-view>
    </div> -->
    <!-- 菜单 -->
    <div class="headers">
      <div class="menu" v-for="(item, index) in routeList" :key="index" :class="currentIndex == index ? 'active' : ''"
        @click="switchHandler(index)">
        {{ item.name }}
      </div>
    </div>
    <!-- 主内容 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;

  /* 菜单 */
  .headers {
    width: 100%;
    height: 3.5vw;
    display: flex;

    .menu {
      width: 9.5vw;
      height: 100%;
      cursor: pointer;
      border-radius: 0.3vw 0.3vw 0 0;
      font-size: 1.05vw;
      line-height: 3.5vw;
      text-align: center;
      color: #00d8ff;
    }
      .active {
    background-color: var(--equip-bg-color);
    color: #fff;
  }
  }

  /* 点击样式 */


  /* 主内容 */
  .main {
    height: calc(100% - 3.75vw);
    width: calc(100% - 0.25vw);
    background: var(--equip-bg-color);

  }

}
</style>