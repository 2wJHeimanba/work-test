<template>
    <div id="employee">
        {{test}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:"hello employee"
        }
    }
}
</script>

<style lang="less" scoped>
#employee{
    width: 100%;
    height: 100%;
    background: #ccc;
}
</style>