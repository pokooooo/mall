import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
    //用组件构造器创造toast组件对象
    const con = Vue.extend(Toast)
    const toast = new con()
    //将组件对象挂载在一个元素上
    toast.$mount(document.createElement('div'))
    //toast.$el就等于div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj