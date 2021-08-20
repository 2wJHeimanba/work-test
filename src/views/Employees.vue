<template>
    <div id="employee">
        <div>
            <retrieve></retrieve>
        </div>
        <div class="employee_list">
            <workList :header_list="header_list"></workList>
        </div>
    </div>
</template>

<script>
import retrieve from '../components/Retrieve.vue'
import workList from '../components/work_comp/work_list.vue'
export default {

    data(){
        return{
            test:"hello employee",
            header_list:['部门','姓名','角色','联系电话','状态','实习生','出勤率','发布工作','完成率','操作']
        }
    },
    components:{retrieve,workList}
}
</script>

<style lang="less" scoped>
#employee{
    width: 100%;
    height: 100%;
    padding: 16px;
    padding-bottom: 5px;
    background: #f4f5f9;
    display: flex;
    flex-direction: column;
    overflow: auto;


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

    &>.employee_list{
        flex: 1 1;
        margin-top: 10px;
        border-radius: 10px;
        // height: 300px;
        box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.1),0px 0px 5px 0 rgba(0, 0, 0, 0.1);
        background: #fff;
        padding: 10px;
    }
}
</style>