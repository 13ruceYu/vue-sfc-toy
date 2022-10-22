import { exprPool } from './pools'

export  function render (vm) {
  exprPool.forEach((info, node) => {
    _render(vm, info, node)
  })  
}

export function update (vm, key) {
  exprPool.forEach((info, node) => {
    if (info.key === key) {
      _render(vm, info, node)
    }
  })
}

function _render (vm, info, node) {
  const { expression } = info;
  const r = new Function('vm', 'node', `
    with(vm) {
      node.textContent = ${expression}
    }
  `)

  r(vm, node)
}