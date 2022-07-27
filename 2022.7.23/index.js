/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.len = capacity
  this.useArr = []
  this.arr = []
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let data = -1
  this.arr.forEach((item, index) => {
    if (item.key === key) {
      this.useArr[] = this.useArr.key === undefined ? 0 : this.useArr.key++

      data = item.value
    }
  })
  console.log(data)
  return data
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let obj = {
    key: key,
    value: value,
  }
  this.arr.unshift(obj)
  this.useArr[key] = 0
  if (this.arr.length > this.len) {
    let min = this.useArr[this.arr[0].key]
    let flagIndex = this.len - 1
    this.arr.map((item, index) => {
      if (this.useArr[item] < min) {
        min = this.useArr[item]
        flagIndex = index
      } else {
        this.useArr[item] = 0
      }
    })
    this.arr.splice(flagIndex, 1)
  }
  console.log(this.arr)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2 /* 缓存容量 */)

cache.put(1, 1)
cache.put(2, 2)
cache.get(1) // 返回  1
cache.put(3, 3) // 该操作会使得密钥 2 作废
cache.get(2) // 返回 -1 (未找到)
cache.put(4, 4) // 该操作会使得密钥 1 作废
cache.get(1) // 返回 -1 (未找到)
cache.get(3) // 返回  3
cache.get(4) // 返回  4
