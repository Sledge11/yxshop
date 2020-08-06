import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';


//指定本地存储数据
const vuexLocal = new VuexPersistence({
    storage:window.localStorage
})


Vue.use(Vuex);

export default new Vuex.Store({
    state:{

        cartList:[],
    },
    mutations:{

        addCart(state,payload){
            //追加信息
            state.cartList = payload;
        },
    },
    getters:{
        // 计算购物车商品的总数量
        totalNums(state){
            let nums = 0;
            state.cartList.forEach(item=>{
                nums += item.nums;
            })

            return nums;
        }
    },
    actions:{
        
    },
    plugins: [vuexLocal.plugin]
});