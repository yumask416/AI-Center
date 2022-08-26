import { defineStore } from 'pinia'

export const useUserStore = defineStore('USER', {
  state: () => {
    return {
      userInfo: {
        userId: -1,
        userName: 'userName',
        nickName: 'nickName',
      },
    }
  },
  // 修饰一些值
  getters: {},
  // 做一些同步或异步，提交state
  actions: {},
})

export const useMenuStore = defineStore('MENU', {
  state: () => {
    return {
      isShow: false,
      menuName: '',
    }
  },
  getters: {},
  actions: {},
})

export const useGlobalStore = defineStore('GLOBAL', {
  state: () => {
    return {
      innerWidth: 1,
    }
  },
  getters: {
    // getInnerWidth: state => (state.innerWidth = window.innerWidth),
  },
  actions: {},
})
