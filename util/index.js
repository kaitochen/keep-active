const _toString = Object.prototype.toString;
export const isDef = (v) => {
  return v !== undefined && v !== null;
};
export const isRegExp = (v) => {
  return _toString.call(v) === "[object RegExp]";
};
export const remove = (arr, item) => {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
};
