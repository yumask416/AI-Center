export function debounce(fn, wait) {
  let timer = null
  // 返回了一个匿名函数作为事件的回调函数
  return function (...rest) {
    let context = this

    /* 如果存在定时器 */
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(context, rest)
    }, wait)
  }
}
