<template>
<div class="con">
    <dl v-for="list in content" :key="list.id" class="contented">
      <dt>
        <router-link :to="{
            path:'/home/detail',
            query:{
                id:list.id
            }
        }"><img :src="list.img" alt="" class="pic"></router-link>
      </dt>
      <dd v-html="list.title"></dd>
      <dd v-html="list.des"></dd>
    </dl>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        content:{
            type:Array
        }
    }
}
</script>

<style>
.con{
    width: 95%;
    height: 100%;
    margin:10px auto;
}
.contented{
    width: 25%;
    float: left;
    height: calc(1.5rem*2);
}
.pic{
    width: 80%;
    height: 80%;
}
</style>
