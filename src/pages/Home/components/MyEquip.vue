<script setup>
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
// import { AddLocation } from 'element-plus'

/* 返回的设备数量统计 */
let onlineCount = ref(200)
let offlineCount = ref(100)
let brokenCount = ref(0)

/* 返回的结果列表 */
let resList = reactive([
  {
    name: 'ai-box1',
    isOnline: true,
  },
  {
    name: 'ai-box2',
    isOnline: true,
  },
  {
    name: 'ai-box3',
    isOnline: true,
  },
])

/* 搜索字段 */
let searchStr = ref('')

/* 级联选择器 */
const cascaderValue = ref([])
const behavior = {
  expandTrigger: 'hover',
}
const options = [
  {
    value: 'shandong',
    label: '山东省',
    children: [
      {
        value: 'zaozhuang',
        label: '枣庄市',
      },
    ],
  },
]
const handleChange = value => {
  console.log(value)
}

/* 搜索处理函数 */
const searchHandler = () => {
  // 发送请求
  // 更新设备列表数组
}
</script>

<template>
  <div class="area">
    <!-- 组件内容 -->
    <div class="container">
      <!-- 设备信息 -->
      <div class="top">
        <div class="home-card-bar">
          <el-icon style="font-size: 0.75vw"><Document /></el-icon>
          设备信息
        </div>
        <div class="home-card-body">
          <span>正常运行设备总数: &nbsp;&nbsp;</span>
          <span class="num" style="color: white; font-size: 2vw">{{ onlineCount + offlineCount + brokenCount }}</span>
          <div class="detail">
            <div class="box">
              <span class="num">{{ onlineCount }}</span
              ><br /><span>接入设备数</span>
            </div>
            <div class="box">
              <span class="num">{{ offlineCount }}</span
              ><br /><span>离线设备数</span>
            </div>
            <div class="box">
              <span class="num" :style="brokenCount > 0 ? 'color:red' : ''">{{ brokenCount }}</span
              ><br /><span>故障设备数</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 设备列表 -->
      <div class="bot">
        <div class="home-card-bar">
          <el-icon style="font-size: 0.75vw"><FolderOpened /></el-icon>
          设备列表
        </div>
        <div class="home-card-body">
          <!-- 搜索框 -->
          <el-input v-model="searchStr" size="small" placeholder="请输入关键字搜索" :suffix-icon="Search" />
          <!-- 级联选择器 -->
          <div class="cascader">
            <el-cascader
              clearable
              placeholder="点击筛选区域"
              size="small"
              v-model="cascaderValue"
              :options="options"
              :props="behavior"
              @change="handleChange"
              style="width: 100%"
            />
          </div>
          <div class="res-list-box">
            <li v-for="item in resList">
              <span :class="item.isOnline ? 'online' : 'offline'">{{ item.name }}</span>
              <div>
                <span :class="item.isOnline ? 'online' : 'offline'"
                  ><el-icon><SuccessFilled /></el-icon> 在线</span
                >
                &nbsp; &nbsp;
                <span class="offline"
                  ><el-icon><WarningFilled /></el-icon> 离线
                </span>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 0.5vw 0.5vw 0.5vw;
}

.container {
  width: 100%;
  height: 100%;
  /* 设备信息 */
  .top {
    height: 9vw;
    .home-card-body {
      padding-top: 0.8vw;
      height: 100%;
      .detail {
        display: flex;
        padding-top: 0.8vw;
        .box {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-right: 0.5vw;
          padding-left: 0.3vw;

          height: 4.7vw;
          background-color: var(--card-background-shadow-color);
          border-radius: 0.2vw;
          .num {
            padding-top: 0.15vw;
            font-size: 2vw;
            color: white;
          }
        }
      }
    }
  }
  /* 设备列表 */
  .bot {
    display: flex;
    flex-direction: column;
    margin-top: 1.5vw;
    height: calc(100% - 10.5vw);
    overflow: hidden;
    .home-card-body {
      // display: flex;
      // flex-direction: column;
      flex: 1;
      padding-right: 0.5vw;
      padding-top: 0.3vw;
      overflow: hidden;
      :deep(.el-input__wrapper) {
        box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
        border: none;
        background-color: var(--card-background-shadow-color);
      }
      :deep(.el-input__inner) {
        color: white;
      }
      .cascader {
        padding-top: 0.3vw;
      }
      .res-list-box {
        // flex: 1;
        // margin-top: 0.3vw;
        background-color: var(--card-background-shadow-color);
        height: calc(100% - 4vw);
        overflow-y: auto;
        overflow-x: hidden;
        font-size: 0.8vw;
        line-height: 1.1vw;
        li,
        span {
          height: 1.1vw;
        }

        // 滚动条样式
        &::-webkit-scrollbar {
          width: 0.3vw;
          background-color: var(--card-background-shadow-color);
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--card-title-color);
        }
        li {
          display: flex;
          justify-content: space-around;
          &:nth-child(odd) {
            background-color: var(--card-background-color);
          }
        }
      }
    }
  }
}

.online {
  color: green;
}
.offline {
  color: #bfbfbf;
}
</style>
