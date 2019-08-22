<template>
<div class="logined">
<el-card class="logined">
    <el-tabs>
        <el-tab-pane label="用户信息">
            <h3>{{user.username}}</h3>
            <div class="add-picture" @click="addPicture()">
                <i class="el-icon-plus"></i>
            </div>
        </el-tab-pane>
        <el-tab-pane label="我的文章">
            文章列表
        </el-tab-pane>
    </el-tabs>
    
</el-card>
</div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                username:sessionStorage.getItem('username'),
            }
        }
    },
    methods:{
        addPicture(){
            
            this.$axios.post('/users/addPicture',{
                picture
            })
        }
    }
    // created(){
    //     this.user.username=
    // }
}
</script>

<style scoped>
.logined{
    margin: 0 auto;
    max-width: 600px;
    height: 800px;
    margin-top: 50px;
}
.logined h3{
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 60px;
}
.add-picture{
    border: 2px dashed #bbb;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 10%;
}
.add-picture:hover{
    border-color:teal;
}
.add-picture i{
    zoom: 6;
    color: #bbb;
    display: inline-block;
    position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,0);
}
</style>
