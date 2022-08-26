<script setup>
const props = defineProps(["editLevelVisible"])
const emits = defineEmits(["closeEditLevel"])

function close() {
    emits('closeEditLevel')
}
</script>

<template>
    <div>
        <el-dialog :model-value="editLevelVisible" @close="close" title="修改告警等级页" width="40%">

        </el-dialog>
    </div>
</template>

<style lang="less" scoped>
:deep(.el-dialog) {
    --el-dialog-bg-color: #0b3d51;

    .el-dialog__header {
        width: 100%;
        background-color: #041e2b;

        .el-dialog__title {
            color: #fff;
            font-size: 0.8vw;
        }
    }
}
</style>