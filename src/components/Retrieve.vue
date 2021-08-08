
<template>
    <div id="retrieve">
        <bread></bread>
        <div class="retrieve_operate">
            <div class="retrieve_select_box">
                <div>
                    <searchBox></searchBox>
                </div>
                <div>
                    <selectcom place_h="选择项目" :show_list="list"></selectcom>
                </div>
                <div>
                    <selectcom place_h="选择项目" :show_list="list"></selectcom>
                </div>
            </div>
            <div class="retrieve_input_operate">
                <div>搜索</div>
                <div>新增工作</div>
            </div>
            
        </div>
    </div>
</template>

<script>
import bread from '../components/BreadCrumbs'
import selectcom from '../components/Select_component'
import searchBox from '../components/SearchBox.vue'
export default {
    data(){
        return{
            test:"hello retrieve",
            list:['我是选项1','我是选项2','我是选项3','我是选项4','我是选项5']
        }
    },
    components:{bread,selectcom,searchBox}
}
</script>

<style lang="less" scoped>
#retrieve{
    height: 150px;
    background: #fff;
    // border: 2px solid #ccc;
    border-radius: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.1),0px 0px 5px 0 rgba(0, 0, 0, 0.1);
    // overflow: hidden;

    &>.retrieve_operate{
        flex: 1 1;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

        &>.retrieve_select_box{
            display: flex;
            align-items: flex-end;
            justify-content: center;
            // border: 1px solid red;
            &>div{
                height: 35px;
                width: 180px;
            }
            &>div:nth-child(2){
                margin: 0 12px;
            }
            &>div:nth-child(1){
                
            }
        }
        &>.retrieve_input_operate{
            // border: 1px solid blue;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 25px;

            &>div{
                width: 100px;
                height: 30px;
                border-radius: 15px;
                background: orange;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 14px;
                
                &:nth-child(1){
                    margin-right: 10px;

                }
            }
            
        }
    }
}

@media screen and (min-width: 1024px) {
    #retrieve{
        .retrieve_operate{
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr;
            background: pink;
        }
    }
}
</style>