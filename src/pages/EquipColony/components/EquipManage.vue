<script setup>
import { ref, reactive } from 'vue'
import MyCard from './components/MyCard.vue'
import { Check, Plus, Refresh } from '@element-plus/icons-vue'

/* 选择器 */
let selectedStatus = ref('all') // 默认全部
let selectOptions = [
  {
    value: 'all',
    label: '全部',
  },
  {
    value: 'online',
    label: '在线',
  },
  {
    value: 'offline',
    label: '离线',
  },
]
const changeHandler = val => {
  console.log('------------', val) // online offline all
}

/* 表格数据 */
let tableData = reactive([
  {
    DeviceRemark: '模拟设备1',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备2',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '0',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备3',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备4',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备5',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备6',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备7',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备8',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备9',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
  {
    DeviceRemark: '模拟设备10',
    Sn: 'BHUNKDAIOXB',
    IP: '10.10.10.48',
    ID: 1,
    place: '预设区域A',
    eventNumber: 20,
    Status: '1',
    fwVersion: 'AGVAY_A1A2A5B2C1C2D1D2D5_release_20220718.pt', //固件版本
    CPUutility: '20%',
    DiskUsage: '20%',
    time: '2022-07-20 11:00:00',
    IPCnum: 8,
  },
])
/* 表格样式 */
let tableHeaderColor = {
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}
let tableRowStyle = {
  boxSizing: 'border-box',
  padding: '0',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}
</script>

<template>
  <div class="area">
    <div class="summary">
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
    </div>
    <!-- 筛选交互 -->
    <div class="operate">
      <v-scale screenW="1500">
        <div class="select">
          设备状态：
          <el-select
            :teleported="false"
            v-model="selectedStatus"
            placeholder="请选择设备状态"
            size="small"
            @change="changeHandler"
          >
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </v-scale>

      <v-scale screenW="1400">
        <div class="btn-group">
          <el-button type="success" size="small" :icon="Check">扫描设备</el-button>
          <el-button type="success" size="small" :icon="Plus">新增设备</el-button>
          <el-button type="success" size="small" :icon="Refresh">批量更新固件</el-button>
        </div>
      </v-scale>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="tableData"
        style="height: 100%"
        :header-cell-style="tableHeaderColor"
        :cell-style="tableRowStyle"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" type="index" width="55" />
        <el-table-column prop="DeviceRemark" label="设备备注" width="200" />
        <el-table-column prop="Sn" label="设备编码(Sn)" width="200" />
        <el-table-column prop="IP" label="设备IP" width="200" />
        <el-table-column prop="place" label="所属地区" width="200" />
        <el-table-column prop="eventNumber" label="告警数量" width="100" />
        <el-table-column prop="Status" label="状态">
          <template #default="scope">{{ scope.row['Status'] == 1 ? '在线' : '离线' }}</template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template #default>
            <span>查看</span>
            <span>修改</span>
            <span>启动</span>
            <span>重启</span>
            <span>更新固件</span>
            <span>删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination :page-size="10" :pager-count="5" layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  /* 统计卡片 */
  .summary {
    display: flex;
    justify-content: space-between;
    padding: 1vw 1.4vw 1vw;
  }
  /* 筛选操作区 */
  .operate {
    display: flex;
    align-items: center;
    padding-left: 1.4vw;
    height: 5vw;
    color: white;
    // background-color: pink;
    .btn-group {
      margin-left: 3vw;
    }
  }
  /* 表格 */
  .table {
    padding: 0 1vw;
    height: calc(100% - 17.5vw);
    overflow: auto;
    :deep(.el-scrollbar__view) {
      height: 100%;
    }
    :deep(.el-table__body) {
      height: 100%;
    }
    :deep(.el-table__inner-wrapper::before) {
      height: 0;
    }
    span {
      margin-right: 0.5vw;
      font-size: 0.5vw;
      cursor: pointer;
    }
  }
  /* 分页器 */
  .pagination {
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 分页器样式穿透 */
    :deep(i) {
      font-size: 1.1vw;
    }
    :deep(li) {
      background: transparent !important;
      font-size: 1.1vw;
    }
    :deep(li.number) {
      color: #efefef;
    }
    :deep(li.is-active.number) {
      color: var(--table-border-color);
    }
    :deep(button) {
      background: transparent !important;
      color: #efefef;
    }
    :deep(button[disabled]) {
      background: transparent !important;
      color: gray;
    }
  }
  /* select框 */
  // :deep(.el-popper.is-pure.is-light.el-select__popper) {
  //   background-color: red !important;
  //   top: 0 !important;
  // }
}
</style>
