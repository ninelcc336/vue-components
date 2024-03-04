export default {
    bind(el, binding, vnode) {
        function clickHandler(event) {
            //判断点击的是否是本身，是则返回false
            vnode.context.$nextTick(() => {
                if (el.contains(event.target)) {
                    return false
                } else {
                    // 通过vnode.context 可以调用实例的属性和方法
                    // vnode.context.componentShow = 0
                    // vnode.context.Unlock()
                }
            })
        }
        el._clickOutside = clickHandler
        document.addEventListener('click', clickHandler)
    },
    unbind(el) {
        // 解除事件监听
        document.removeEventListener('click', el._clickOutside)
        delete el._clickOutside
    }

}
