<template>
   <div class="detail-box">
      <header class="headed">
         <h3>新农夫品</h3>
      </header>
      <div class="box">
         <div class="banner">
         <swiper :options="swiperOption" class="contain">
            <swiper-slide v-for="list in banner" :key="list.id">
              <img :src="list" alt="" class="ban">
            </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
         </div>
      </div>

   </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {  
components:{
swiper, swiperSlide
},
data(){
   return {
      banner:[],
        swiperOption: {
        autoplay:{
           disableOnInteraction:false
        },
          pagination: {
            el: '.swiper-pagination'
          },
        
        },
   }
},
   mounted(){
      this.getdetail()
   },
   methods:{
      getdetail(){
         console.log(this.$route.query.id)
         this.$axios.get("/getdetail?id="+this.$route.query.id).then(res =>{
           this.banner=res.data.data[0].picImg
            console.log(res.data.data[0].picImg)
         })
      }
   }
}
</script>

<style>
.detail-box{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
}
.headed{
   height: calc(.4rem*2);
}
h3{
   text-align: center;
   line-height: calc(.4rem*2)
}
.box{
   flex: 1;
   overflow: auto;
}
.banner{
   height: calc(2rem*2);
   width: 100%;
   background: url("https://gw.alicdn.com/tfs/TB1E4eQpuuSBuNjSsplXXbe8pXa-750-625.png_760x760q75.jpg_.webp") no-repeat
}
.contain{
   width: 80%;
   height: 80%;
   margin: auto;
}
.ban{
   width: 100%;
   height: 100%;
   /* margin: 20px; */
}
</style>
