export default {
    addCount(state,payload){
        payload.count += 1
    },
    addToCart(state,payload){
        payload.count = 1
        payload.checked = true
        state.cartList.push(payload)
    },
    checkAll(state,payload){
        if(payload){
            state.cartList.forEach(n => n.checked=false)
        }else {
            state.cartList.forEach(n => n.checked=true)
        }
    }
}