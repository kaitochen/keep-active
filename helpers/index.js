import { isDef } from "../util";

export function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
export function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
