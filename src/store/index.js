import Vue from 'vue'
import Vuex from 'vuex'
import {
  _initData
} from '../api/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: false,
  nameSpace: true,
  state: {
    listdata: [],
    total: 0,
    money: 0,
    checkAll:false
  },
  mutations: {
    setshopdata(state, payload) {
      state.listdata = payload
    },
    reduce(state, payload) {
      let {
        ind,
        num
      } = payload
      let data = [...state.listdata]
    },
    add(state, payload) {
      let {
        ind,
        num
      } = payload
    },
    reckon(state) {
      let money = state.listdata.reduce((pre, cur) => {
        return pre += cur.num * cur.price
      }, 0)
      let total=state.listdata.map(item =>{
          console.log(item.num)
         return total+=item.num*1
      })
      state.money = money
      state.total = total
      console.log(total)
    },
   
    setcheckall(state,payload){
        state.checkAll=payload
    }
  },
  //异步请求
  actions: {
    async getshopdata({
      commit
    }) {
      const result = await _initData()
      commit('setshopdata', result.data.data)
    }
  }
})
export default store
