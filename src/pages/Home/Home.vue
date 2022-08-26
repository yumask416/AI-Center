<script setup>
import MyEquip from './components/MyEquip.vue'
import MyMap from './components/MyMap.vue'
import MyAlert from './components/MyAlert.vue'
import MyAlertRank from './components/MyAlertRank.vue'
import MyAlertTrend from './components/MyAlertTrend.vue'
</script>

<template>
  <div class="home-container">
    <div class="top">
      <div class="top-left"><MyEquip /></div>
      <div class="top-mid"><MyMap /></div>
      <div class="top-right"><MyAlert /></div>
    </div>
    <div class="bot">
      <div class="bot-left"><MyAlertRank /></div>
      <div class="bot-right"><MyAlertTrend /></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.top {
  display: flex;
  width: 100%;
  flex: 1;

  overflow: hidden;
  &-left {
    width: 25vw;
    height: 100%;
  }
  &-mid {
    flex: 1;
    height: 100%;
  }
  &-right {
    width: 18vw;
    height: 100%;
  }
}
.bot {
  display: flex;
  width: 100%;
  height: 15vw;
  overflow: hidden;
  &-left {
    width: 25vw;
    height: 100%;
  }
  &-right {
    flex: 1;
    height: 100%;
  }
}
</style>
