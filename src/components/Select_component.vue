<template>
    <div id="select_component">
        <div tabindex="1" ref="select_box">{{title}}</div>
        <ul :style="{height:`${height}px`}">
            <li v-for="(value) in list" @click="changeHeight(value)" :key="value">{{value}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        place_h:{
            type:String,
            default:"选择项目"
        },
        show_list:{
            type:Array,
            default:["nothing to select"]
        }
    },
    data(){
        return{
            title:this.place_h,
            list:this.show_list,
            height:0
        }
    },
    mounted(){
        document.addEventListener("click",this.listerClick)
    },
    methods:{
        changeHeight(value){
            this.title=value
        },
        listerClick(e){
            if(e.target==this.$refs.select_box){
                this.height=this.list.length*30
            }else{
                this.height=0
            }
        }
    },
    destroyed(){
        document.removeEventListener("click",this.listerClick);
        this.title=this.$options.data().title
    }
}
</script>

<style lang="less" scoped>
#select_component{
    &>div:nth-child(1){
        height: 100%;
        border: 1px solid rgba(111,109,133,0.3);
        border-radius: 8px;
        color: rgba(0,0,0,0.5);
        background: #f4f5f9;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s linear;
        transition-delay: 0.25s;
    }
    &>div:nth-child(1):focus{
        border-radius: 8px 8px 0 0;
    }
    &>div:nth-child(1):not(:focus)+ul{
        height: 0px;
        border: none;
    }
    &>ul{
        list-style: none;
        background: #f4f5f9;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        transition: height 0.2s linear;
        z-index: 100;
        
        position: absolute;
        top: 99%;
        left: 0;
        width: 100%;
        border: 1px solid rgba(111,109,133,0.3);
        border-top: none;

        &>li{
            height: 30px;
            cursor: pointer;
            line-height: 30px;
            font-size: 14px;
            color: rgba(0,0,0,0.7);
        }
        &>li:hover{
            background: #ccc;
            font-weight: bold;
        }
    }
    height: 100%;
    border-radius: 8px;
    width: 100%;
    position: relative;
}
</style>