<template>
    <div id="content_list">
        <div class="content_list_title">
            <span class="content_list_title_name">代办事项</span>
            <div class="content_list_title_operate">
                <div>工作</div>
                <div>工资</div>
                <div>课程</div>
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
        </div>
    </div>
</template>>

<script>
export default {
    data(){
        return {
            test:"hello world"
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
                    background: #33a3dc;
                    color: #fff;
                }
            }

        }
    }
}
#content_list>.content_list_body{
    padding-top: 10px;
    padding-bottom: 0px;
    // border: 1px solid red;
    margin: 0;

    &>table{
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        margin-top: 5px;
        border-collapse: collapse;
        box-shadow: 0 0 1px rgba(0,0,0,0.5) inset,0 0 1px rgba(0,0,0,0.5);
        
        &>tr{
            &:nth-child(1){
                background: #ccc;
                height: 42px;
            }
            &>td{
                height: 30px;
                border-bottom: 1px solid #ccc;
            }
        }
    }
}
</style>