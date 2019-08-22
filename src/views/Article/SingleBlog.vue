<template>
    <div id="single-blog">
        
        <el-row>
            <h1>{{blog.articlename}}</h1>
            <el-col :span="6" :offset="18">
                <el-button id="del-button" @click.prevent="post" type="primary" icon="el-icon-delete">删除
                </el-button>
                <router-link :to="{name:'Editblog'}" ><el-button id="edit-button" type="primary" icon="el-icon-edit">修改</el-button></router-link>
            </el-col>
        </el-row>
        <mavon-editor :value="mdd.value"
        :subfield = "mdd.subfield"
        :defaultOpen = "mdd.defaultOpen"
        :editable="mdd.editable"
        :scrollStyle="mdd.scrollStyle"
        :toolbars={navigation:true}
        ></mavon-editor>
    </div>
</template>

<script>
// import marked from 'marked'

export default {
    name:"SingleBlog",
    data(){
        return {
            id:this.$route.params.id,
            blog:{},
            dynamicTags:["Vue","Node.js","python"],
            inputVisible: false,
            inputValue: ''
        }
    },
    created(){
        this.$axios.get('articles/single?id='+ this.id)
        .then((res)=>{
            this.blog = res.data[0];
            // this.blog.content = marked(this.blog.content)
        })
    },
    computed: {
        mdd () {
            console.log(this.blog.content)
            let data1 = {
                value:this.blog.content,
                subfield: false,// 单双栏模式
                defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                editable: false,
                toolbarsFlag: false,
                scrollStyle: true
            }
            return data1
        }
    },
    methods:{
        post(){
            this.$axios.post('articles/del',{
                id:this.blog._id,
            }).then((res)=>{
                this.$router.push({path:"/"})
            })
        }
    }
}
</script>

<style lang="scss" scoped>

#single-blog{
    padding: 20px;
    margin: 0 auto;
    max-width: 800px;
    h1{
        color:teal;
        float: left;
    }
}


</style>
