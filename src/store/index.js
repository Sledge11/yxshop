import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';//的导入vuex持久化插件

//指定本地存储配置
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cartList:[],//存储购物车的基本信息
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