<template>
    <div id="search-box">
        <input type="text" @input="query_key" v-model="keys">
        <span>lo</span>
        <span>so</span>
    </div>
</template>

<script>
export default {
    props:{
        val:String
    },
    data() {
        return{
            test:"hello search",
            keys:""
        }
    },
    methods:{
        query_key(e){
            this.$emit('update:val',this.keys)
        }
    }
}
</script>

<style lang="less" scoped>
#search-box{
    height: 100%;
    width: 100%;
    background: pink;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &>input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background: transparent;
        padding:0 50px;
    }
    &>span{
        position: absolute;
        height: 20px;
        width: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: yellowgreen;
    }
    &>span:nth-of-type(1){
        left: 15px;
    }
    &>span:nth-of-type(2){
        right: 15px;
    }

}
</style>