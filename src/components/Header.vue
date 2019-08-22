<template>
    <el-menu :default-active="$route.path"
    class="el-menu-demo" mode="horizontal"
    background-color="teal" 
    text-color="#fff"
    active-text-color="#a8e063"
    router>
      <el-menu-item index="">
        <h1>烟灰的博客</h1>
      </el-menu-item>
      <el-menu-item index="/bloglist">
        首页
      </el-menu-item>
      <el-menu-item index="/addblog">
        写博客
      </el-menu-item>
      <el-menu-item index="/works">
        作品集
      </el-menu-item>
      <el-menu-item index="/Login" v-if="!loginstatus">
          注册/登陆
      </el-menu-item>
      <el-menu-item index="/logined" v-if="loginstatus">
          用户：{{username}}
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  props:['loginstatus','username'],
}
</script>


<style lang="scss" scoped>
body{
  margin:0;
  padding:0;
}
h1{
  color:#fff
}
a{
  color: #fff
}
@media screen and (max-width: 600px){

}

</style>
