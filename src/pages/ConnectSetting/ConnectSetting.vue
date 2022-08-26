<script setup>
import { reactive } from 'vue'
let formData = reactive({
  websocket: {
    isOn: false,
    url: '',
    withPic: '关闭',
  },
  httpModel: {
    isOn: false,
    url: '',
    withPic: '关闭',
    pdfUrl: '',
    withPdf: '关闭',
  },
  httpSurvive: {
    isOn: false,
    url: '',
    time: 1,
  },
})
let tableData = reactive([
  {
    name: 'IPC1',
    interval: 10,
    isInterval: true,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC1',
    interval: 7,
    isInterval: true,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC1',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC2',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC3',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC4',
    interval: 10,
    isInterval: false,
  },
  {
    name: 'IPC5',
    interval: 10,
    isInterval: false,
  },
])
/* 表格样式 */
let tableHeaderColor = {
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  // backgroundColor: 'transparent',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}
let tableRowStyle = {
  boxSizing: 'border-box',
  // padding: '0',
  textAlign: 'center',
  // backgroundColor: 'var(--equip-bg-color)',
  backgroundColor: 'rgba(4, 30, 43, 0.1)',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}
</script>

<template>
  <div class="area">
    <div class="box">
      <div class="left">
        <!-- form begin -->
        <v-scale>
          <el-form label-position="left" label-width="10vw" :model="formData">
            <el-form-item size="small" label="WebSocket模式">
              <el-switch v-model="formData.websocket.isOn" />
            </el-form-item>
            <el-form-item size="small" label="推送地址">
              <el-input v-model="formData.websocket.url" style="width: 380px; margin-right: 8px" />
              <el-button type="primary">网络检测</el-button>
            </el-form-item>
            <el-form-item size="small" label="上传图片数据">
              <el-radio-group v-model="formData.websocket.withPic">
                <el-radio label="开启" />
                <el-radio label="关闭" />
              </el-radio-group>
            </el-form-item>
            <el-divider />
            <el-form-item size="small" label="HTTP/HTTPS模式">
              <el-switch v-model="formData.httpModel.isOn" />
            </el-form-item>
            <el-form-item size="small" label="推送地址">
              <el-input v-model="formData.httpModel.url" style="width: 380px; margin-right: 8px" />
              <el-button type="primary">网络检测</el-button>
            </el-form-item>
            <el-form-item size="small" label="上传图片数据">
              <el-radio-group v-model="formData.httpModel.withPic">
                <el-radio label="开启" />
                <el-radio label="关闭" />
              </el-radio-group>
            </el-form-item>
            <el-form-item size="small" label="PDF URL">
              <el-input
                v-model="formData.httpModel.pdfUrl"
                style="width: 380px; margin-right: 8px"
              />
              <el-button type="primary">网络检测</el-button>
            </el-form-item>
            <el-form-item size="small" label="上传PDF数据">
              <el-radio-group v-model="formData.httpModel.withPdf">
                <el-radio label="开启" />
                <el-radio label="关闭" />
              </el-radio-group>
            </el-form-item>
            <el-divider />
            <el-form-item size="small" label="HTTP/HTTPS保活">
              <el-switch v-model="formData.httpSurvive.isOn" />
            </el-form-item>
            <el-form-item size="small" label="推送地址">
              <el-input
                v-model="formData.httpSurvive.url"
                style="width: 380px; margin-right: 8px"
              />
              <el-button type="primary">网络检测</el-button>
            </el-form-item>
            <el-form-item size="small" label="保活时间（秒）">
              <el-input-number v-model="formData.httpSurvive.time" :min="1" :max="10" />
            </el-form-item>
            <el-form-item size="small">
              <el-button type="primary">保存</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </v-scale>
        <!-- form end -->
      </div>
      <div class="right">
        <v-scale display="block">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%; font-size: 11px"
            height="500"
            :header-cell-style="tableHeaderColor"
            :cell-style="tableRowStyle"
          >
            <el-table-column prop="name" label="摄像头名称" width="200" />
            <el-table-column prop="interval" label="上传时间间隔(min)" width="220">
              <template #default="scope">
                <el-input-number v-model="scope.row.interval" :min="1" :max="10" size="small" />
              </template>
            </el-table-column>
            <el-table-column prop="isInterval" label="间隔使用">
              <template #default="scope">
                <el-switch v-model="scope.row.isInterval" size="small" />
              </template>
            </el-table-column>
          </el-table>
        </v-scale>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  width: 100%;
  height: 100%;
  padding: 1.4vw;
  // background-color: red;
  :deep(label) {
    color: white;
  }
  :deep(.el-table) {
    background-color: transparent !important;
  }
  :deep(.el-table tr) {
    background: transparent;
  }
  :deep(.el-table__inner-wrapper::before) {
    height: 0;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 30, 43, 0.8);
  .left {
    flex: 1;
    padding: 1vw;
    // background-color: pink;
  }
  .right {
    flex: 1;
    padding: 1vw 1vw 1vw 3vw;
    border-left: 1px solid gray;
    // background-color: skyblue;
  }
}
</style>
