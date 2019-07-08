import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        listdata:[]
    },
    mutations:{
        setshopdata(state,payload){
            state.listdata=payload
            console.log(payload)
        }
    },
    actions:{
        getshopdata(){
            $axios.get('/getshopdata').then(res =>{
                store.commit("setshopdata",res.data.data)
            })
        }
    }
})
export default store