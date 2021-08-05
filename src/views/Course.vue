<template>
    <div id="course">
        {{test}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:"hello course"
        }
    }
}
</script>

<style lang="less" scoped>
#course{
    width: 100%;
    height: 100%;
    background: green;
}
</style>