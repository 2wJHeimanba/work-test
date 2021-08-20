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
                <div>
                    <div>
                        <span class="iconfont icon-renyuan1"></span>
                    </div>
                    <div>
                        <div>实习人数</div>
                        <div><span>9</span><span>/人</span></div>
                    </div>
                </div>
                <div>
                    <div>
                        <span class="iconfont icon-chuqin"></span>
                    </div>
                    <div>
                        <div>出勤率</div>
                        <div><span>42</span><span>%</span></div>
                    </div>
                </div>
                <div>
                    <div>
                        <span class="iconfont icon-baifenbi"></span>
                    </div>
                    <div>
                        <div>工作完成率</div>
                        <div><span>9</span><span>/人</span></div>
                    </div>
                </div>
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
            <div class="index_right">
                <indexRight></indexRight>
            </div>
            <div class="index_course_popular">
                <popularCourse></popularCourse>
            </div>
        </div>
    </div>
</template>

<script>
import searchbox from '../components/SearchBox'
import datacomp from '../components/data_comp'
import contentlist from '../components/index_comp/content_list'
import indexRight from '../components/index_comp/index_right_comp.vue'
import popularCourse from '../components/index_comp/popular_course.vue'
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
    components:{contentlist,searchbox,datacomp,indexRight,popularCourse},
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
    // display: grid;
    // grid-template-columns: minmax(300px,1fr) 1fr;
    // grid-template-rows: 1fr;
    
    &::-webkit-scrollbar{
        width: 5px;
        background: #f2eada;
    }
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-track{
        border-radius: 2px;
    }
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-track{
        background-color: rgba(180,160,120,0.1);
        box-shadow: inset 0 0 1px rgba(180,160,120,0.5);
    }
    &::-webkit-scrollbar-thumb{
        background-color: #e0861a;
    }

    #left_top{
        display: flex;
        flex-direction: column;
        background: #fff;
    }

    // 中部区域
    #left_center{
        height: 135px;
        padding: 5px 15px;
        display: flex;
        transition: all 0.3s linear;
        &>div{
            background: #fff;
            flex: 1 1;
            border-radius: 10px;
            box-shadow: 2px 5px 15px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            padding-left: 25px;

            &:nth-child(2){
                margin: 0 20px;
            }
            &>div{

                &:nth-child(1){
                    width: 80px;
                    height: 80px;
                    border: 2px solid pink;
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-image: linear-gradient(to left,orange 0%,red 100%);
                    background-clip: text;

                    &>span{
                        font-size: 40px;
                        color: transparent;
                    }
                }
                &:nth-child(2){
                    flex: 1 1;
                    height: 80px;
                    margin: 0 5px;
                    
                    &>div{
                        height: 50%;
                        color: #999999;

                        &:nth-child(1){
                            display: flex;
                            align-items: center;
                        }
                        &:nth-child(2){
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            &>span:nth-child(1){
                                font-size: 25px;
                                font-weight: bold;
                                margin-right: 10px;
                                color: #000;
                            }
                            &>span:nth-child(2){
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            &:nth-child(1)>div:nth-child(1){
                background-image: linear-gradient(to left,rgb(6, 22, 238) 0%,rgb(6, 211, 125) 100%);
            }
            &:nth-child(3)>div:nth-child(1){
                background-image: linear-gradient(to left,rgb(6, 238, 18) 0%,rgb(13, 179, 245) 100%);
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
                    box-shadow: 0 0 15px rgba(0,0,0,0.15) inset;
                    cursor: pointer;
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
                &:nth-child(1){
                    border-radius: 8px 0 0 8px;
                }
                &:nth-child(2){
                    color: #33a3dc;
                    border-left: 1px solid rgba(138,140,142,0.3);
                    border-right: 1px solid rgba(138,140,142,0.3);
                    
                }
                &:nth-child(3){
                    color: red;
                    border-radius: 0 8px 8px 0;
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

    &>#right{
        padding: 10px 15px;
        &>div{
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 2px 3px 8px rgba(0,0,0,0.1), 0px 0px 5px rgba(0,0,0,0.1);
            background: #fff;
            padding: 10px;
        }
        &>.index_right{
            
        }
        &>.index_course_popular{
            margin-top: 20px;
            padding-bottom:20px;
        }
    }
}

@media screen and (max-width: 768px) {
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
            &>#left_center{
                height: 130px;
                
                &>div{
                    padding-left: 15px;

                    &:nth-child(2){
                        margin: 0 15px;
                    }
                }
            }
        }
    }
}


@media screen and (min-width:768px) {
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
            padding-top: 8px;
            padding-bottom: 30px;
        }
    }
}

@media screen and (min-width:1024px){
    #index{
        &>#right{
            margin-top: 10px;
            padding-left: 3px;
        }
        &>#left{
            padding-right: 0px;
        }
    }
}
@media screen and (min-width:1280px){
    #index{
        // background: green;
        display: grid;
        grid-template-columns: minmax(300px,1fr) 1fr;
        grid-template-rows: 1fr;
    }
}
</style>