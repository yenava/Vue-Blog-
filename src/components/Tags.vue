<template>
    <div id="classify">
        <el-tag
        :key="tag"
        v-for="tag in blog.classify"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
        </el-tag>
        <span v-if="ifShow">
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
        </span>
        
    </div>
</template>

<script>
export default {
    props:['classify','Show'],
    data(){
        return{
            tags:classify,
            ifShow:Show,
            inputVisible:false,
            inputValue:''
        }
    },
    methods:{
        handleClose(tag){
          this.tags.splice(this.tags.indexOf(tag),1)
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
                this.Tags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
    }
}
</script>

<style>

</style>
