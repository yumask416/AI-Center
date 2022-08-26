<script setup>

</script>

<template>
    <div class="box">
        <div class="box-top">
            <h3>艾格威盒子出厂配置说明</h3>
            <p>1、产品选择：选择需要出厂的产品</p>
            <p>2、配置模型：根据客户想要的算法需求配置合适的AI模型（参照AI算法对照表）</p>
            <p>3、配置算法：从已选择的模型的已有算法中选择该产品需要的算法配置</p>
            <p>4、配置软件基本信息如：软件大标题，软件基础管理员账户等等</p>
        </div>
        <div class="box-bottom">
            <el-steps :active="3" align-center>
                <el-step title="产品选择" description="在这个步骤中选择需要出厂的产品"></el-step>
                <el-step title="配置模型" description="在这个步骤中根据客户想要的算法需求配置合适的AI模型"></el-step>
                <el-step title="配置算法" description="在这个步骤中从已选择的模型的已有算法中选择该产品需要的算法配置"></el-step>
                <el-step title="配置基本信息" description="在这个步骤中去配置该产品软件所有的基本信息，如：软件大标题、软件基础管理员账户等"></el-step>
            </el-steps>
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.box-top {
    width: 100%;
    height: 50%;
    padding-left: 6vw;
    color: #fff;
    h3 {
        margin: 2.5vw 0;
    }

    p {
        margin-bottom: 2vw;
        font-size: 0.9vw;
    }
}

.box-bottom {
    // height: 20vw;
    height: 50%;

    .el-steps {
        width: 70%;
        margin: 2vw auto 0 auto;
        color: white;

        :deep(.el-step__title.is-process) {
            color: #fff !important;
        }

        :deep(.el-step__description.is-process) {
            color: #fff !important;
        }
    }
}
</style>