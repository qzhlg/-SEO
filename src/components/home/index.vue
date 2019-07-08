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
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
    components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
       slidecon:[],
    }
  },
  mounted(){
    this.getbanner()
  },
  methods:{
    getbanner(){
      axios.get('/getbanner').then(res =>{
        this.slidecon=res.data.data
        console.log(res.data.data)
      })
    }
  }
}
</script>

<style>

</style>
