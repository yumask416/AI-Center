<script setup>
import { Plus } from '@element-plus/icons-vue'
import { ref, reactive, onMounted, toRaw } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

/* 表格数据 */
let tableData = reactive([
  {
    id: 1,
    name: '卫生科',
    createTime: '2022-01-14 00:23:02',
    access: '历史事件，系统设置',
  },
])

/* 权限树数据 */
const accessTreeDate = reactive([
  {
    id: 1,
    label: '设备摄像头权限',
    children: [
      {
        id: 3,
        label: '摄像头权限1',
      },
      {
        id: 4,
        label: '摄像头权限2',
      },
    ],
  },
  {
    id: 2,
    label: '菜单权限',
    children: [
      {
        id: 5,
        label: '菜单权限1',
      },
      {
        id: 6,
        label: '菜单权限2',
      },
    ],
  },
])

/* 选中的权限索引 */
let checkedIndexArr = reactive([])

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
  // padding: '0',
  textAlign: 'center',
  backgroundColor: 'var(--equip-bg-color)',
  borderBottom: '1px solid var(--table-border-color)',
  color: 'var(--table-border-color)',
}

/* 新增角色 */
let showAddRoleDialog = ref(false)
let roleForm = reactive({
  name: '',
})
const addRoleHandler = () => {
  showAddRoleDialog.value = true
}
/* 权限分配 */
let showRoleSettingDialog = ref(false)
const treeRef = ref()
const roleSettingHandler = () => {
  showRoleSettingDialog.value = true
  // console.log(toRaw(treeRef.value.setCurrentKey))
  // treeRef.value.setCheckedKeys([3], false)
}
const handleHandler = (checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys) => {
  // console.log(checkedKeys.checkedKeys) // 当前被选中的index
  // 三种写法：

  // checkedIndexArr.length = 0
  // checkedIndexArr.push(...checkedKeys.checkedKeys)

  // checkedIndexArr.length = 0
  // checkedIndexArr.push.apply(checkedIndexArr, checkedKeys.checkedKeys)

  checkedIndexArr.splice(0, checkedIndexArr.length, ...checkedKeys.checkedKeys)
}
const resetChosenHandler = () => {
  treeRef.value.setCheckedKeys([], false)
  checkedIndexArr.length = 0
}

/* 删除 */
const deleteRoleHandler = index => {
  ElMessageBox.confirm('此操作将删除当前角色，是否继续?', 'Warning', {
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
        <el-button type="success" :icon="Plus" size="small" @click="addRoleHandler"
          >新增角色</el-button
        >
      </v-scale>
    </div>
    <v-scale display="block">
      <div class="bottom">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :cell-style="tableRowStyle"
        >
          <el-table-column prop="id" label="角色ID" width="80" />
          <el-table-column prop="name" label="角色名称" width="180" />
          <el-table-column prop="access" label="权限内容" width="300" />
          <el-table-column prop="createTime" label="添加时间" width="180" />
          <el-table-column label="操作">
            <template #default="scope">
              <div class="table-btn-group">
                <span class="table-btn" @click="roleSettingHandler"
                  ><el-icon><Setting /></el-icon>&nbsp;权限分配</span
                >
                <!-- <span class="table-btn" @click="addSubR"
                  ><el-icon><CirclePlus /></el-icon>&nbsp;新增子角色</span
                > -->
                <span class="table-btn" @click="deleteRoleHandler(scope.row.id - 1)"
                  ><el-icon><Delete /></el-icon>&nbsp;删除</span
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </v-scale>
    <!-- 新增角色 -->
    <el-dialog v-model="showAddRoleDialog" :show-close="false" title="新增角色" width="40%">
      <div class="dialog-content">
        <div class="info">填写表单新增角色：</div>
        <v-scale>
          <el-form :model="roleForm" size="small">
            <el-form-item label="角色名：">
              <el-input v-model.trim="roleForm.name" style="width: 400px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确认新增</el-button>
              <el-button @click="showAddRoleDialog = false">取消</el-button>
            </el-form-item>
          </el-form>
        </v-scale>
      </div>
    </el-dialog>
    <!-- 权限分配 -->
    <el-dialog v-model="showRoleSettingDialog" :show-close="false" title="权限分配" width="40%">
      <div class="dialog-content">
        <div class="info">
          角色名：卫生科
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          注册时间：2022-07-01 00:23:02
        </div>
        <el-divider />
        <div class="info">用户权限分配</div>
        <div class="choose">
          <div class="box">
            <div class="left">
              <v-scale display="block">
                <div class="left-item">
                  <div class="title">权限列表</div>
                  <div class="tree">
                    <el-tree
                      ref="treeRef"
                      show-checkbox
                      accordion
                      :data="accessTreeDate"
                      node-key="id"
                      @check="handleHandler"
                    />
                  </div>
                </div>
              </v-scale>
            </div>
            <div class="right">
              <v-scale display="block">
                <div class="right-item">
                  <div class="title">
                    <span>已选权限列表</span>
                    <span class="btn" @click="resetChosenHandler">清空</span>
                  </div>
                  <div class="checked">{{ checkedIndexArr }}</div>
                </div>
              </v-scale>
            </div>
          </div>
          <div class="btn-group">
            <v-scale>
              <el-button size="small" type="primary">提交修改</el-button>
              <el-button size="small" @click="showRoleSettingDialog = false">取消</el-button>
            </v-scale>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.top {
  display: flex;
  align-items: center;
  padding: 0 0 0 1.4vw;
  width: 100%;
  height: 5vw;
  // background-color: pink;
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

/* 弹出对话框样式 */
.container {
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
  /* 权限分配区样式 */
  .choose {
    width: 100%;
    height: 20vw;
    // background: pink;
    .box {
      display: flex;
      width: 100%;
      height: 90%;
      // background: red;
      .left {
        flex: 0.8;
        height: 100%;
        overflow: hidden;
        &-item {
          background-color: var(--equip-bg-color);
          height: 270px;
          border-radius: 4px;
          overflow: hidden;
          .title {
            padding-left: 10px;
            height: 25px;
            line-height: 25px;
            background: black;
            color: white;
          }
          .tree {
            height: 245px;
            overflow: auto;
          }
        }
      }
      .right {
        flex: 1;
        height: 100%;
        margin-left: 2vw;
        overflow: hidden;
        &-item {
          background-color: var(--equip-bg-color);
          height: 270px;
          border-radius: 4px;
          overflow: hidden;
          .title {
            padding-left: 10px;
            height: 25px;
            line-height: 25px;
            background: black;
            color: white;

            .btn {
              float: right;
              margin-top: 3px;
              margin-right: 7px;
              padding: 0 3px;
              cursor: pointer;
              background-color: rgb(64, 158, 255);
              border-radius: 2px;
              font-size: 12px;
              line-height: 18px;
            }
          }
          .tree {
            height: 245px;
            overflow: auto;
          }
        }
      }
    }
    .btn-group {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 10%;
    }
  }
}
</style>
