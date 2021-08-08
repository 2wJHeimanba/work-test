<template>
    <div id="index_popular">
        <div class="index_popular_title">课程受欢迎程度</div>
        <div class="index_popular_content">
            <div class="index_collection">
                <div><span class="iconfont icon-wenduji"></span></div>
                <div>
                    <p>本年度累计收藏</p>
                    <p>27</p>
                </div>
            </div>
            <div class="index_access">
                <div><span class="iconfont icon-yiwancheng1"></span></div>
                <div>
                    <p>本年度累计访问</p>
                    <p>203</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            test:"hello wrold"
        }
    },
}
</script>

<style lang="less" scoped>
#index_popular{
    width: 100%;
    height: 100%;

    &>.index_popular_title{
        font-size: 17px;
        font-weight: bold;
        height: 45px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    &>.index_popular_content{
        margin-top: 10px;
        height: 150px;
        display: flex;
        position: relative;
        &::before{
            content: "";
            display: block;
            position: absolute;
            height: 80%;
            width: 1px;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) scaleX(0.6);
            background: black;
        }

        &>div{
            flex: 1 1;
            background: rgba(204,204,204,0.38);
            &:first-child,&:last-child{
                border-radius: 8px 0 0 8px;
                display: flex;
                
                &>div{
                    // border: 1px solid blue;
                    // height: 100px;

                    &:nth-child(1){
                        width: 120px;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        &>span{
                            font-size: 60px;
                            margin-right: 10px;
                            color: seagreen;
                        }
                    }
                    &:last-child{
                        flex: 1 1;
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        flex-direction: column;

                        &>p:nth-child(2){
                            font-size: 25px;
                            font-weight: bold;
                            margin-top: 10px;
                        }
                    }
                }
            }
            &:last-child{
                border-radius: 0 8px 8px 0;
            }
        }


    }
}
</style>