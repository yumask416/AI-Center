<script setup>
import { ref } from 'vue'
let systemTitle = ref('')
</script>

<template>
  <header>
    <div class="title-name">
      {{ systemTitle || 'AI智能管理平台' }}
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  width: 98%;
  height: 5vw;
  background: url('/images/head.png') no-repeat;
  background-size: 100% 140%;
  transform: translate(1%);
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
