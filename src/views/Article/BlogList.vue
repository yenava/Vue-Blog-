<template>
<div>
<div v-theme:column="'narrow'" id="show-blog">
    
    <h2>文章总览</h2>
    <el-row>
      <el-col :span="22"><input type="text" placeholder="搜索" v-model="search"></el-col>
    </el-row>
      <el-card class="single-blogs" v-for="(blog,index) in filteredBlogs" :key="index">
        <router-link :to="{name:'Singleblog',params:{id:blog._id}}" tag="div">
          <h2 >{{blog.articlename | toUpperCase}}</h2>
          <div v-html="mContent(blog.content)"></div>
        </router-link>
        <el-tag
          :key="tag"
          v-for="tag in blog.classify">
          {{tag}}
          </el-tag>
      </el-card>
  </div>
</div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  name: 'home',
  data(){
    return{
      blogs:[],
      search:'',
      content:"",
    }
  },
  //http://120.78.173.109:3000/articles/list
  //https://jsonplaceholder.typicode.com/posts
  created(){
    // this.$http.get('http://120.78.173.109:3000/articles/list')
    this.$axios.get('articles/list')
    .then((res)=>{
      this.blogs = res.data.slice(0,20);
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.articlename.match(this.search);
      })
    },
  },
  filters:{
    toUpperCase(value){
      return value.toUpperCase()
    }
  },
  methods:{
    mContent(val){
      var valued =  val.slice(0,100) + " ..."
      return marked(valued,{ sanitize: true })
    }
  }
}

</script>

<style lang="scss">
h2{
  color:teal;
}
#show-blog{
  max-width: 800px;
  margin:0 auto;
}
#show-blog input{
  border: 1px solid #ccc; 
  border-radius: 3px; /*css3属性IE不支持*/
  display: block;
  width:95%;
  padding:8px;
  margin:25px
}

.single-blogs{
  border: 1px #ccc;
  background-color: rgb(245, 245, 245);
  padding:20px;
  margin:20px;
  box-sizing:border-box;
  h2{
    margin-bottom: 1em;
  }
}

.single-blogs div{
    color:#444;
}
.image{
  width:100%;
}
a{
  color:#ccc;
  text-decoration:none
}
.el-tag{
  margin-top: 20px;
}
</style>

