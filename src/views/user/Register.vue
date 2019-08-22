
<template>
<div class="register">
<el-card class="register-card">
    <h2>请注册</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="user">
        <el-form-item label="用户名：">
            <el-input id="username" v-model="user.username"></el-input>
        </el-form-item>
        
        <el-form-item label="密码:">
            <el-input id="password" v-model="user.password" type="password"></el-input>
        </el-form-item>

        <el-form-item label="邮箱:">
            <el-input id="userMail" v-model="user.userMail" type="userMail"></el-input>
        </el-form-item>

        <el-form-item label="手机:">
            <el-input id="userPhone" v-model="user.userPhone" type="userPhone"></el-input>
        </el-form-item>
        <el-button @click="post()">注册</el-button>
    </el-form>
    <router-link :to="{name:'Login'}" >返回登陆</router-link>
</el-card>

</div>
    
</template>

<script>
export default {
    data(){
        return{
            user:{
                username:"",
                password:"",
                userMail:"",
                userPhone:"",
            },
            labelPosition:'left'
        }
    },
    methods:{
        post(){
            this.$axios.post('/users/register',{
                username:this.user.username,
                password:this.user.password,
                userMail:this.user.userMail,
                userPhone:this.user.userPhone
            }).then(res=>{
                this.$alert(res.data.message);
                if(res.data.status==0){
                    this.$router.push({path:"/Login"});
                }
            })
        }
    }
}
</script>
<style scoped>
h2{
    text-align: center;
    width: 100%;
    margin-bottom:20px;
}
.register{
    margin:0 auto;
    max-width: 400px;
    padding-top:100px;
}
.el-card{
    padding:10px;
}
.el-button{
    float:right;
    margin-bottom: 20px;
}
p{
    margin-top: 1em;
    text-align: center;
}
</style>
