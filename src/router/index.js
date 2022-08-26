import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', // 首页
    component: () => import('../pages/Home/Home.vue'),
  },
  {
    path: '/test', // 首页
    component: () => import('../pages/TEST.vue'),
  },
  {
    path: '/login', // 登陆
    component: () => import('../pages/Login/Login.vue'),
  },
  {
    path: '/event-manage', // 事件管理
    component: () => import('../pages/EventManage/EventManage.vue'),
  },
  {
    path: '/equip-colony', // 设备集群
    redirect: '/equip-colony/equip-manage',
    component: () => import('../pages/EquipColony/EquipColony.vue'),
    children: [
      {
        path: 'equip-manage', // 设备集群 - 设备管理
        component: () => import('../pages/EquipColony/components/EquipManage.vue'),
      },
      {
        path: 'total-report', // 设备集群 - 设备总报表
        component: () => import('../pages/EquipColony/components/TotalReport.vue'),
      },
      {
        path: 'work-rate', // 设备集群 - 工作率-时间
        component: () => import('../pages/EquipColony/components/WorkRate.vue'),
      },
      {
        path: 'thermo-dynamic', // 设备集群 - 设备热力图
        component: () => import('../pages/EquipColony/components/ThermoDynamic.vue'),
      },
    ],
  },
  {
    path: '/camera-manage', // 摄像头管理
    component: () => import('../pages/CameraManage/CameraManage.vue'),
  },
  {
    path: '/connect-setting', // 上报配置
    component: () => import('../pages/ConnectSetting/ConnectSetting.vue'),
  },
  {
    path: '/system-seting', // 系统设置
    component: () => import('../pages/SystemSeting/SystemSeting.vue'),
  },
  {
    path: '/access-manage', // 权限管理
    redirect: '/access-manage/roles-manage',
    component: () => import('../pages/AccessManage/AccessManage.vue'),
    children: [
      {
        path: 'roles-manage', // 权限管理 - 角色管理
        component: () => import('../pages/AccessManage/components/RolesManage.vue'),
      },
      {
        path: 'users-manage', // 权限管理 - 角色管理
        component: () => import('../pages/AccessManage/components/UsersManage.vue'),
      },
    ],
  },
  {
    path: '/super-admin', // 超级管理员
    redirect: '/super-admin/base-seting',
    component: () => import('../pages/SuperAdmin/SuperAdmin.vue'),
    children: [
      {
        path: 'base-seting', // 超级管理员 - 出厂配置说明
        component: () => import('../pages/SuperAdmin/components/BaseSeting.vue'),
      },
      {
        path: 'ai-list', // 超级管理员 - AI算法对照表
        component: () => import('../pages/SuperAdmin/components/AiList.vue'),
      },
      {
        path: 'deliver-Config', // 超级管理员 - 出厂产品配置
        component: () => import('../pages/SuperAdmin/components/DeliverConfig.vue'),
      },
    ],
  },
  {
    path: '/manual', // 使用手册
    component: () => import('../pages/Manual/MyManual.vue'),
  },
  // {
  //   path: '/warn-detail',
  //   component: () => import('../pages/EventManage/components/WarnDetail.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  /* 添加一个验证token的业务逻辑 */
  /* 或是有其他什么业内的验证方法 */
  if (!localStorage.getItem('token') && to.path != '/login') {
    return { path: '/login' }
  }
})
export default router
