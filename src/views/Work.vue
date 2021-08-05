<template>
    <div id="work">
        <retrieve></retrieve>
    </div>
</template>

<script>
import retrieve from '../components/Retrieve'
export default {
    data(){
        return{
            test:"hello work"
        }
    },
    components:{retrieve}
}
</script>

<style lang="less" scoped>
#work{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
}
</style>