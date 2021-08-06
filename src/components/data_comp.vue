<template>
    <div id="date_comp">
        <input type="date" id="myDate" v-model="date">
    </div>
</template>

<script>
export default {
    data(){
        return{
            date:""
        }
    },
    watch:{
        date(val){
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
#date_comp{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;

    &>#myDate{
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        position: relative;
        font-size: 16px;
        background: #f4f5f9;

        &::-webkit-datetime-edit-fields-wrapper { margin-left: 40px;width: 100%;height: 100%; }
        &::-webkit-datetime-edit-text { color: black; }  /*这是控制年月日之间的斜线或短横线的*/
        &::-webkit-datetime-edit-year-field {padding: 0;  }    /*控制年文字, 如2013四个字母占据的那片地方*/   
        &::-webkit-datetime-edit-month-field {padding: 0 8px;  }    /*控制月份*/
        &::-webkit-datetime-edit-day-field {padding: 0 8px;  }    /*控制具体日子*/
        &::-webkit-inner-spin-button { visibility: hidden; }    /*这是控制上下小箭头的*/
        &::-webkit-calendar-picker-indicator {      /*这是控制下拉小箭头的*/
            background-image: url('../assets/images/rili.png');
            padding: 0;
            position: absolute;
            left: -10px;
        }
        
    }
}
</style>