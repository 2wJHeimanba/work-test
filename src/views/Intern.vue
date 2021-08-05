<template>
    <div id="intern">
        {{test}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:"hello intern"
        }
    }
}
</script>

<style lang="less" scoped>
#intern{
    width: 100%;
    height: 100%;
    background: hotpink;
}
</style>