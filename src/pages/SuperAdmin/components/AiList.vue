<script setup>
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import AddModel from './components/AddModel.vue'

/* 新增模型 */
let addModelVisible = ref(false)

function openAddModel() {
    addModelVisible.value = true
}

function closeAddModel() {
    addModelVisible.value = false
}

/* 表格数据 */
const tableData = [
    {
        id: 0,
        clan: "A",
        code: "A1",
        func: "人数统计",
        efunc: "person_cout",
        state: "统计划定区域内人数"
    },
    {
        id: 1,
        clan: "A",
        code: "A2",
        func: "危险区域",
        efunc: "person_danger_zone",
        state: "划定区域出现人员"
    },
    {
        id: 2,
        clan: "A",
        code: "A3",
        func: "爬围墙识别",
        efunc: "person_line",
        state: "翻越划定的拌线"
    },
    {
        id: 3,
        clan: "A",
        code: "A4",
        func: "人头统计",
        efunc: "head_cout",
        state: "统计划定区域内人头数量"
    },
    {
        id: 4,
        clan: "A",
        code: "A5",
        func: "在岗识别",
        efunc: "head_duty",
        state: "划定时间和区域内，每分钟检测一次是否有人员"
    },
    {
        id: 5,
        clan: "A",
        code: "A6",
        func: "摔倒识别",
        efunc: "fall",
        state: "划定区域内，出现摔倒人员"
    },
    {
        id: 6,
        clan: "A",
        code: "A7",
        func: "求救识别",
        efunc: "fall",
        state: "划定区域内，出现求救人员"
    },
    {
        id: 7,
        clan: "B",
        code: "B1",
        func: "车辆计数",
        efunc: "car_cout",
        state: "统计划定区域车辆通过的数量"
    },
    {
        id: 7,
        clan: "B",
        code: "B2",
        func: "车辆违停",
        efunc: "car_stop",
        state: "划定区域内，车辆停止超过设定时长"
    },
    {
        id: 8,
        clan: "B",
        code: "B3",
        func: "公交车识别",
        efunc: "bus",
        state: ""
    },
    {
        id: 9,
        clan: "B",
        code: "B4",
        func: "卡车识别",
        efunc: "truck",
        state: ""
    },

]


// 分页
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const currentPage = ref(1)
const pageSize = ref(10)

function handleSizeChange() {
    console.log(`${val} items per page`);
}
function handleCurrentChange(val) {
    console.log(`current page: ${val}`);
}

/* 表格样式 */
let tableHeaderColor = {
    // boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: 'var(--equip-bg-color)',
    borderBottom: '1px solid #3dbaf1',
    borderTop: '1px solid #3dbaf1',
    color: '#fff',
}
let tableRowStyle = {
    // boxSizing: 'border-box',
    padding: '0',
    fontSize: '0.8vw',
    textAlign: 'center',
    backgroundColor: 'var(--equip-bg-color)',
    borderBottom: '1px solid #3dbaf1',
    color: '#fff',
}
</script>

<template>
    <div class="box">
        <!-- 按钮 -->
        <div class="header">
            <el-button type="primary" @click="openAddModel">+ 新增模型</el-button>
        </div>
        <!-- 表格 -->
        <div class="main">
            <el-table :data="tableData" style="height: 100%" :cell-style="tableRowStyle"
                :header-cell-style="tableHeaderColor">
                <el-table-column prop="id" label="模型ID" align="center" width="120" show-overflow-tooltip />
                <el-table-column prop="clan" label="模型(族)" align="center" width="120" show-overflow-tooltip />
                <el-table-column prop="code" label="算法代号" align="center" width="120" show-overflow-tooltip />
                <el-table-column prop="func" label="功能" align="center" show-overflow-tooltip />
                <el-table-column prop="efunc" label="function" align="center" show-overflow-tooltip />
                <el-table-column prop="state" label="说明" align="center" show-overflow-tooltip />
                <el-table-column label="操作" align="center">
                    <template class="btn" #default>
                        <el-button link type="primary" size="small">
                            <el-icon>
                                <Edit />
                            </el-icon>
                            修改名称
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div class="pagination-box">
            <el-pagination :small="small" :disabled="disabled" :background="background"
                layout="total,prev,pager,next,jumper" :total="40" @size-change="handleSizeChange"
                v-model:currentPage="currentPage" v-model:page-size="pageSize" @current-change="handleCurrentChange" />
        </div>
        <AddModel :addModelVisible="addModelVisible" @closeAddModel="closeAddModel" />
    </div>
</template>

<style lang="less" scoped>
.box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    // position: relative;

    /* 按钮 */
    .header {
        height: 6vw;
        width: 100%;
        padding-left: 1vw;
        display: flex;
        align-items: center;
    }

    /* 表格 */
    .main {
        height: cala(100% - 8.5vw);
        width: 98%;
        margin: 0 auto;

        :deep(.el-table) {
            --el-table-border-color: none;
            --el-table-bg-color: var(--equip-bg-color);
        }

        :deep(.el-scrollbar__view) {
            height: 100%;
        }

        :deep(.el-table__body) {
            height: 100%;
        }

        :deep(.el-table__inner-wrapper::before) {
            height: 0;
        }

        .btn {
            color: #3dbaf1;
            background-color: var(--equip-bg-color);
        }
    }

    /* 分页器 */
    .pagination-box {
        height: 3.5vw;
        // background-color: #FFF;
        overflow: hidden;
        position: absolute;
        bottom: 1vw;
        right: 3vw;
        color: #fff;

        .el-pagination {
            color: #fff;
        }

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

        :deep(.el-pagination .btn-prev) {
            background-color: transparent !important;
            color: #fff !important;
        }

        :deep(.el-pagination .btn-next) {
            background-color: transparent !important;
            color: #fff !important;
        }

        :deep(.el-pager li) {
            background: none !important;
            // color: #fff !important;
        }

    }

}
</style>