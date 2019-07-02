<template>
  <nav id="navbar">
    <a href="#" id="title">烟灰的博客</a>
      <ul id="nav-list">
        <li>
          <router-link to="/bloglist">
            博客清单
          </router-link>
        </li>
        <li>
          <router-link to="/addblog">
            添加博客
          </router-link>
        </li>
      </ul>
  </nav>
</template>

<style lang="scss" scoped>
body{
  margin:0;
  padding:0;
}
nav {
  height: 1.5em;
  padding: 20px 200px;
  background:#ededed;
  display: block;
  top:0;
  a{
    font-weight: bold;
    color: #2c3e50;
  }
  #title{
    font-size:1.5em;
  }
  #nav-list{
    list-style-type: none;
    float:right;
    height:100%;
    li{
      display: block;
      float:left;
      a {
        font-weight: bold;
        margin:0 10px;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
@media screen and (max-width: 600px){

}

</style>
