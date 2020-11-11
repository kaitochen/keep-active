const _toString = Object.prototype.toString;
export function isDef(v) {
  return v !== undefined && v !== null;
}
export function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
