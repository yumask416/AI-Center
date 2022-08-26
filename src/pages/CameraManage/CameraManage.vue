<script setup>
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'

/* 搜索 */
let equipSelect = ref('')
let timeSelect = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
]

/* 表格数据 */
const tableData = [
  {
    id: 1,
    CameraName: 'IPC-1',
    IP: '127.0.0.1',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 2,
    CameraName: 'IPC-2',
    IP: '127.0.0.2',
    Status: '在线',
    Place: '西北角',
  },
  {
    id: 3,
    CameraName: 'IPC-3',
    IP: '127.0.0.3',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 4,
    CameraName: 'IPC-4',
    IP: '127.0.0.4',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 5,
    CameraName: 'IPC-5',
    IP: '127.0.0.5',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 6,
    CameraName: 'IPC-6',
    IP: '127.0.0.6',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 7,
    CameraName: 'IPC-7',
    IP: '127.0.0.7',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 8,
    CameraName: 'IPC-8',
    IP: '127.0.0.8',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 9,
    CameraName: 'IPC-9',
    IP: '127.0.0.9',
    Status: '在线',
    Place: '东南角',
  },
  {
    id: 10,
    CameraName: 'IPC-10',
    IP: '127.0.0.10',
    Status: '在线',
    Place: '东南角',
  },
]

// 分页
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const currentPage = ref(1)

function handleSizeChange() {
  console.log(`${val} items per page`)
}
function handleCurrentChange(val) {
  console.log(`current page: ${val}`)
}

/* 表格样式 */
let tableHeaderColor = {
  // boxSizing: 'content-box',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderTop: '1px solid #3dbaf1',
  borderBottom: '1px solid #3dbaf1',
}
let tableRowStyle = {
  // boxSizing: 'content-box',
  padding:'0.58vw',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid #3dbaf1',
}
</script>

<template>
  <div class="box">
    <!-- 搜索 -->
    <div class="search-list">
      <div class="search">
        设备：
        <v-scale>
          <el-select v-model="equipSelect" placeholder="全部" size="small" :teleported="false">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </v-scale>
      </div>
      <div class="search">
        时间范围：
        <v-scale>
          <el-date-picker :teleported="false" v-model="timeSelect" type="daterange" size="small" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" />
        </v-scale>
      </div>
      <v-scale>
        <el-button class="search" type="primary" :icon="Search" size="small">搜索</el-button>
      </v-scale>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" style="width:1005" :cell-style="tableRowStyle" :header-cell-style="tableHeaderColor">
        <el-table-column prop="id" label="序号" align="center" width="80" />
        <el-table-column prop="CameraName" label="摄像头名称" align="center" width="160" />
        <el-table-column prop="IP" label="IP" align="center" width="280" />
        <el-table-column prop="Status" label="状态" align="center" width="160" />
        <el-table-column prop="Place" label="位置" align="center" width="150" />
        <el-table-column label="操作" align="center">
          <template #default>
            <el-button text>查看</el-button>
            <el-button text>配置</el-button>
            <el-button text>还原</el-button>
            <el-button text>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination-box">
      <el-pagination class="pagination" :small="small" :disabled="disabled" :background="background"
        layout="total,prev,pager,next,jumper" :total="40" v-model:currentPage="currentPage"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: calc(100% - 0.25vw);
  // width: 100%;
  height: calc(100% - 0.25vw);
  background-color: rgba(4, 30, 43, 0.8);
  color: #8adeff;
  // padding-top: 1vw;

  /* 搜索 */
  .search-list {
    height: 4vw;
    // background-color: antiquewhite;
    padding-top: 1vw;
    // margin-top: 0.5vw;
    display: flex;

    .search {
      margin-left: 2vw;
      color: #fff;
      font-size: 0.8vw;
    }
  }

  /* 表格 */
  .table {
    width: 98%;
    // height: calc(100% - 6.75vw);
    // height: calc(100% - 6.4vw);
      height: calc(100% - 8.7vw);
    // height: 100%;
    position: relative;
    margin: 0 auto;

    .el-table {
      height: 100%;
      // top: 1vw;
      position: absolute;
      --el-table-header-bg-color: rgba(4, 30, 43, 1);
      --el-table-header-text-color: #3dbaf1;
      --el-table-text-color: #3dbaf1;
      --el-table-tr-bg-color: rgba(4, 30, 43, 1);
      --el-table-border-color: none;

      .el-button {
        color: #3dbaf1;
        font-size: 0.6vw;
        background-color: rgba(4, 30, 43, 1);
      }
    }
  }

  /* 分页 */
  .pagination-box {
    display: flex;
    justify-content: flex-end;
    padding-right: 3vw;
    padding-top: 3vw;
    height: 2.5vw;

    // justify-content: left;
    .el-pagination {
      color: #fff;
    }

    :deep(.el-pagination__total) {
      color: white;
      font-size: 0.8vw;
    }

    :deep(.el-pagination__jump) {
      color: white;
      font-size: 0.8vw;
    }

    :deep(.el-input) {
      height: 1.8vw !important;
    }

    :deep(.el-input__wrapper) {
      height: 1.8vw !important;
    }

    :deep(.el-pagination .btn-prev) {
      background-color: transparent !important;
      color: #fff !important;
    }

    :deep(.el-pagination .btn-next) {
      background-color: transparent !important;
      color: #fff !important;
    }

    :deep(.el-pager li) {
      background: none !important;
      // color: #fff !important;
    }
  }
}
</style>
