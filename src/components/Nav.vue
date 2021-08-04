<template>
    <div id="sidebar">
        <ul>
            <li v-for="(value,index) in list" :key="value.id" @click="test(index,$event)" :class="index==toggle_key?'dot':''">
                <div>
                    <div>
                        <span :class="'iconfont '+value.icon"></span>
                    </div>
                    <div>{{value.title}}</div>
                    <div :style="index==toggle_key?'transform:rotate(-90deg)':''">
                        <svg v-if="value.childrens" t="1628086110358" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9466" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M553.1392 778.88512l451.61472-451.61472c22.64576-22.64576 22.64576-59.4176 0-82.14016-22.64576-22.64576-59.4176-22.64576-82.14016 0l-410.5472 410.61888-410.61888-410.624c-22.64576-22.64576-59.4176-22.64576-82.14016 0-22.64576 22.64576-22.64576 59.4176 0 82.14016l451.69152 451.69152a58.08128 58.08128 0 0 0 82.14016-0.07168z" fill="#515151" p-id="9467"></path></svg>
                    </div>
                </div>
                <template v-if="value.childrens">
                    <ul class="Secondary_navigation" :style="index==toggle_key?height:'height:0px'">
                        <li v-for="item in value.childrens" :key="item.id">
                            {{item.title}}
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            list:[
                {
                    id:123,
                    title:"首页",
                    path:"index",
                    icon:"icon-shouye"
                },
                {
                    id:127,
                    title:"工作",
                    path:"work",
                    icon:"icon-gongzuo",
                    childrens:[
                        {id:123,title:"工作列表",path:"work/list"}
                    ]
                },
                {
                    id:126,
                    title:"人员",
                    path:"worker",
                    icon:"icon-renyuan",
                    childrens:[
                        {id:128,title:"员工",path:"employees"},
                        {id:123,title:"实习生",path:"intern"}
                    ]
                },
                {
                    id:129,
                    title:"工资",
                    path:"wage",
                    icon:"icon-gongzi",
                    childrens:[
                        {id:123,title:"工资列表",path:"wage/list"}
                    ]
                },
                {
                    id:124,
                    title:"课程",
                    path:"course",
                    icon:"icon-kecheng",
                    childrens:[
                        {id:130,title:"课程列表",path:"course/list"}
                    ]
                }            
            ],
            toggle_navigation:false,
            toggle_key:0,
            height:`height:0`
        }
    },
    methods:{
        test(index,e){
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
    background: #ccc;

    &>ul{
        list-style: none;

        &>li{
            cursor: pointer;

            &>div{
                height: 50px;
                line-height: 50px;
                background: #fff;
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
                    transition: all 0.3s ease-in;
                }
            }
        }
    }
    .Secondary_navigation{
        overflow: hidden;
        transition: all 0.2s linear;
        &>li{
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
        &>li:hover{
            background: pink;
        }
    }
}
.dot{
    // font-size: 20px;
    color: #000;
}
</style>