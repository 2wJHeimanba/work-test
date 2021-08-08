<template>
    <div id="content_list">
        <div class="content_list_title">
            <span class="content_list_title_name">代办事项</span>
            <div class="content_list_title_operate">
                <div v-for="(value,index) in list_classify" :key="value" :style="index===style_key?'background:#33a3dc;color:#fff;font-weight:bold':''" @click="change_list(value,index,$event)">{{value}}</div>
            </div>
            
        </div>
        <div class="content_list_body">
            <table>
                <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                </tr>
                <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                </tr>
                <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                </tr>
                <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                </tr>
            </table>
            <div class="content_list_more" v-show="toggle_more"><span @click="query_more">更多...</span></div>
        </div>
    </div>
</template>>

<script>
export default {
    data(){
        return {
            test:"hello world",
            list_classify:["工作","工资","课程"],
            style_key:0,
            toggle_more:true
        }
    },
    methods:{
        change_list(val,index,e){
            console.log(val)
            this.style_key=index
        },
        query_more(){
            console.log("获取更多内容...")
        }
    }
}
</script>

<style lang="less" scoped>
#content_list{
    height: 100%;
    height: 100%;
    padding: 0 10px;
    background: #fff;

    &>.content_list_title{
        position: relative;
        height: 50px;
        text-align: left;
        line-height: 50px;
        margin-top: 10px;

        &>.content_list_title_name{
            font-size: 16px;
            font-weight: bold;
        }
        &>.content_list_title_operate{
            width: 200px;
            height: 50px;
            border: 1px solid #d3d7d4;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;

            &>div{
                flex: 1 1;
                text-align: center;
                height: 40px;
                line-height: 40px;
                margin: 0 2px;
                border-radius: 10px;
                cursor: pointer;

                &:first-child{margin-left: 5px;}
                &:last-child{margin-right: 5px;}
                &:hover{
                    background: rgba(51,163,220,0.1);
                    color: #333;
                    font-weight: bold;
                }
            }
        }
    }
}
#content_list>.content_list_body{
    padding-top: 10px;
    padding-bottom: 0px;
    margin: 0;

    &>table{
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        margin-top: 5px;
        border-collapse: collapse;
        box-shadow: 0 0 1px rgba(0,0,0,0.5) inset,0 0 1px rgba(0,0,0,0.5);
        
        &>tr{
            &:hover{
                background: rgba(0,0,0,0.035);
                cursor: pointer;
            }
            &:nth-child(1){
                background: #ccc;
                height: 42px;
            }
            &>td{
                height: 40px;
                border-bottom: 1px solid #ccc;
            }
        }
    }
    &>.content_list_more{
        text-align: right;
        margin-top: 8px;
        font-size: 14px;
        &>span{
            cursor: pointer;
        }
    }
}
</style>