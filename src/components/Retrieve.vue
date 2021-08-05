
<template>
    <div id="retrieve">
        <bread></bread>
        <div>
            <selectcom></selectcom>
        </div>
    </div>
</template>

<script>
import bread from '../components/BreadCrumbs'
import selectcom from '../components/Select_component'
export default {
    data(){
        return{
            test:"hello retrieve"
        }
    },
    components:{bread,selectcom}
}
</script>

<style lang="less" scoped>
#retrieve{
    height: 170px;
    background: #fff;
    border: 2px solid #ccc;
    border-radius: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    &>div:nth-child(2){
        flex: 1 1;
        // background: cyan;
    }
}
</style>