<template>
<div class="login" >
<el-card class="login-card">
    <h2>请登陆</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="user">
        <el-form-item label="用户名：">
            <el-input id="username" v-model="user.username"></el-input>
        </el-form-item>
        
        <el-form-item label="密码:">
            <el-input id="password" v-model="user.password" type="password"></el-input>
        </el-form-item>
        <el-button @click="post()">登陆</el-button>
    </el-form>
</el-card>
<p>未注册？<router-link :to="{name:'Register'}">点击注册</router-link></p>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            labelPosition:'left',
            user:{
                username:"",
                password:"",
            }
        }
    },
    methods:{
        post(){
            this.$axios.post('/users/login',{
                username:this.user.username,
                password:this.user.password
            }).then(res=>{
                this.$alert(res.data.message);
                sessionStorage.setItem('username',this.user.username);
                sessionStorage.setItem('loginstatus',true);
                sessionStorage.setItem('token',res.data.data.token);
            }).then(()=>{
                this.$emit('logined');
                this.$router.push({path:"/"});
            })
        },
    }
}
</script>

<style scoped>

h2{
    text-align: center;
    width: 100%;
    margin-bottom:20px;
}
.login{
    margin:0 auto;
    max-width: 400px;
    padding-top:100px;
}
.el-card{
    padding:10px;
}
input{
    display: block
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
