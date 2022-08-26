<script setup>
import { ref } from 'vue'
import { throttle } from '../utils/throttle'
import { wsTest } from '../api/api'

let src = ref('')
let getImg = val => {
  if (val) {
    src.value = 'http://10.10.10.119:10225/' + JSON.parse(val.data).image_path
  }
}
let updateImg = throttle(getImg, 500)
let ws = wsTest.start(updateImg)

setTimeout(() => {
  wsTest.end(ws)
}, 6000)
</script>

<template>
  <div class="area">
    TEST
    <hr />
    <div class="imgBox">
      <img :src="src" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  color: white;
  width: 100%;
  height: 100%;
}
.imgBox {
  // background-color: red;
  width: 100%;
  height: 80%;
  overflow: hidden;
  img {
    height: 100%;
  }
}
</style>
