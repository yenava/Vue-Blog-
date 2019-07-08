<template>
    <div class="container">
        <el-row>
        <el-col :span="10" :offset="1">
            <a href="https://yenava.github.io/education-degree/">
                <el-card :body-style="{ padding: '0px' }">
                <img src="@/assets/datanew.png" class="image">
                <div style="padding: 14px;">
                    <span>数据可视化</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">观看</el-button>
                    </div>
                </div>
                </el-card>
            </a>
        </el-col>
        <el-col :span="10" :offset="2">
            <a href="http://www.pmdaniu.com/storage/99326/a217bbf3dcf9950f73937783ee175308-61504/start.html">
                <el-card :body-style="{ padding: '0px' }">
                <img src="@/assets/focus1.png" class="image">
                <div style="padding: 14px;">
                    <span>Focus产品原型</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">观看</el-button>
                    </div>
                </div>
                </el-card>
            </a>
        </el-col>
        <el-col :span="8" :offset="2">
            <a href="https://yenava.github.io/education-degree/">
                <el-card :body-style="{ padding: '0px' }">
                <img src="@/assets/logo.png" class="image">
                <div style="padding: 14px;">
                    <span>未完待续</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">观看</el-button>
                    </div>
                </div>
                </el-card>
            </a>
        </el-col>
        </el-row>
    </div>
        
    
</template>

<script>
export default {
    name:"Works",
    data(){
        return {
            currentDate:"2019/6/29"
        }
    }
}
</script>

<style scoped>

.container{
    margin:0 auto;
    padding-top: 100px;
    max-width: 1000px;
}

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
