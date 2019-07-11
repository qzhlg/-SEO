<template>
    <div class="wrap">
        <div class="head">
            <div class="left">
                <h1>购物车</h1>
                <h3>共4件商品</h3>
            </div>
            <div class="right">
                管理
            </div>
        </div>
        <main class="main">
            <div class="box" v-for="slide in listdata" :key="slide.id">
                <div class="topbox">
                    <input type="checkbox" name="" id="">
                    {{slide.title}}</div>
                <div class="bottombox">
                    <ul class="list">
                        <li>
                            <input type="checkbox" name="" id="">
                        </li>
                        <li>
                            <img :src="slide.imgPic" alt="" class="imgsrc">
                        </li>
                        <li>
                                <p class="des">{{slide.des}}</p>
                                <p class="bot">
                                    <span class="price">￥{{slide.price}}</span>
                                    <span class="btn">
                                    <button @click="reduce(slide.id)">-</button>
                                    <button>{{slide.num}}</button>
                                    <button @click="add(slide.id)">+</button>
                                    </span>
                             </p>
                        </li>
                    </ul>
                </div>
            </div>
                
        </main>
        <div class="foot">
            <span>
                <input type="checkbox">全选
            </span>
            <span>
                {{money}}
            </span>
             总价
            <span>
              <!-- {{total}}  总个数 -->
            </span>
        </div>
        <vfoot/>
    </div>
</template>
<script>
import vfoot from '../../container/foot'
import {mapState,mapMutations} from 'vuex'
export default { 
    components:{
        vfoot
    },
    computed:{
        ...mapState({
            listdata:store=>store.listdata,
            money:store=>store.money,
         
        })
    },
    mounted(){
        this.$store.dispatch('getshopdata')
    },
    methods:{
        reduce(id){
           let ind=this.listdata.findIndex(item =>item.id===id)
           if(this.listdata[ind].num<=0) return
                this.listdata[ind].num--
           this.$store.commit('reduce',{
               ind,
               num:this.listdata[ind].num
           })
           this.$store.commit('reckon')
         
        },
        add(id){    
            let ind=this.listdata.findIndex(item =>item.id===id)
           this.listdata[ind].num++
            this.$store.commit('add',{
                ind,
                num:this.listdata[ind].num
            })
            this.$store.commit('reckon')
        }
    },
}
</script>

<style>
@import url('../../common/sass/index.scss');
.head{
    height: calc(1.8rem*2);
    background: -webkit-linear-gradient(right, #FF5000 0%, #FF8400 100%);
    color: #fff;
    border-radius: 0 0 20px 20px;
}
.left{
    float: left;
    padding: 10px 20px;
}
h3{
    padding: 10px 0;
    font-weight: normal;
}
.right{
    float: right;
     padding: 20px;
     font-size: 15px;
}
.main{
    background: #e5e5e5;
    position: relative;
}
.box{
    height: calc(2rem*2);
    background: #fff;
    width: 90%;
    margin: 10px auto;
    border-radius: 10px;
}
.topbox{
    height: calc(.5rem*2);
    border-bottom: 1px #ccc solid;
    line-height: calc(.5rem*2);
}
.list{
    display: flex;
}
.foot{
    width: 100%;
    height: calc(.5rem*2);
    background: #ccc;
    position: absolute;
    bottom:50px;
    left: 0;
    display: flex;
}
span{
    flex: 1;
}
</style>
