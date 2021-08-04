<template>
    <div id="sidebar">
        <ul>
            <li v-for="(value,index) in list" :key="value.id" @click="test(index,$event)" :class="index==toggle_key?'dot':''">
                <div>{{value.title}}</div>
                <template v-if="value.childrens">
                    <transition>
                        <ul class="Secondary_navigation" :style="index==toggle_key?height:'height:0px'">
                            <li v-for="item in value.childrens" :key="item.id">
                                {{item.title}}
                            </li>
                        </ul>
                    </transition>
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
                    path:"index"
                },
                {
                    id:127,
                    title:"工作",
                    path:"work",
                    childrens:[
                        {id:123,title:"工作列表",path:"work/list"}
                    ]
                },
                {
                    id:126,
                    title:"人员",
                    path:"worker",
                    childrens:[
                        {id:128,title:"员工",path:"employees"},
                        {id:123,title:"实习生",path:"intern"}
                    ]
                },
                {
                    id:129,
                    title:"工资",
                    path:"wage",
                    childrens:[
                        {id:123,title:"工资列表",path:"wage/list"}
                    ]
                },
                {
                    id:124,
                    title:"课程",
                    path:"course",
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
    created(){
        console.log(Velocity)
    },
    methods:{
        test(index,e){
            this.toggle_key=index;
            let dom=e.target.parentNode
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
            // border: 1px solid red;
            cursor: pointer;

            &>div{
                // border: 2px solid cyan;
                height: 50px;
                line-height: 50px;
                background: #fff;
            }
        }
    }
    .Secondary_navigation{
        overflow: hidden;
        transition: all 0.5s linear;
        li{
            // background: cyan;
            height: 40px;
            line-height: 40px;
        }
    }
}
.dot{
    // font-size: 20px;
    color: #000;
}
</style>