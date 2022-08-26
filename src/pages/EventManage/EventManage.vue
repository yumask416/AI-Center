<script setup>
import ListPattern from './components/ListPattern.vue'
import CardPattern from './components/CardPattern.vue'
import EditLevel from './components/EditLevel.vue'
import { ref, reactive } from 'vue'
import { Search, Edit } from '@element-plus/icons-vue'

/* 菜单 */
const currentIndex = ref('')
const routeArr = [
  {
    value: 'WaitingEvent',
    name: '待处理事件',
  },
  {
    value: 'ProcessedEvent',
    name: '已处理事件',
  },
]
const switchHandler = index => {
  currentIndex.value = index
  if (index === 1) {
    isDealShow.value = false
  } else {
    isDealShow.value = true
  }
}

/* 卡片列表 */
let cardList = reactive([
  {
    data: 0,
    title: '告警事件总数',
  },
  {
    data: 10,
    title: '一般告警事件数量',
  },
  {
    data: 20,
    title: '紧急告警事件数量',
  },
  {
    data: 30,
    title: '已处理告警事件数量',
  },
  {
    data: 0,
    title: '未处理告警事件数量',
  },
])
/* 搜索 */
let input = ref('')
let value1 = ref('')
let value = ref('')
const options = [
  {
    value: 'Option1',
    label: '用手机',
  },
  {
    value: 'Option2',
    label: '明火',
  },
  {
    value: 'Option3',
    label: '人员离岗',
  },
]

/* 批量处理 */
let isDealShow = ref(true)

/*  修改等级 */
let editLevelVisible = ref(false)
function editLevel() {
  // console.log('修改等级');
  editLevelVisible.value = true
}
function closeEditLevel() {
  editLevelVisible.value = false
}

/* 模式切换/滑块开关 */
let isListShow = ref(true)

function handlePatternChange() { }

/* 分页 */
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

function handleSizeChange() {
  console.log(`${val} items per page`)
}
function handleCurrentChange(val) {
  console.log(`current page: ${val}`)
}
</script>

<template>
  <div class="box">
    <div class="headers">
      <div class="menu" v-for="(item, index) in routeArr" :key="index" :class="currentIndex == index ? 'active' : ''"
        @click="switchHandler(index)">
        {{ item.name }}
      </div>
    </div>
    <div class="bodys">
      <!-- 卡片 -->
      <div class="card-list">
        <div class="litle-card" v-for="(item, index) in cardList" :key="index">
          <div class="card-data">{{ item.data }}</div>
          <div class="card-title">{{ item.title }}</div>
        </div>
      </div>
      <!-- 搜索 -->
      <v-scale screenW="1706">
        <div class="search-list">
          <div class="search">
            时间：
            <el-date-picker :teleported="false" v-model="value1" type="daterange" range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期" />
          </div>
          <div class="search">
            设备：
            <el-select v-model="value" placeholder="全部" :teleported="false" clearable>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="search">
            事件：
            <el-select v-model="value" placeholder="全部" :teleported="false" clearable>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="search">
            SN号：
            <el-input style="display: inline" v-model="input" placeholder="请输入SN号查找" />
          </div>
          <div class="search">
            <el-button type="primary" :icon="Search">搜索</el-button>
            <el-button type="primary" :icon="Edit" v-if="isDealShow">批量处理</el-button>
            <el-button type="primary" :icon="Edit" @click="editLevel">修改等级</el-button>
          </div>
        </div>
      </v-scale>
      <!-- 滑块开关 -->
      <div class="pattern">
        <v-scale screenW="1706">
          <el-switch v-model="isListShow" size="large" active-text="卡片模式" inactive-text="列表模式"
            style="--el-switch-on-color: #3dbaf1; --el-switch-off-color: #3dbaf1" @change="handlePatternChange" />
        </v-scale>
      </div>
      <!-- 列表模式 -->
      <ListPattern class="pattern-switch" v-if="!isListShow" />
      <!-- 卡片模式 -->
      <CardPattern class="pattern-switch" v-if="isListShow" />
      <!-- 分页 -->
      <div class="pagination-box">
        <el-pagination class="pagination" :small="small" :disabled="disabled" :background="background"
          layout="total,jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </div>
    <EditLevel :editLevelVisible="editLevelVisible" @closeEditLevel="closeEditLevel"/>
  </div>
</template>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;

  /* 菜单 */
  .headers {
    width: 100%;
    height: 3.5vw;
    display: flex;

    .menu {
      width: 9.5vw;
      height: 100%;
      cursor: pointer;
      border-radius: 0.3vw 0.3vw 0 0;
      font-size: 1.05vw;
      line-height: 3.5vw;
      text-align: center;
      color: #00d8ff;
    }

    /* 点击样式 */
    .active {
      background-color: var(--equip-bg-color);
      color: #fff;
    }
  }

  .bodys {
    width: calc(100% - 0.25vw);
    height: calc(100% - 3.75vw);
    background: var(--equip-bg-color);
    /* 卡片列表 */
    .card-list {
      width: 100%;
      height: 9vw;
      padding: 0 2vw;
      display: flex;
      justify-content: space-around;
      .litle-card {
        width: 15.2vw;
        height: 7vw;
        background-color: #0b3d51;
        margin-top: 0.5vw;
        border-radius: 0.3vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: space-evenly;
        .card-data {
          font-size: 2vw;
          color: #3dbaf1;
          font-weight: 500;
        }
        .card-title {
          font-size: 0.8vw;
          color: #fff;
        }
      }
    }
    /* 搜索 */
    .search-list {
      width: 100%;
      height: 1.9vw;
      color: white;
      padding: 0 1vw;
      display: flex;
      justify-content: center;
      flex: 1;
      position: relative;
      .search {
        padding: 0 1vw;
        display: flex;
        align-items: center;
        white-space:nowrap; 
      }
    }
    /* 滑块开关 */
    .pattern {
      height: 3.3vw;
      padding: 0.5vw 0;
      margin-left: calc(100% - 15vw);
    }
    /* 列表模式/卡片模式 */
    .pattern-switch {
      height: calc(100% - 16.7vw);
      width: calc(100% - 2vw);
      border-top: 0.1vw solid #3dbaf1;
      margin: 0 auto;
      overflow: hidden;
    }
    /* 分页 */
    .pagination-box {
      overflow: hidden;
      float: right;
      padding-right: 3vw;
    }
    .pagination {
      height: 2.5vw;

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
    }
  }
}
</style>
