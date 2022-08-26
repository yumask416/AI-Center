export function throttle(fn, delay) {
  let preTime = Date.now()
  return function (...rest) {
    let context = this
    let nowTime = Date.now()
    if (nowTime - preTime >= delay) {
      preTime = Date.now()
      return fn.apply(context, rest)
    }
  }
}
