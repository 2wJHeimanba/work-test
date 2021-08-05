<template>
    <div id="salary">
        {{test}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:"hello salary"
        }
    }
}
</script>

<style lang="less" scoped>
#salary{
    width: 100%;
    height: 100%;
    background: blue;
}
</style>