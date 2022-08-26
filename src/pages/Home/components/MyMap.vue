<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { shallowRef, onMounted } from 'vue'

let map = shallowRef(null)
onMounted(async () => {
  let AMap = await AMapLoader.load({
    key: '93add14c6965607feb8d5ed581aa7aad', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.MapboxVectorTileLayer'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
  map = new AMap.Map('map', {
    viewMode: '3D', //是否为3D地图模式
    zoom: 7, //初始化地图级别
    center: [117.412427, 36.303573], //初始化地图中心点位置
    mapStyle: 'amap://styles/darkblue',
  })
})
</script>

<template>
  <div class="area">
    <div class="home-card-bar">
      <el-icon style="font-size: 0.75vw"><LocationInformation /></el-icon>
      设备位置示意图
    </div>
    <div id="map"></div>
  </div>
</template>

<style lang="less" scoped>
.area {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5vw;
  padding-right: 0.5vw;
  width: 100%;
  height: calc(100% - 0.5vw);
}
#map {
  flex: 1;
  width: 100%;
}
</style>
