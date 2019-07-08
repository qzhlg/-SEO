import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        listdata:[],
        total:0,
        money:0
    },
    mutations:{
        setshopdata(state,payload){
            state.listdata=payload
        },
        reduce(state,payload){
            // let {ind,num}=payload
            let data=[...state.listdata]
            // state.money=payload
        },
        add(state,payload){
            let {ind,num}=payload
            
        },
        reckon(state,payload){
           let money=state.listdata.reduce((pre,cur)=>{
                return pre+=cur.num*cur.price
            },0)
            state.money=payload
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