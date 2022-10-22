import {update} from './render'

export default function (vm, data) {
  vm.$data = data();

  for (const key in vm.$data) {
    if (Object.hasOwnProperty.call(vm.$data, key)) {

      Object.defineProperty(vm, key, {
        get () {
          return vm.$data[key]
        },
        set (newVal) {
          vm.$data[key] = newVal
          update(vm, key)
        }
      })
      
    }
  }
}