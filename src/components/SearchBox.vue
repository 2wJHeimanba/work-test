<template>
    <div id="search-box">
        <input type="text" :placeholder="place_h" @input="query_key" v-model="keys" :style="icon?'':'padding:0 10px'">
        <span v-show="icon" :class="'iconfont '+icon_name"></span>
    </div>
</template>

<script>

export default {
    props:{
        val:String,
        icon:{
            type:Boolean,
            default:false
        },
        icon_name:{
            type:String,
            default:"icon-sousuo"
        },
        place_h:{
            type:String,
            default:"请输入关键字查询"
        }
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
    background: #fffef9;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(111,109,133,0.3);
    background: #f4f5f9;

    &>input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background: transparent;
        padding:0 45px;
        background: #f4f5f9;
    }
    &>span{
        position: absolute;
        height: 25px;
        width: 25px;
        top: 50%;
        transform: translateY(-50%);
        color: blue;
        font-size: 20px;
        font-weight: bold;
        line-height: 25px;
    }
    &>span:nth-of-type(1){
        left: 10px;
    }
    &>span:nth-of-type(2){
        right: 15px;
    }

}
</style>