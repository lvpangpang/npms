export function A() {
  let a = 1;
  return new Promise((resolve, reject) => {
    if (a > 0) {
      resolve('哈哈')
    }
  })
}

export function B() {
  let a = 0;
  return new Promise((resolve, reject) => {
    if (a > 0) {
      resolve('哈哈')
    } else {
      reject('呜呜')
    }
  })
}