<template>
    <div id="single-blog">
        <h3>{{blog.title}}</h3>
        <p>{{blog.body}}</p>
    </div>
</template>

<script>
export default {
    name:"SingleBlog",
    props:['postData'],
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+ this.id)
        .then(function(data){
            this.blog = data.body;
        })
    }
}
</script>

<style scoped>

.single-blog{
    padding: 20px;
    margin: 20px 0;

}
</style>
