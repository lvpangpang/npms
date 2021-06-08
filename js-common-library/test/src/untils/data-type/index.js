export function isArr(obj) {
  return Array.isArray(obj)
}

export function isFun(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}