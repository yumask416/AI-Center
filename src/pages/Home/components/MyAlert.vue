<script lang="ts" setup>
import { ref } from 'vue'
let urgentAlert = ref(1000)
let usualAlert = ref(9000)
</script>

<template>
  <div class="area">
    <!-- 告警统计 -->
    <div class="count-box">
      <div class="home-card-bar">
        <el-icon style="font-size: 0.75vw"><Histogram /></el-icon>
        告警统计
      </div>
      <div class="home-card-body">
        <div class="alert-count">
          <div class="top">
            <span>告警总数：</span>
            <span class="num">{{ urgentAlert + usualAlert }}</span>
          </div>
          <div class="bot">
            <div class="card1">
              <span class="num">{{ urgentAlert }}</span>
              <span>紧急告警数</span>
            </div>
            <div class="card2">
              <span class="num">{{ usualAlert }}</span>
              <span>一般告警数</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 实时告警列表 -->
    <div class="list-box">
      <div class="home-card-bar">
        <el-icon style="font-size: 0.75vw"><List /></el-icon>
        实时告警列表
      </div>
      <div class="home-card-body">
        <div class="table-title">
          <span>告警设备</span>
          <span>告警事件</span>
        </div>
        <div class="list-result">
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
          <div class="list-item">
            <span>1</span>
            <span>烟火识别</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  display: flex;
  flex-direction: column;
  width: 98%;
  height: calc(100% - 0.5vw);
  margin-bottom: 0.5vw;
}
/* 告警统计 */
.alert-count {
  padding: 0.3vw;
  .top {
    display: flex;
    align-items: center;
    padding: 0.5vw 0;
    .num {
      font-size: 2vw;
    }
  }
  .bot {
    display: flex;
    justify-content: space-between;
    span {
      color: white;
    }
    .card1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      // width: 115px;
      flex: 1;
      margin-right: 0.2vw;
      height: 6vw;
      background: linear-gradient(0, rgb(228, 82, 9), transparent);
      .num {
        font-size: 2vw;
        color: rgb(228, 82, 9);
      }
    }
    .card2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      // width: 115px;
      flex: 1;
      margin-left: 0.2vw;
      height: 6vw;
      background: linear-gradient(0, orange, transparent);
      .num {
        font-size: 2vw;
        color: orange;
      }
    }
  }
}

/* 实时告警列表 */
.list-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 0;
  // background-color: green;
  .home-card-bar {
    margin-top: 0.3vw;
    height: 1vw;
  }
  .home-card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 0;
    padding: 0.3vw;
    // background-color: green;
    .table-title {
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        // width: 117px;
        flex: 1;
        height: 1.5vw;
        text-align: center;
        font-size: 1vw;
        line-height: 1.5vw;
        background-color: var(--card-background-shadow-color);
        &:first-child {
          margin-right: 0.5vw;
        }
      }
    }
    .list-result {
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.3vw;
        background-color: var(--card-background-shadow-color);
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--card-title-color);
      }
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      height: 1.2vw;
      line-height: 1.2vw;
      font-size: 1vw;
      &:nth-child(even) {
        background-color: var(--card-background-shadow-color);
      }

      span {
        display: inline-block;
        width: 117px;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        // background-color: var(--card-background-shadow-color);
        &:first-child {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
