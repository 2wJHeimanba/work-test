<template>
    <div id="top">
        <div class="top_left">
            <div class="top_logo"></div>
            <div class="top_title">测试前程无忧实习生管理平台</div>
        </div>
        <div class="top_right">
            <div class="top_setup"></div>
            <div class="top_admin"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
#top{
    height: 100%;
    display: flex;
    .top_left{
        flex: 1 1;
         
        display: flex;
        align-items: center;
        padding-left: 20px;
        .top_logo{
            border: 2px solid blue;
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }
        // .top_title{
        //     border: 1px solid red;
        // }
        div{
            border: 1px solid red;
        }
    }
    .top_right{
        flex: 1 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;

        .top_setup{

        }
        div{
            border: 1px solid red;
            width: 200px;
            height: 60px;
        }
    }
    div{
        border: 1px solid orange;
    }
}
</style>