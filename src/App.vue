<script setup>
import MyHeader from './components/MyHeader.vue'
import MyMenu from './components/MyMenu.vue'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import { useMenuStore } from './store'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

let locale = zhCn
let menuStore = useMenuStore()

const showHeader = ref(true)
let route = useRoute()
watchEffect(() => {
  route.path == '/login' ? (showHeader.value = false) : (showHeader.value = true)
  if (route.path == '/') {
    // TODO 维持原有功能
  } else {
    // TODO
    // 让左侧保持显示
    // menuStore.isShow = true
  }
})
</script>

<template>
  <el-config-provider :locale="locale">
    <div class="app-container">
      <MyMenu />
      <MyHeader v-show="showHeader" />
      <div class="app-body">
        <router-view></router-view>
      </div>
    </div>
  </el-config-provider>
</template>

<style lang="less" scoped>
.app-container {
  background-image: url(/images/bacc7.jpg);
  background-size: 100%;
}
.app-body {
  width: 100%;
  height: calc(100vh - 5vw);
}
</style>
