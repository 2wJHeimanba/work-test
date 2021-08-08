<template>
    <div id="top">
        <div class="top_left">
            <div class="top_logo"></div>
            <div class="top_title">测试前程无忧实习生管理平台</div>
        </div>
        <div class="top_right">
            <div class="top_setup">
                <span class="iconfont icon-shezhi"></span><span>设置</span>
            </div>
            <div class="top_admin">
                <div class="admin_logo">
                    <span class="iconfont icon-shixi"></span>
                </div>
                <span>admin</span>
            </div>
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
    background: #fff;
    .top_left{
        flex: 1 1;
         
        display: flex;
        align-items: center;
        padding-left: 20px;
        .top_logo{
            height: 78px;
            width: 78px;
            border-radius: 50%;
            background-image: url('../assets/images/logo.jpg');
            background-size: 100% 100%;
        }
        div{
            // border: 1px solid red;
        }
    }
    .top_right{
        flex: 1 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;
        font-size: 16px;
        color: #72777b;

        .top_setup{
            display: flex;
            justify-content: center;
            align-items: center;

            &>span:nth-child(1){
                font-size: 26px;
                font-weight: bold;
                margin-right: 8px;
            }
        }
        div{
            width: 120px;
            height: 60px;
        }
        .top_admin{
            display: flex;
            align-items: center;
            justify-content: flex-end;

            &>.admin_logo{
                height: 56px;
                width: 56px;
                border: 1px solid green;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 5px solid rgba(51,163,220,0.2);
                &>span{
                    font-size: 38px;
                }
            }
            &>span:nth-child(2){
                display: flex;
                align-items: center;
                padding-left: 8px;
                // border: 1px solid blue;
            }
        }
    }
}
</style>