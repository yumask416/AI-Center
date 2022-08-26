<script setup>
import { Search, Plus } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

let role = ref('')
let searchStr = ref('')

let roleOptions = reactive([
  { label: '管理员', value: '1' },
  { label: '卫生科', value: '2' },
])
let tableData = reactive([
  {
    id: 1,
    name: '卫生科',
    createTime: '2022-01-14 00:23:02',
    address: 'No. 189, Grove St, Los Angeles',
    access: '历史事件，系统设置',
  },
  {
    id: 1,
    name: '卫生科',
    createTime: '2022-01-14 00:23:02',
    address: 'No. 189, Grove St, Los Angeles',
    access: '历史事件，系统设置',
  },
  {
    id: 1,
    name: '卫生科',
    createTime: '2022-01-14 00:23:02',
    address: 'No. 189, Grove St, Los Angeles',
    access: '历史事件，系统设置',
  },
  {
    id: 1,
    name: '卫生科',
    createTime: '2022-01-14 00:23:02',
    address: 'No. 189, Grove St, Los Angeles',
    access: '历史事件，系统设置',
  },
])
let tableHeaderColor = {
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}
let tableRowStyle = {
  boxSizing: 'border-box',
  // padding: '0',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}

/* 注册用户 */
let showRegDialog = ref(false)
let regForm = reactive({
  userName: '',
  nickName: '',
  pwd: '',
  confirmPwd: '',
  role: '',
})
let selectedRole = ref(1)
let allRoleList = reactive([
  {
    id: 1,
    label: '负责人',
  },
  {
    id: 2,
    label: '值班人员',
  },
])

/* 重置密码 */
let showResetPwdDialog = ref(false)
let pwdForm = reactive({
  newPwd: '',
  confirmPwd: '',
})

/* 删除用户 */
const deleteUserHandler = index => {
  ElMessageBox.confirm('此操作将删除当前用户，是否继续?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      tableData.splice(index, 1)
      ElMessage({
        type: 'success',
        message: '删除成功！',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消操作',
      })
    })
}
</script>

<template>
  <div class="container">
    <div class="top">
      <v-scale>
        <span>角色类型：</span>
        <el-select :teleported="false" v-model="role" placeholder="请选择角色类型" size="small">
          <el-option
            v-for="item in roleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>用户名：</span>
        <el-input
          v-model.trim="searchStr"
          placeholder="请输入用户名查找"
          size="small"
          style="width: 200px; padding-right: 15px"
          :suffix-icon="Search"
        />
        <el-button type="success" :icon="Search" size="small">搜索</el-button>
        <el-button type="success" :icon="Plus" size="small" @click="showRegDialog = true"
          >注册用户</el-button
        >
      </v-scale>
    </div>
    <v-scale display="block">
      <div class="bottom">
        <el-table
          :data="tableData"
          height="400"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :cell-style="tableRowStyle"
        >
          <el-table-column prop="id" label="角色ID" width="80" />
          <el-table-column prop="name" label="角色名称" width="180" />
          <el-table-column prop="createTime" label="添加时间" width="180" />
          <el-table-column prop="access" label="权限内容" width="300" />
          <el-table-column label="操作">
            <template #default="scope">
              <div class="table-btn-group">
                <span class="table-btn" @click="showResetPwdDialog = true"
                  ><el-icon><RefreshRight /></el-icon>&nbsp;重置密码</span
                >
                <span class="table-btn" @click="deleteUserHandler(scope.row.id - 1)"
                  ><el-icon><Delete /></el-icon>&nbsp;删除</span
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </v-scale>

    <!-- 注册新用户 -->
    <el-dialog v-model="showRegDialog" :show-close="false" title="注册新用户" width="40%">
      <div class="dialog-content">
        <div class="info">填写新密码：</div>
        <!-- 注册表单开始 -->
        <v-scale>
          <el-form :model="regForm" size="small" label-width="100px">
            <el-form-item label="请输入用户名：">
              <el-input v-model.trim="regForm.userName" style="width: 400px"></el-input>
            </el-form-item>
            <el-form-item label="请输入昵称：">
              <el-input v-model.trim="regForm.nickName" style="width: 400px"></el-input>
            </el-form-item>
            <el-form-item label="请输入密码：">
              <el-input
                type="password"
                show-password
                v-model.trim="regForm.pwd"
                style="width: 400px"
              ></el-input>
            </el-form-item>
            <el-form-item label="请确认密码：">
              <el-input
                type="password"
                show-password
                v-model.trim="regForm.confirmPwd"
                style="width: 400px"
              ></el-input>
            </el-form-item>
            <el-form-item label="请选择角色：">
              <!-- <el-input
                type="password"
                show-password
                v-model.trim="regForm.confirmPwd"
                style="width: 400px"
              ></el-input> -->
              <el-select
                :teleported="false"
                v-model="selectedRole"
                placeholder="请选择角色类型"
                size="small"
              >
                <el-option
                  v-for="item in allRoleList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确认修改</el-button>
              <el-button @click="showRegDialog = false">取消</el-button>
            </el-form-item>
          </el-form>
        </v-scale>
        <!-- 注册表单结束 -->
      </div>
    </el-dialog>

    <!-- 重置密码 -->
    <el-dialog v-model="showResetPwdDialog" :show-close="false" title="重置密码" width="40%">
      <div class="dialog-content">
        <div class="info">填写新密码：</div>
        <!-- 重置密码表单开始 -->
        <v-scale>
          <el-form :model="pwdForm" size="small">
            <el-form-item label="请输入新密码：">
              <el-input
                type="password"
                show-password
                v-model.trim="pwdForm.newPwd"
                style="width: 400px"
              ></el-input>
            </el-form-item>
            <el-form-item label="请确认新密码：">
              <el-input
                type="password"
                show-password
                v-model.trim="pwdForm.confirmPwd"
                style="width: 400px"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确认修改</el-button>
              <el-button @click="showResetPwdDialog = false">取消</el-button>
            </el-form-item>
          </el-form>
        </v-scale>
        <!-- 重置密码表单结束 -->
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  /* 对话框通用样式 */
  :deep(.el-dialog) {
    background-color: var(--equip-bg-shadow-color);
  }
  :deep(.el-dialog__header) {
    // display: flex;
    // align-items: center;
    margin-right: 0px;
    padding-top: 0;
    padding-bottom: 0;
    height: 2vw;
    color: red;
    background-color: var(--equip-bg-color);
  }
  :deep(.el-dialog__header .el-dialog__title) {
    color: white;
    font-size: 1vw;
    line-height: 2vw;
  }
  .info {
    font-size: 1vw;
    line-height: 1vw;
    padding-bottom: 1.2vw;
    color: white;
  }
  :deep(.el-form-item__label) {
    color: white;
  }
}
.top {
  display: flex;
  align-items: center;
  padding: 0 0 0 1.4vw;
  width: 100%;
  height: 5vw;
  color: white;
  // background-color: pink;
  span {
    // margin-right: 5px;
    &:nth-of-type(2) {
      margin-left: 20px;
    }
  }
}
.bottom {
  padding-left: 1vw;
  padding-right: 1vw;
  width: 100%;
  height: calc(100% - 5vw);

  :deep(.el-scrollbar__wrap) {
    background-color: var(--equip-bg-color);
  }
  :deep(.el-table__inner-wrapper::before) {
    height: 0;
  }
}
.table-btn-group {
  display: flex;
  justify-content: center;
}
.table-btn {
  display: flex;
  align-items: center;
  padding-left: 1.5vw;
  cursor: pointer;
}
</style>
