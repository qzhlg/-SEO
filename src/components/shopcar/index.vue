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
                                    <span>
                                    <button>-</button>
                                    <button>{{slide.num}}</button>
                                    <button>+</button>
                                    </span>
                                </p>
                        </li>
                    </ul>
                </div>
            </div>
                
        </main>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default { 
    computed:{
        ...mapState({
            listdata:store=>store.listdata
        })
    },
    mounted(){
        this.$store.dispatch('getshopdata')
    }   
}
</script>

<style>
@import url('../../common/sass/index.scss');
.head{
    height: calc(1.8rem*2);
    background: -webkit-linear-gradient(right, #FF5000 0%, #FF8400 100%);
    color: #fff;
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

</style>
