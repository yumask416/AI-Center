<script setup>
// import Menu from './Menu.vue'
import { ref } from 'vue'
import { useMenuStore } from '../store'

let menuStore = useMenuStore()
let systemTitle = ref('')
</script>

<template>
  <header>
    <div class="btn" @click="menuStore.isShow = true">
      <el-icon><Menu /></el-icon>&nbsp;
      <span>{{ menuStore.menuName }}</span>
    </div>

    <div class="title-name">
      {{ systemTitle || 'AI智能管理平台' }}
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  position: relative;
  width: 98%;
  height: 5vw;
  background: url('/images/head.png') no-repeat;
  background-size: 100% 140%;
  transform: translate(1%);
  .btn {
    display: flex;
    position: absolute;
    top: 1vw;
    left: 9vw;
    cursor: pointer;
    color: white;
  }
  .title-name {
    text-align: center;
    line-height: 3vw;
    color: white;
    font-size: 1.88vw;
    font-weight: 400;
    text-shadow: -2px -2px 0.3vw #00d8ff;
  }
}
</style>
