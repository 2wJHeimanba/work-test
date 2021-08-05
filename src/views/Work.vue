<template>
    <div id="work">
        <div>
            <retrieve></retrieve>
        </div>
        <div>
            <search v-bind:val.sync="search_key"></search>
        </div>
        <div style="background:white;width:100px;height:30px;border:2px solid #fff">{{search_key}}</div>
    </div>
</template>

<script>
import retrieve from '../components/Retrieve'
import search from '../components/SearchBox.vue'
export default {
    data(){
        return{
            test:"hello work",
            search_key:""
        }
    },
    components:{retrieve,search}
}
</script>

<style lang="less" scoped>
#work{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);

    &>div:nth-child(2){
        height: 40px;
        width: 250px;
    }
}
</style>