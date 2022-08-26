<script setup>
const props = defineProps(['num', 'desc'])
</script>

<template>
  <div class="card">
    <div class="num">{{ num }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<style lang="less" scoped>
.card {
  width: 18vw;
  height: 5.2vw;
  background-color: var(--equip-bg-shadow-color);
  border-radius: 0.3vw;
  padding: 0.5vw;
  overflow: hidden;
  .num {
    color: var(--card-title-color);
    font-size: 1.6vw;
    line-height: 2vw;
  }
  .desc {
    padding-top: 1vw;
    font-size: 0.8vw;
    color: white;
  }
}
</style>
