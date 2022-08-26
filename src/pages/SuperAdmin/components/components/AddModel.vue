<script setup>
import { reactive } from 'vue'

const props = defineProps(["addModelVisible"]);
const emits = defineEmits(["closeAddModel"])

function close() {
    emits('closeAddModel')
}


const role = reactive({
    name: ''
})

const SubmitHandle = () => {
}
</script>

<template>
    <div>
        <el-dialog :model-value="addModelVisible" @close="close" title="增加新角色" width="30%">
            <div class="header">
                <el-divider direction="vertical"></el-divider>
                <span>填写表单新增角色</span>
            </div>
            <div class="main">
                <el-form :model="role">
                    <el-form-item label="角色名：">
                        <el-input v-model="role.name" />
                    </el-form-item>
                </el-form>
            </div>
            <div class="footer">
                <el-button type="primary" @click="SubmitHandle">确认新增</el-button>
                <el-button @click="addModelVisible = false">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="less" scoped>
:deep(.el-dialog) {
    // height: ;
    // width: 30%;
    --el-dialog-bg-color: #0b3d51;
    color: white;
    font-size: 0.8vw;

    .el-dialog__header {
        width: 100%;
        padding: 1vw;
        background-color: #041e2b;

        .el-dialog__title {
            color: #fff;
            font-size: 0.8vw;
        }

        .el-dialog__headerbtn {
            top: 0;
        }
    }

    .header {
        height: 3vw;
        color: white;
        font-size: 0.8vw;
    }

    .main {
        height: 3vw;
        // width: 100%;
        display: flex;
        align-items: center;
        // background-color: #fff;
        text-align: center;

        .el-form-item__label {
            padding-left: 1vw;
            color: #fff;
            font-size: 0.8vw;
        }
    }

    .footer {
        display: flex;
        justify-content: center;
        margin-top: 1vw;
    }
}
</style>