<script setup>
import { ref, watchEffect } from 'vue'
import { useMenuStore } from '../store'
import { useRoute, useRouter } from 'vue-router'
// import avatar_img from '../../public/images/PPT/user.png'

let menuStore = useMenuStore()
let route = useRoute()
let router = useRouter()
let avatar = ref('/images/PPT/user.png')
const clickHandler = (path, name) => {
  router.push(path)
  menuStore.isShow = false
  menuStore.menuName = name
}
let currentTime = ref('')

let menuList = [
  {
    title: '功能与服务',
    item: [
      {
        name: '统计大屏',
        icon: 'data-line',
        path: '/',
      },
      {
        name: '事件管理',
        icon: 'el-icon-document-copy',
        path: '/event-manage',
      },
    ],
  },
  {
    title: '配置与管理',
    item: [
      {
        name: '设备集群',
        icon: 'el-icon-s-order',
        path: '/equip-colony',
      },
      {
        name: '摄像头管理',
        icon: 'el-icon-camera-solid',
        path: '/camera-manage',
      },
      {
        name: '上报配置',
        icon: 'el-icon-s-promotion',
        path: '/connect-setting',
      },
      {
        name: '系统设置',
        icon: 'el-icon-s-tools',
        path: '/system-seting',
      },
      {
        name: '权限管理',
        icon: 'el-icon-set-up',
        path: '/access-manage',
      },
      {
        name: '超级管理员',
        icon: 'el-icon-lock',
        path: '/super-admin',
      },
    ],
  },
  {
    title: '使用与说明',
    item: [
      {
        name: '使用手册',
        icon: 'el-icon-info',
        path: '/manual',
      },
      {
        name: '操作视频',
        icon: 'el-icon-video-camera-solid',
        path: '',
      },
    ],
  },
]

/* 开启和关闭时钟 */
/* 不可以用onUnmounted */
let clock = null
let getTime = () => {
  currentTime.value = new Date().toLocaleString()
  clock = setTimeout(getTime, 1000)
}
watchEffect(() => {
  menuStore.isShow ? getTime() : clearTimeout(clock)

  // 动态更新Header中的当前菜单名
  // 刷新页面后显示正确的当前菜单名
  let topPath = '/' + route.path.split('/')[1]
  menuStore.menuName = menuList
    .find(item => item.item.some(item => item.path === topPath))
    ?.item.find(item => item.path === topPath).name
})
</script>

<template>
  <div class="area">
    <el-drawer
      v-model="menuStore.isShow"
      title="I am the title"
      direction="ltr"
      :with-header="false"
    >
      <!-- 2 -->
      <div class="menu">
        <div class="user-box">
          <img :src="avatar" alt />
          <div class="msg">
            <span>您好，管理员</span>
            <span>{{ currentTime || '2022-08-11 16:16:20' }}</span>
          </div>
        </div>
        <div class="menu-list">
          <div class="submenu" v-for="(item, index) in menuList" :key="index">
            <span>{{ item.title }}：</span>
            <br />
            <div class="list-item-group">
              <div
                class="item"
                v-for="(subitem, subindex) in item.item"
                :key="subindex"
                @click="clickHandler(subitem.path, subitem.name)"
              >
                <el-icon style="transform: translateY(0.07vw)"></el-icon>
                &nbsp;{{ subitem.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 2 -->
    </el-drawer>
  </div>
</template>

<style lang="less" scoped>
.area {
  :deep(.el-drawer) {
    width: 28vw !important;
  }
  :deep(.el-drawer__body) {
    // width: 100%;
    background-color: var(--menu-bg-color);
  }
}
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .user-box {
    display: flex;
    width: 100%;
    height: 2.8vw;
    // background-color: pink;
    img {
      width: 2.8vw;
      height: 2.8vw;
    }
    .msg {
      height: 2.8vw;
      padding-left: 1vw;
      color: white;
      span:first-child {
        display: block;
        padding-bottom: 0.1vw;
        font-size: 1.1vw;
        line-height: 1.5vw;
      }
      span:last-child {
        font-size: 0.8vw;
      }
    }
  }
  &-list {
    flex: 1;
    width: 100%;
    height: 0;
    overflow-y: auto;
    // background-color: skyblue;
    &::-webkit-scrollbar {
      width: 0.15vw;
      height: 0.15vw;
      background-color: #041e2b;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--card-title-color);
    }
    .submenu {
      padding-top: 2vw;
      // padding-bottom: 1vw;
      // background-color: white;
      span {
        display: inline-block;
        padding-bottom: 0.5vw;
        font-size: 1.1vw;
        color: var(--card-title-color);
        font-weight: 600;
      }
      .list-item-group {
        padding-left: 1vw;
        .item {
          margin-top: 0.5vw;
          padding-left: 0.8vw;
          height: 2.5vw;
          background-color: var(--menu-bg-shadow-color);
          color: white;
          line-height: 2.5vw;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
