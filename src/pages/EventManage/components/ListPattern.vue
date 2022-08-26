<script setup>
import { ref } from 'vue'
import WarnDetail from './components/WarnDetail.vue'

let currentIndex = ref(0)
const tableData = [
  {
    id: 1,
    event: '用手机',
    time: '2016-05-03',
    deviceName: '模拟设备1',
    level: '1',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 2,
    event: '用手机',
    time: '2016-05-02',
    deviceName: '模拟设备2',
    level: '2',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 3,
    event: '用手机',
    time: '2016-05-04',
    deviceName: '模拟设备3',
    level: '3',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 4,
    event: '用手机',
    time: '2016-05-01',
    deviceName: '模拟设备4',
    level: '1',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 5,
    event: '用手机',
    time: '2016-05-01',
    deviceName: '模拟设备5',
    level: '0',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 6,
    event: '用手机',
    time: '2016-05-01',
    deviceName: '模拟设备6',
    level: '1',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 7,
    event: '用手机',
    time: '2016-05-01',
    deviceName: '模拟设备7',
    level: '0',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 8,
    event: '用手机',
    time: '2016-05-01',
    deviceName: '模拟设备8',
    level: '1',
    img: '/public/images/PPT/camera.png',
  },
  {
    id: 9,
    event: '用手机',
    time: '2016-05-01',
    deviceName: '模拟设备9',
    level: '2',
    img: '/public/images/PPT/camera.png',
  },
]

// 查看按钮
let warnDetailVisible = ref(false)

function openWarnDetail(val) {
  currentIndex.value = val.id - 1
  console.log('currentIndex.value:',currentIndex.value);

  warnDetailVisible.value = true
  // console.log('openWarnDetail', warnDetailVisible.value)
}

function closeWarnDetail() {
  warnDetailVisible.value = false
  // console.log('closeWarnDetail', warnDetailVisible.value)
}

/* 表格样式 */
let tableHeaderColor = {
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid #3dbaf1',
}
let tableRowStyle = {
  boxSizing: 'border-box',
  padding: '0vw',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid #3dbaf1',
}
</script>

<template>
  <div class="list-box">
    <el-table :data="tableData" style="height=100%" :cell-style="tableRowStyle" :header-cell-style="tableHeaderColor">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="id" label="序号" align="center" />
      <el-table-column prop="event" label="事件名称" align="center" />
      <el-table-column prop="time" label="发生时间" align="center" />
      <el-table-column prop="deviceName" label="所在设备" align="center" />
      <el-table-column prop="level" label="等级" align="center">
        <template #default="{ row, $index }">
          <span>{{ row['level'] == 0 ? '一般告警' : row['level'] == 1 ? '严重告警' : '紧急告警' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="openWarnDetail(row)"> 查看 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <WarnDetail :warnDetailVisible="warnDetailVisible" @closeWarnDetail="closeWarnDetail" :obj="tableData[currentIndex]" />
  </div>
</template>

<style lang="less" scoped>
.list-box {
  // height: calc(100% - );
  height: 100%;
  // width: 98%;
  width: 100%;
  margin: 0 auto;
  padding-top: 0.5vw;
  .el-table {
    --el-table-header-bg-color: rgba(4, 30, 43, 1);
    --el-table-header-text-color: #3dbaf1;
    --el-table-text-color: #3dbaf1;
    --el-table-tr-bg-color: rgba(4, 30, 43, 1);
    --el-table-border-color: none;
    --el-table-bg-color: var(--equip-bg-color);
      font-size: 0.8vw;

    // .el-table .cell {
    //   font-size: 0.6vw;
    // }

    .el-button {
      font-size: 0.6vw;
    }
  }
}
</style>
