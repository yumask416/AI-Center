<script setup>
import {
  WarningFilled,
  QuestionFilled,
  InfoFilled
} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from 'element-plus'

const props = defineProps(["obj", "warnDetailVisible"]);
const emits = defineEmits(["closeWarnDetail"]);

function close() {
  emits('closeWarnDetail')
}

/* 按钮 */
function confirm() {
  ElMessageBox.confirm(
    '是否确认告警',
    '警告',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: '警告',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '已确认告警',
      })
    })
    .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: '取消确认告警',
      // })
    })
}
</script>

<template>
  <div>
    <el-dialog :model-value="warnDetailVisible" @close="close" title="告警详情页" width="40%">
      <div class="dialog-box">
        <!-- 告警等级/告警事件 -->
        <div class="box-header">
          <div class="grade">
            <span>告警等级：</span>
            <div
              :style="props.obj.level == 0 ? 'color:#EB9B04' : props.obj.level == 1 ? 'color:#E64C06' : 'color:#CF1322'">
              <el-icon>
                <InfoFilled v-if="props.obj.level == 0" />
                <QuestionFilled v-if="props.obj.level == 1" />
                <WarningFilled v-if="props.obj.level == 2" />
              </el-icon>
              {{ props.obj.level == 0 ? '一般' : props.obj.level == 1 ? '严重' : '紧急' }}
            </div>
          </div>
          <div>
            <span class="header-event">告警事件：</span>
            <span>{{ props.obj.event }}</span>
          </div>
        </div>
        <div class="box-center">
          <!-- 告警事件图片 -->
          <div class="center-first">
            <el-divider direction="vertical"></el-divider>
            <span>告警事件图片</span>
            <el-image class="card-img" :src="props.obj.img" />
          </div>
          <!-- 告警事件详细信息 -->
          <div class="center-second">
            <div>
              <el-divider direction="vertical"></el-divider>
              <span>告警事件详细信息
              </span>
            </div>
            <div class="second-content">
              <span>
                发生设备：
                <span>{{ props.obj.deviceName }}</span>
              </span>
              <span>
                发生时间：
                <span>{{ props.obj.time }}</span>
              </span>
            </div>
          </div>
          <!-- 告警确认 -->
          <div class="center-third">
            <div>
              <el-divider direction="vertical"></el-divider>
              <span>告警确认</span>
              <div class="third-btn">
                <el-button type="primary" size="small" @click="confirm">确认告警</el-button>
                <el-button type="success" size="small" disabled>已确认</el-button>
              </div>
            </div>
          </div>
          <!-- 生成工单 -->
          <div class="center-third">
            <div>
              <el-divider direction="vertical"></el-divider>
              <span>生成工单</span>
              <div class="third-btn">
                <el-button type="primary" size="small">生成工单</el-button>
                <el-button type="success" size="small" disabled>已生成</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
:deep(.el-dialog) {
  --el-dialog-bg-color: #0b3d51;
  color: white !important;
  margin: 2vw auto 10vw;

  .el-dialog__header {
    padding: 1vw;
    width: 100%;
    background-color: #041e2b;

    .el-dialog__title {
      color: #fff;
      font-size: 0.8vw;
    }
  }

  .el-dialog__body {
    color: #fff;
    font-size: 0.8vw;

    .dialog-box {

      /* 告警等级/告警事件 */
      .box-header {
        height: 3vw;
        padding: 1vw 1vw 0 1vw;
        border-bottom: 0.05vw solid #fff;
        display: flex;
        justify-content: space-between;

        .grade {
          display: flex;
        }
      }

      .box-center {
        padding-top: 1vw;
        position: relative;

        /* 告警事件图片 */
        .card-img {
          width: calc(100% - 6vw);
          height: 16.5vw;
          display: inline-block;
          position: absolute;
          top: 3.5vw;
          left: 50%;
          transform: translateX(-50%);
        }

        /* 告警事件详细信息 */
        .center-second {
          margin-top: 20vw;

          .second-content {
            display: flex;
            justify-content: space-between;
            padding: 1vw 1vw 0 1vw;
          }
        }

        .center-third {
          margin-top: 1vw;

          .third-btn {
            margin-top: 1vw;
            margin-left: 1vw;
          }
        }
      }
    }
  }
}
</style>
