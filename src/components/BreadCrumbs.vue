<template>
    <div id="bread">
        <span class="bread_logo"></span>{{ bread_key.join("/") }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            bread_key:[]
        }
    },
    created(){
        this.bread_key.push(this.$route.meta.parent.title,this.$route.meta.title)
        this.bread_key=this.bread_key.map(value=>{
            return value.padStart(10).padEnd(16)
        })
    }
}
</script>

<style lang="less" scoped>
#bread{
    height: 30px;
    background: pink;
    text-align: left;
    display: flex;
    align-items: center;
    padding-left: 15px;
    font-size: 14px;
    color: #333;
    &>.bread_logo{
        height: 20px;
        width: 20px;
        background: blue;
        display: block;
        margin-right: 10px;
        border-radius: 50%;
    }
}
</style>