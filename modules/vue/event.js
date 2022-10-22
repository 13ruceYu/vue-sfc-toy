import { eventPool } from './pools'

export default function (vm) {
  for (const [node, info] of eventPool) {
    const { type, handler } = info;
    vm[handler.name] = handler;
    node.addEventListener(type, vm[handler.name], false)
  }
}