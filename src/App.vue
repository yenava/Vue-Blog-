<template>
  <div id="app">
    <Header :loginstatus="loginstatus" :username="username"></Header>
    <router-view @logined="logined"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Login from './views/user/Login.vue'

export default {
  name: 'app',
  data(){
    return{
      loginstatus:sessionStorage.getItem('loginstatus'),
      username:sessionStorage.getItem('username')
    }
  },
  components: {
    Header,
    Login,
  },
  methods:{
    logined(){
      this.loginstatus = true;
      this.username = sessionStorage.getItem('username')
      console.log(this.loginstatus)
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{
   text-decoration:none;
   color:teal
 }
body{
  --themeColor:#teal;
}
</style>
