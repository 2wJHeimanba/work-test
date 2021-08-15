<template>
    <div id="sidebar">
        <ul>
            <li v-for="(value,index) in list" :key="value.title" @click="test(index,value,$event)">

                <router-link :class="(index==toggle_key&&value.tochange)?'dot':''" :to="value.tochange?value.path:''" tag="div">
                    <span :class="'iconfont '+value.icon"></span>
                    <div :style="{color:`${index===toggle_key?'#f2eada':'#333'}`}">{{value.title}}</div>
                    <svg v-if="value.childrens" :style="index==toggle_key?'transform:translateY(-50%) rotate(-90deg)':''" t="1628086110358" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9466" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M553.1392 778.88512l451.61472-451.61472c22.64576-22.64576 22.64576-59.4176 0-82.14016-22.64576-22.64576-59.4176-22.64576-82.14016 0l-410.5472 410.61888-410.61888-410.624c-22.64576-22.64576-59.4176-22.64576-82.14016 0-22.64576 22.64576-22.64576 59.4176 0 82.14016l451.69152 451.69152a58.08128 58.08128 0 0 0 82.14016-0.07168z" :fill="index==toggle_key?'#fff':'#333'" p-id="9467"></path></svg>
                </router-link>
                
                <template v-if="value.childrens">
                    <ul class="Secondary_navigation" :style="{height:`${index===toggle_key?second_ul_height:0}px`}">
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
            second_ul_height:0
        }
    },
    mounted(){
        this.list=func(this.$router.options.routes);

        window.addEventListener("beforeunload",()=>{
            localStorage.setItem('nav_height',JSON.stringify(this.second_ul_height))
            localStorage.setItem('toggle_key',JSON.stringify(this.toggle_key))
        })
        this.setUlHeight()
    },
    methods:{
        test(index,value,e){
            this.toggle_key=index;
            let dom=e.target.parentNode.nextSibling
            if(dom){
                this.second_ul_height=dom.childNodes.length*40
            }
        },
        setUlHeight(){
            this.second_ul_height=localStorage.getItem('nav_height')?Number(localStorage.getItem('nav_height')):0
            this.toggle_key=localStorage.getItem('toggle_key')?Number(localStorage.getItem('toggle_key')):0
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
                position: relative;

                &>span:nth-child(1){
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                }

                &>div:nth-child(2){
                    position: absolute;
                    left: 0;right: 0;
                    top: 0;bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0,0,0,0.05);
                    font-size: 14px;
                }

                &>svg:nth-child(3){
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                    font-size: 12px;
                    transition: all 0.2s ease-in;
                }
            }

            .dot{
                font-size: 16px;
                font-weight: bold;
                color: #fff;

                &>div:nth-child(2){
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
        &>.router-link-exact-active{
            color: #fff;
            font-weight: bold;
        }
    }
}

@media screen and (max-width:768px) {
    #sidebar{
        &>ul{
            &>li{
                &>div{
                    &>span:nth-child(1){
                        display: none;
                    }
                }
            }
        }
    }
}

</style>