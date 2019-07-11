<template>
   <div class="detail-box">
      <header class="headed">
         <h3>新农夫品</h3>
      </header>
      <div class="box">
         <div class="banner">

         </div>
      </div>
      
   </div>
</template>

<script>
export default {  
   mounted(){
      this.getdetail()
   },
   methods:{
      getdetail(){
         console.log(this.$route.query.id)
         this.$axios.get("/getdetail?id"+this.$route.query.id).then(res =>{
            console.log(res.data.data)
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
   background: url("https://gw.alicdn.com/tfs/TB1E4eQpuuSBuNjSsplXXbe8pXa-750-625.png_760x760q75.jpg_.webp") no-repeat
}
</style>
