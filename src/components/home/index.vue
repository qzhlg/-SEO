<template>
    <div class="wrap">
    
       <header class="header">
          <span class="title">淘宝</span>
          <input type="text" name="" id="" class="ipt">
        </header>
      <div class="banner swiper-container">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in slidecon" :key="item.id">
               <img :src="item.imgUrl" alt="" class="img">
            </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="iconbox">
          <dl v-for="slide in icondata" :key="slide.id" class="iconlist">
            <dt>
              <img :src="slide.icon" alt="" class="iconimg">
            </dt>
            <dd v-text="slide.msg" class="msg"></dd>
              </dl> 
        </div>

      <vcontent :content="content"></vcontent>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
    </div>
    
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import vcontent from './vcontent'
export default {
    components: {
    swiper,
    swiperSlide,
    vcontent
  },
  data(){
    return{
      swiperOption: {
        autoplay:{
           disableOnInteraction:false
        },
          pagination: {
            el: '.swiper-pagination'
          },
        
        },
       slidecon:[],
       content:[],
       icondata:[
    {
        icon:"https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp",
        msg:"天猫"
    },
    {
        icon:"https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp",
        msg:"聚划算"
    },
    {
        icon:"https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp",
        msg:"天猫国际"
    },{
        icon:"https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp",
        msg:"外卖"
    },{
        icon:"https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp",
        msg:"天猫超市"
    },{
        icon:"https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp",
        msg:"充值中心"
    },{
        icon:"https://gw.alicdn.com/tfs/TB15nKhtpkoBKNjSZFEXXbrEVXa-183-144.png?getAvatar=1_.webp",
        msg:"飞猪旅行"
    },{
        icon:"https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp",
        msg:"领金币"
    },{
        icon:"https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp",
        msg:"拍卖"
    },{
        icon:"https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp",
        msg:"分类"
    }
      ],
      verdata:[
        {
          imgpic:"https://img.alicdn.com/tfs/TB1bLfqgvBNTKJjy0FdXXcPpVXa-513-339.png",
          id:1
        },
        {
          imgpic:"https://img.alicdn.com/tfs/TB1bLfqgvBNTKJjy0FdXXcPpVXa-513-339.png",
          id:2
        },
        {
          imgpic:"https://img.alicdn.com/tfs/TB1bLfqgvBNTKJjy0FdXXcPpVXa-513-339.png",
          id:3
        }
      ]
    }
  },
  mounted(){
    this.getbanner()
    this.gethomedata()
  },
  methods:{
    getbanner(){
      axios.get('/getbanner').then(res =>{
        this.slidecon=res.data.data
  
      })
    },
      gethomedata(){
        axios.get('/gethomelist').then(res =>{
      this.content=res.data.data
      
    })
  }
  }

}
</script>

<style>
.wrap{
  height: 100%;
}
.iconimg{
  width: 100%;
  height: 100%;
}
.msg{
  text-align:center;
}
  .top{
        padding: 10px;
        /* background: rgba(0, 153, 229, .7); */
        background: red;
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
