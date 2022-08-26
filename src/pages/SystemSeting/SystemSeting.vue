<script setup>
import { ref } from "vue";

/* 基础配置 */
let equipName = ref("AIMASTER-GAS@101-1.0");
let equipCode = ref("AC0100x184000159");

/* 时间配置 */
const setTime = ref();
</script>

<template>
  <div class="box">
    <!-- 配置 -->
    <div class="main">
      <!-- 基础配置 -->
      <div class="main-left">
        <h4>基础配置</h4>
        <div class="box-content">
          <div class="content-items">
            <span class="name">设备名称：</span>
            <el-input class="item" style="display: inline" v-model="equipName" placeholder="请输入设备名称"></el-input>
          </div>
          <div class="content-items">
            <span class="name">设备编码：</span>
            <el-input class="item" style="display: inline" v-model="equipCode" placeholder="请输入设备编码"></el-input>
          </div>
          <div class="content-items">
            <span class="name">设备语言：</span>
            <span class="item">简体中文</span>
          </div>
          <div class="content-items">
            <span class="name">产品型号：</span>
            <span class="item">AIMASTER-GAS@101-1.0</span>
          </div>
          <div class="content-items">
            <span class="name">序列号：</span>
            <span class="item">AC0100x184000159</span>
          </div>
          <div class="content-items">
            <span class="name">软件版本：</span>
            <span class="item">AIMASTER-GAS@release.1.0.0-2.220414</span>
          </div>
          <div class="content-items">
            <span class="name">序列号：</span>
            <span class="item">2014-04-14 10:37:45</span>
          </div>
          <el-button>保存</el-button>
        </div>
      </div>
      <!-- 时间配置 -->
      <div class="main-right">
        <h4>时间配置</h4>
        <div class="box-content">
          <div class="content-items">
            <span class="name">系统时间：</span>
            <span class="item">2022-04-05</span>
          </div>
          <div class="content-items">
            <div class="name">设置时间：</div>
            <el-time-picker class="item" v-model="setTime" arrow-control placeholder="请选择一个时刻" />
          </div>
            <el-button class="btn">保存</el-button>
        </div>
      </div>
    </div>
    <!-- 设置 -->
    <div class="footer">
      <div class="footer-box">
        <el-button>重启</el-button>
      </div>
      <div class="footer-box">
        <el-button>恢复出厂设置</el-button>
      </div>
      <div class="footer-box">
        <el-button>升级</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  width: calc(100% - 0.25vw);
  height: calc(100% - 0.25vw);
  background-color: rgba(4, 30, 43, 0.8);
  color: #00d8ff;
  font-size: 0.9vw;

  .main {
    width: 100%;
    height: calc(100% - 18.25vw);
    display: flex;

    .main-left {
      width: 50%;
      border-right: 0.1vw solid #8adeff;
      position: relative;

      .box-content {
        height: calc(100% - 3vw);
        margin-left: 3vw;
        margin-top: 1vw;

        .content-items {
          height: calc(100% / 9);

          .name {
            width: 8vw;
            display: inline-block;
          }
        }
      }
    }

    .main-right {
      width: 50%;
      position: relative;

      .box-content {
        height: calc(100% - 3vw);
        margin-left: 3vw;
        margin-top: 1vw;

        .content-items {
          height: calc(100% / 9);

          // display: flex;
          .name {
            width: 8vw;
            display: inline-block;
          }
        }
        .btn{
            margin-top: 1vw;
          }
      }
    }

    h4 {
      font-weight: bold;
      margin-left: 2vw;
      margin-top: 1vw;
    }

    .el-button {
      width: 7vw;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 5px;
      border: 0.1vw solid #8adeff;
      background: none;
      color: #8adeff;
      cursor: pointer;
      position: absolute;
    }

    .el-button:hover {
      background: rgba(9, 142, 22, 0.5);
    }
  }

  .footer {
    width: 100%;
    height: 18vw;
    border-top: 0.1vw solid #8adeff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 6vw;

    .footer-box {
      width: calc(100% / 4.5);
      height: calc(100% / 1.6);
      border: 1px solid #8adeff;
      position: relative;

      .el-button {
        width: 9vw;
        border: 0.1vw solid #8adeff;
        background: none;
        color: #8adeff;
        cursor: pointer;
        position: absolute;
        bottom: 1vw;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .footer-box:hover {
      background: rgba(29, 57, 63, 0.5);
    }

    .el-button:hover {
      background: rgba(70, 113, 130, 0.5);
    }
  }
}
</style>
