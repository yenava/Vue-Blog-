<template>

<div id="add-blog">
    <div id="write-article">
        <form action="" v-if="!submited">
            <!-- 添加文章 -->
            <h2>编辑</h2>
            <label>文章标题</label>

            <input type="text" v-model="blog.articlename" required><br>
            <label>编辑的你的内容</label><br>
            <mavon-editor ref=md id="editor" v-model="blog.content" :toolbars="toolbars"/>
            <!--              <textarea id="content" cols="40" rows="10" v-model="blog.content"></textarea>-->

            <!-- 文章分类   -->
            <div id="classify">
                <el-tag
                :key="tag"
                v-for="tag in blog.classify"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
                </el-tag>
                <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">
                + New Tag
                </el-button>
            </div>


            <!-- 选择作者 -->
            <label>作者</label>
            <select v-model="blog.author">
                <option v-for="(author,index) in authors" :key="index">
                    {{author}}
                </option>
            </select>
        </form>
        <el-button @click.prevent="post" type="primary">修改</el-button>
    </div>

    <!-- 内容展示 -->
    <div id="preview" v-if="submited">
        <h2>文章预览</h2>
        <div id="dis-title">
            <h3>标题:{{blog.articlename}}</h3>
        </div>

        <div id="dis-content" v-html="mContent(blog.content)">
            
        </div>
        <p>作者：{{blog.author}}</p>
        <p>文章分类:</p>
        <ul v-for="(item,index) in blog.classify" :key="index">
            <li>{{item}}</li>
        </ul>
    </div>
</div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import marked from 'marked'
    export default {
        data(){
            return{
                id:this.$route.params.id,
                blog:{
                    articlename:"",
                    content:"",
                    author:"",
                    classify:[]
                },
                authors:["TOM","Jerry"],
                submited:false,
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    help: true, // 帮助
                    code: true, // code
                    subfield: true, // 是否需要分栏
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    /* 1.3.5 */
                    undo: true, // 上一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true // 导航目录
                }
            }
        },
        methods:{
            post(){
                this.$axios.post('articles/update',{
                    id:this.id,
                    articlename : this.blog.articlename,
                    content : this.blog.content,
                    classify:this.blog.classify,
                    author : this.blog.author,
                }).then((res)=>{
                    this.$alert("文章修改成功")
                })
                this.submited = true
            },
            mContent(val){
                return marked(val)
            },
            handleClose(tag){
                this.blog.classify.splice(this.blog.classify.indexOf(tag),1)
            },
            showInput(){
                this.inputVisible = true;
                this.$nextTick(()=>{// 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
                    this.$refs.saveTagInput.$refs.input.focus();
                })
            },
            handleInputConfirm(){
                let inputValue = this.inputValue;
                if(inputValue){
                    this.blog.classify.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        },
        created(){
            console.log("run")
            this.$axios.get('articles/single?id='+ this.id)
                .then((res)=>{
                    this.blog = res.data[0];
                    // this.blog.content = marked(this.blog.content)
                })
        },
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
        color: teal;
    }
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin:0 auto;
        max-width: 1000px;
        padding:20px;
    }
    #write-article{
        width:100%;
    }

    #editor{
        height:500px
    }

    h2{
        color:teal;
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
        margin-top:30px;
    }
    #classify input{
        margin-left: 5px;
        display: inline-block;
    }
    button{
        margin:20px;
    }
    #preview{
        max-width:600px;
        margin:0 auto;
        h2{
            margin-top:100px;
        }
        h3{
            margin:20px;
        }
        p{
            margin:20px
        }
    }
    .el-tag{
    margin-top:20px;
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
