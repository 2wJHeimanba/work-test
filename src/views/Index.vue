<template>
    <div id="index">
        <div id="left">
            <div id="left_top">
                <div class="left_top_operate">
                    <div><searchbox :icon="true" place_h="搜索事项"></searchbox></div>
                    <div>
                        <datacomp></datacomp>
                    </div>
                </div>
                <div class="left_top_content">
                    <contentlist></contentlist>
                </div>
            </div>
            <div id="left_center">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="left_bottom">
                <div class="left_bottom_title"><span>我的工作</span></div>
                <div class="left_bottom_content">
                    <div v-for="value in work_status" :key="value.id" :class="'iconfont '+value.icon" @click="detail_work(value)">
                        <div>{{value.title}}</div>
                        <div><span>{{value.nums}}</span><span> 项</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="right">

        </div>
    </div>
</template>

<script>
import searchbox from '../components/SearchBox'
import datacomp from '../components/data_comp'
import contentlist from '../components/index_comp/content_list'
export default {
    data(){
        return{
            test:"hello world",
            work_status:[
                {
                    id:123,
                    title:"待完成",
                    nums:2,
                    icon:"icon-icon02"
                },
                {
                    id:456,
                    title:"已完成",
                    nums:3,
                    icon:"icon-yiwancheng"
                },
                {
                    id:789,
                    title:"已过期",
                    nums:1,
                    icon:"icon-yiguoqi"
                }
            ]
        }
    },
    components:{contentlist,searchbox,datacomp},
    methods:{
        detail_work(e){
            console.log(e)
        }
    }
}
</script>

<style lang="less" scoped>
#index{
    width: 100%;
    height: 100%;
    // box-shadow: 0 0 5px rgba(0,0,0,0.8) inset;
    border: 2px solid #ccc;
    display: grid;
    grid-template-columns: minmax(300px,1fr) 1fr;
    grid-template-rows: 1fr;
    &>div{
        // border: 2px solid blue;
    }
    #left_top{
        display: flex;
        flex-direction: column;
        background: #fff;
    }

    // 中部区域
    #left_center{
        height: 180px;
        padding: 5px 15px;
        display: flex;
        &>div{
            background: #fff;
            flex: 1 1;
            border-radius: 10px;
            box-shadow: 2px 5px 15px rgba(0,0,0,0.15);

            &:nth-child(2){
                margin: 0 25px;
            }
        }
    }

    // 底部的区域
    #left_bottom{
        margin: 15px 15px;
        padding: 10px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 2px 3px 8px rgba(0,0,0,0.1), 0px 0px 5px rgba(0,0,0,0.1);

        &>.left_bottom_title{
            height: 40px;
            line-height: 40px;
            text-align: left;
            font-size: 17px;
            font-weight: bold;

        }

        &>.left_bottom_content{
            height: 200px;
            display: flex;
            padding: 0 10px;

            &>div{
                flex: 1 1;
                transition: all 0.2s linear;

                &:hover{
                    box-shadow: 0 0 15px rgba(0,0,0,0.1) inset;
                }

                &:nth-child(1),&:nth-child(2),&:nth-child(3){
                    font-size: 70px;
                    color: #7fb80e;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    &>div:nth-child(1){
                        font-size: 16px;
                        color: #4f5555;
                        margin-top: 2px;
                    }

                    &>div:nth-child(2){
                        font-size: 16px;
                        margin-top: 15px;
                        color: #4f5555;

                        &>span:nth-child(1){
                            font-size: 20px;
                            font-weight: bold;
                        }
                    }
                }
                &:nth-child(2){
                    color: #33a3dc;
                    // background-image: linear-gradient(to right,#ccc 0% 100%) no-repeat center center/10px 100px;
                    border-left: 1px solid rgba(138,140,142,0.3);
                    border-right: 1px solid rgba(138,140,142,0.3);
                    
                }
                &:nth-child(3){
                    color: red;
                }
            }
        }
    }


    .left_top_operate{
        height: 65px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        background: #fff;
        &>div{
            height: 48px;
        }
        &>div:nth-child(1){
            min-width: 200px;
            flex-grow: 1;
            margin-right: 15px;
        }
        &>div:nth-child(2){
            flex-grow: 1;
        }
    }
    .left_top_content{
        flex: 1 1;
        padding-bottom: 5px;
    }
    overflow: auto;
}
@media screen and (max-width: 1280px) {
    #index {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

        &>#left{
            height: 800px;
            &>div:nth-child(1){
                border-radius: 12px;
                margin: 16px;
                padding: 12px 16px;
                box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.1),0px 0px 5px 0 rgba(0, 0, 0, 0.1);
                padding: 10px 0;
            }
        }
        &>#right{
            height: 1000px;
        }
    }
}

// @media screen and (min-width:756px){
//     #index{
//         background: blue;
//     }
// }
@media screen and (min-width:1280px){
    #index{
        background: green;
    }
}
</style>