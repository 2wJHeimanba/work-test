<template>
    <div id="select_component">
        <div tabindex="1" id="wenjianjia">{{test}}</div>
        <ul :style="'height:'+height+'px'">
            <li v-for="(value) in list" @click="changeHeight(value)" :key="value">{{value}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:"选择爱好",
            list:['我是选项1','我是选项2','我是选项3','我是选项4','我是选项5'],
            height:0
        }
    },
    mounted(){
        document.addEventListener("click",(e)=>{
            if(e.target.getAttribute("id")==='wenjianjia'){
                this.height=this.list.length*30
            }else{
                this.height=0
            }
        })
    },
    methods:{
        changeHeight(value){
            this.test=value
        }
    },
    destroyed(){
        document.removeEventListener("click")
    }
}
</script>

<style lang="less" scoped>
#select_component{
    &>div:nth-child(1){
        height: 42px;
        border: 2px solid rgba(111,109,133,0.3);
        border-radius: 8px;
        color: rgba(0,0,0,0.5);
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
        background: #fff;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        transition: height 0.2s linear;
        
        position: absolute;
        top: 99%;
        left: 0;
        width: 100%;
        border: 2px solid rgba(111,109,133,0.3);
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
    border-radius: 8px;
    width: 250px;
    position: relative;
    margin: 20px;
}
</style>