<template>
    <div id="sidebar">
        <ul>
            <li v-for="(value,index) in list" :key="value.title" @click="test(index,value,$event)">

                <router-link :class="(index==toggle_key&&value.tochange)?'dot':''" :to="value.tochange?value.path:''" tag="div">
                    <div>
                        <span :class="'iconfont '+value.icon"></span>
                    </div>
                    <div>{{value.title}}</div>
                    <div :style="index==toggle_key?'transform:rotate(-90deg)':''">
                        <svg v-if="value.childrens" t="1628086110358" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9466" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M553.1392 778.88512l451.61472-451.61472c22.64576-22.64576 22.64576-59.4176 0-82.14016-22.64576-22.64576-59.4176-22.64576-82.14016 0l-410.5472 410.61888-410.61888-410.624c-22.64576-22.64576-59.4176-22.64576-82.14016 0-22.64576 22.64576-22.64576 59.4176 0 82.14016l451.69152 451.69152a58.08128 58.08128 0 0 0 82.14016-0.07168z" :fill="index==toggle_key?'#fff':'#000'" p-id="9467"></path></svg>
                    </div>
                </router-link>

                <template v-if="value.childrens">
                    <ul class="Secondary_navigation" :style="index==toggle_key?height:'height:0px'">
                        <router-link v-for="item in value.childrens" :key="item.path" :to="item.path" tag="li">
                            {{item.title}}
                        </router-link>
                    </ul>
                </template>

            </li>
        </ul>
    </div>
</template>

<script>
import {func} from '../tools/transform_router.js'
export default {
    data(){
        return{
            list:[],
            toggle_key:0,
            height:`height:0`
        }
    },
    created(){
        this.list=func(this.$router.options.routes)
    },
    methods:{
        test(index,value,e){
            this.toggle_key=index;
            let dom=e.target.nodeName==="DIV"?e.target.parentNode.parentNode:e.target.parentNode.parentNode.parentNode
            if(dom.childNodes[dom.childNodes.length-1].nodeName==="UL"){
                this.height=`height:${dom.childNodes[dom.childNodes.length-1].childNodes.length*40}px`
            }
        }
    }
}
</script>

<style lang="less" scoped>
#sidebar{
    width: 100%;
    height: 100%;

    &>ul{
        list-style: none;

        &>li{
            cursor: pointer;

            &>div{
                height: 50px;
                line-height: 50px;
                position: relative;
                display: flex;
                align-items: center;
                padding: 0 10px;

                &>div{
                    font-size: 13px;
                }
                &>div:not(:nth-child(2)){
                    width: 30px;
                    height: 30px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                }

                &>div:nth-child(2){
                    flex: 1 1;
                    font-size: 15px;
                }
                &>div:nth-child(3){
                    transition: all 0.2s ease-in;
                }
            }

            .dot{
                font-size: 16px;
                font-weight: bold;
                color: #fff;

                &>div:nth-child(1){
                    color: #FFFAF0;
                }
            }
        }
    }
    .Secondary_navigation{
        overflow: hidden;
        transition: all 0.2s linear;
        font-size: 14px;
        &>li{
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
        &>li:hover{
            font-weight: bold;
        }
        // &>.router-link-exact-active{
        //     color: #fff;
        //     font-weight: bold;
        // }
    }
}

@media screen and (max-width:768px) {
    #sidebar{
        &>ul{
            &>li{
                &>div{
                    &>div:nth-child(1){
                        display: none;
                    }
                }
            }
        }
    }
}

</style>