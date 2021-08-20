<template>
    <div id="work_list">
        <table>
            <tr>
                <td><input type="checkbox"></td>
                <td v-for="(value,index) in header_list" :key="index">{{value}}</td>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>前端开发</td>
                <td>张无忌</td>
                <td>男</td>
                <td>17873938372</td>
                <td>工作中</td>
                <td>5</td>
                <td>6</td>
                <td><span class="iconfont icon-kecheng"></span></td>
            </tr>
        </table>
       
    </div>
</template>

<script>
export default {
    props:{
        header_list:{
            type:Array,
            required:true
        }
    },
    data() {
        return{
            test:"hello world"
        }
    },
}
</script>

<style lang="less" scoped>
#work_list{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    position: relative;

    &::-webkit-scrollbar{
        height: 6px;
        background: #f2eada;
    }
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-track{border-radius: 2px;}
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-track{
        background-color: rgba(180,160,120,0.1);
        box-shadow: inset 0 0 1px rgba(180,160,120,0.5);
    }
    &::-webkit-scrollbar-thumb{background-color: #e0861a;}

    &>table{
        min-width: calc(1024px - 180px);
        width: 100%;
        font-size: 14px;
        border-collapse: collapse;
        

        &>tr{
            &:nth-child(1){
                background: #F4F5FA;
                height: 45px;
            }

            &:not(:nth-child(1)):hover{
                background: rgba(233,233,233,0.3);
            }
            height: 30px;
            background-image: linear-gradient(to right,#ccc 0% 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.5%;
            background-position: left bottom;

            &>td{
                height: 100%;

                &:nth-child(1){
                    width: 30px;
                    text-align: center;
                    line-height: 30px;
                }

                &:last-child{
                    &>span{
                        font-size: 20px;
                        color: orange;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    &>div{
        // border: 1px solid blue;
    }
}

@media screen and (max-width:768px) {
    #work_list{
        width: 611.333px;        
        &>table{

        }
    }
}

@media screen and (min-width:768px) {
    #work_list{
        width: 100%;
        &>table{
            width: 100%;
            // background: pink;
        }
    }
}

@media screen and (min-width:1024px) {
    #work_list{
        &>table{
            // background: orange;
        }
    }
}
</style>