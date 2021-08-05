<template>
    <div id="select_component">
        <div tabindex="1">{{test}}</div>
        <ul>
            <li>我是选项1</li>
            <li>我是选项2</li>
            <li>我是选项3</li>
            <li>我是选项4</li>
            <li>我是选项5</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:"hello world"
        }
    }
}
</script>

<style lang="less" scoped>
#select_component{
    &>div:nth-child(1){
        
        height: 42px;
        background: #ccc;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s linear;
    }
    &>div:nth-child(1):focus{
        background: red;
        border-radius: 8px 8px 0 0;
    }
    &>ul{
        list-style: none;
        background: yellow;
        margin-top: 3px;
        border-radius: 0 0 8px 8px;

        &>li{
            height: 30px;
        }
    }
    border: 2px solid cyan;
    width: 250px;
    padding: 5px;
}
#select_component:focus-within{
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
}
</style>