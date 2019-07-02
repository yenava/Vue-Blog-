<template>
  <div v-theme:column="'narrow'" id="show-blog">
    <h2>文章总览</h2>
    <input type="text" placeholder="搜索" v-model="search">
    
      <div class="single-blogs" v-for="(blog,index) in filteredBlogs" :key="index">
        <router-link :to="{name:'singleblog',params:{id:blog.id}}">
          <h3 v-rainbow>{{blog.title | toUpperCase}}</h3>
          <article>{{blog.body | snippet}}</article>
        </router-link>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      blogs:[],
      search:''
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(data){
      // console.log(data);
      this.blogs = data.body.slice(0,10);
      console.log(this.blogs)
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    toUpperCase(value){
      return value.toUpperCase()
    }
  },
  components: {
    HelloWorld,
  }
}

</script>

<style lang="scss">
h2{
  color:#42b983;
}
#show-blog{
  max-width: 800px;
  margin:0 auto;
}
#show-blog input{
  border: 1px solid #ccc; 
  border-radius: 3px; /*css3属性IE不支持*/
  padding-left:5px; 
  display: block;
  width:80%;
  padding:8px;
  margin:35px
}

.single-blogs{
  border: 1px #ccc;
  background-color: rgb(245, 245, 245);
  padding:20px;
  margin:20px;
  box-sizing:border-box;
  
}

.single-blogs a{
    color:#444;
    text-decoration: none;
}


</style>

