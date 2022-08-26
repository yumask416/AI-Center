import $axios from './axios'
import $ws from './websocket'

/* http请求 */
/* 登录 */
export const login = data => $axios.post('/user/login', data)
export const getCameraList = data => $axios.get('/camera/list', { params: data })
export const getAuthorityList = data => $axios.get('/authority/list', { params: data })

/* websocket请求 */
/**
 * 在vue文件中的应用示例
 * import { wsTest } from '../api/api'
 * let ws = wsTest.start(callback)
 * setTimeout(() => {
 *   wsTest.end(ws)
 * }, 6000)
 */

let { startWs, endWs } = $ws()
export const wsTest = {
  start: (callback, url = 'ws://10.10.10.119:10225/api/v1/event/ws') => startWs(url, callback),
  end: ws => endWs(ws),
}
