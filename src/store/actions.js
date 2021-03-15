export default {
    addToCart(content,payload){
        return new Promise((resolve,reject) => {
            let oldGood = null
            for(let item of content.state.cartList){
                if(payload.iid === item.iid)
                    oldGood = item
            }
            if(oldGood){
                content.commit('addCount',oldGood)
                resolve('商品数量+1')
            }else{
                content.commit('addToCart',payload)
                resolve('添加成功')
            }
        })
    }
}