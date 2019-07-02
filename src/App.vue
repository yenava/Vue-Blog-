<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>

</template>



<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'



export default {
  naem:"App",
  components:{
    HelloWorld,
    Header,
  }
}
</script>
<style >
*{
  padding:0px;
  margin:0px;
}
</style>