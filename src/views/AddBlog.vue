<template>
    
  <div id="add-blog">
      <form action="" v-if="!submited">
          <!-- 添加文章 -->
          <h2>写文章</h2>
          <label>文章标题</label>
          
          <input type="text" v-model="blog.title" required><br>
          <label>内容</label><br>
          <textarea id="content" cols="40" rows="10" v-model="blog.content"></textarea>
          
          <!-- 文章分类   -->
        <div id="classify">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.classify">
            <label>Node.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.classify">
            <label>React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.classify">
        </div>
        <!-- 选择作者 -->
        <label>作者</label>
        <select v-model="blog.author">
            <option v-for="(author,index) in authors" :key="index">
                {{author}}
            </option>
        </select>
      </form>
      <button @click.prevent="post">添加文章</button>
      <!-- 内容展示 -->
      <div id="preview">
          <h2>文章预览</h2>
        <div id="dis-title">
            <h3>{{blog.title}}</h3>
        </div>
        
        <div id="dis-content">
            <p>{{blog.content}}</p>
        </div>
        <p>文章分类:</p>
        <ul v-for="(item,index) in blog.classify" :key="index">
            <li>{{item}}</li>
        </ul>
        <p>作者：{{blog.author}}</p>
      </div>
      
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
export default {
  data(){
      return{
          blog:{
            title:"",
            content:"",
            classify:[],
            author:""
          },
          authors:["TOM","Jerry"],
          submited:false
      }
  },
  components:{
      Header
  },
  methods:{
      post(){
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              title : this.blog.title,
              body : this.blog.content,
              userId : 1
          }).then(function(data){
              console.log(data)
          })
          
          this.submited = true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin:20px;
    max-width: 600px;
    padding:20px;
    margin:0 auto;
    max-width: 800px;
}
h2{
    color:#42b983;
    margin-bottom: 40px;
}

label{
    display:block;
    margin: 20px;
}
input[type="text"],textarea,select{
    border: 1px solid #ccc; 
    border-radius: 3px; /*css3属性IE不支持*/
    padding-left:5px; 
    display: block;
    width:100%;
    padding:8px;
}

#classify label{
    display:inline-block;
    margin-top:0;
}
#classify input{
    margin-left: 10px;
    display: inline-block;
}
button{
    display: block;
    margin:20px 0;
    background: #42b983;
    color:#fff;
    border:0;
    padding:14px;
    border-radius:4px;
    font-size:18;
    cursor:pointer;
}
#preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}
</style>
