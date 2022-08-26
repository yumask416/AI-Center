<script setup>
import WarnDetail from './components/WarnDetail.vue'
import { reactive, ref } from 'vue'
import { WarningFilled, QuestionFilled, InfoFilled } from '@element-plus/icons-vue'

const cardData = reactive([
  {
    id: 1,
    deviceName: '模拟设备1',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '0',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 2,
    deviceName: '模拟设备2',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '1',
    place: '兰山区',
    event: '抽烟',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 3,
    deviceName: '模拟设备3',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '2',
    place: '兰山区',
    event: '人员离岗',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 4,
    deviceName: '模拟设备4',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '2',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 5,
    deviceName: '模拟设备5',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '1',
    place: '兰山区',
    event: '明火',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 6,
    deviceName: '模拟设备6',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '1',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 7,
    deviceName: '模拟设备7',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '1',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 8,
    deviceName: '模拟设备8',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '1',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 9,
    deviceName: '模拟设备9',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '2',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 10,
    deviceName: '模拟设备10',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '2',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },

  {
    id: 11,
    deviceName: '模拟设备11',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '2',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
  {
    id: 12,
    deviceName: '模拟设备12',
    time: '2016-05-03',
    IP: '10.10.10.48',
    level: '2',
    place: '兰山区',
    event: '用手机',
    img: '/../../images/PPT/camera.png',
  },
])

let currentIndex = ref()
let warnDetailVisible = ref(false)

function openWarnDetail(val) {
  currentIndex.value = val
  warnDetailVisible.value = true
}

function closeWarnDetail() {
  warnDetailVisible.value = false
  console.log('closeWarnDetail', warnDetailVisible.value)
}
</script>

<template>
  <div>
    <div class="card-list">
      <div class="litle-card" v-for="(item, index) in cardData" :key="index" @click="openWarnDetail(index)">
        <el-image class="card-img" :src="item.img" />
        <div class="card-msg">
          <div class="msg-inner">
            <div class="inner-label">告警事件：</div>
            <div class="inner">{{ item.event }}</div>
          </div>
          <div class="msg-inner">
            <div class="inner-label">设备名称：</div>
            <div class="inner">{{ item.deviceName }}</div>
          </div>
          <div class="msg-inner">
            <div class="inner-label">发生时间：</div>
            <div class="inner">{{ item.time }}</div>
          </div>
          <div class="msg-inner">
            <div class="inner-label">告警等级：</div>
            <div class="inner"
              :style="item.level == 0 ? 'color:#EB9B04' : item.level == 1 ? 'color:#E64C06' : 'color:#CF1322'">
              <el-icon>
                <InfoFilled v-if="item.level == 0" />
                <QuestionFilled v-if="item.level == 1" />
                <WarningFilled v-if="item.level == 2" />
              </el-icon>
              {{ item.level == 0 ? '一般' : item.level == 1 ? '严重' : '紧急' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <WarnDetail :warnDetailVisible="warnDetailVisible" @closeWarnDetail="closeWarnDetail"
      :obj="cardData[currentIndex]" />
  </div>
</template>

<style lang="less" scoped>
.card-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0 2vw;

  // position: relative;
  // background-color: #3dbaf1;
  // overflow: hidden;
  .litle-card {
    width: 21vw;
    height: calc(100% / 3.6);
    margin-top: 1vw;
    background-color: #0b3d51;
    border-radius: 0.3vw;
    display: flex;

    .card-img {
      width: 8.5vw;
      height: 100%;
    }

    .card-msg {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 1vw;
      width: 12.5vw;
      height: 100%;

      .msg-inner {
        display: flex;

        .inner-label {
          color: #3dbaf1;
          font-weight: 500;
          font-size: 0.8vw;
        }

        .inner {
          color: #3dbaf1;
          font-size: 0.8vw;
        }
      }
    }
  }
}
</style>
