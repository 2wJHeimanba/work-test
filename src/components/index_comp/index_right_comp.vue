<template>
    <div id="index_right">
        <div>
            <div class="index_course_remind">课程提醒</div>
            <div class="index_select_date">
                <dataSelect></dataSelect>
            </div>
        </div>
        <!-- 日期 -->
        <div class="index_show_date">
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <!-- 课程列表 -->
        <div>
            <div class="index_right_lecturer">
                <div class="index_right_lecturer_head">
                    <div></div>
                </div>
                <div class="index_right_course_introduce">
                    <div>
                        
                        <p>
                            <span>基础</span>
                            JFK的历史附近的开始啦警方打开JFK的历史附近的开始啦警方打JFK的历史附近的开始啦警方打开开拉JFK的历史附近的开始啦警方打开萨警方打开拉萨减肥的拉萨警方打开拉萨警方打开拉萨附件打开拉萨解开了
                        </p>
                    </div>
                    <div>
                        <div>07月30日-08月14日 07:04 丨 共3节</div>
                        <div><span>张三丰  </span> 主讲</div>
                    </div>
                </div>
            </div>

            <div class="index_right_lecturer">
                <div class="index_right_lecturer_head">
                    <div></div>
                </div>
                <div class="index_right_course_introduce">
                    <div>
                        
                        <p>
                            <span>基础</span>
                            JFK的历史附近的开始啦警方打开JFK的历史附近的开始啦警方打JFK的历史附近的开始啦警方打开开拉JFK的历史附近的开始啦警方打开萨警方打开拉萨减肥的拉萨警方打开拉萨警方打开拉萨附件打开拉萨解开了
                        </p>
                    </div>
                    <div>
                        <div>07月30日-08月14日 07:04 丨 共3节</div>
                        <div><span>张无忌  </span> 主讲</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dataSelect from '../data_comp.vue'
export default {
    data() {
      return{
          test:"hello world"
      }  
    },
    components:{dataSelect}

}
</script>

<style lang="less" scoped>
#index_right{
    margin-top: 12px;
    &>div:nth-child(1){
        height: 45px;
        display: flex;
        &>div{
            flex: 1 1;
            display: flex;
            align-items: center;
        }
        &>.index_course_remind{
            font-size: 17px;
            font-weight: bold;
        }
        &>.index_select_date{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }

    &>div:nth-child(2){
        height: 100px;
        margin-top: 20px;
        display: flex;

        &>div{
            flex: 1 1;
            margin: 8px 0;
            margin-left: 10px;
            border-radius: 8px;
            box-shadow: 0 0 3px rgba(0,0,0,0.2);
            background: #f6f5ec;
            transition: all 0.2s linear;

            &:hover{
                cursor: pointer;
                box-shadow: 0 0 6px rgba(0,0,0,0.3);
            }
            &:first-child{
                margin-left: 0px;
            }
        }

    }

    &>div:nth-child(3){
        padding-bottom: 15px;

        &>.index_right_lecturer{
            padding: 15px 0;
            display: flex;
            border-bottom: 1px solid #ccc;

            &>.index_right_lecturer_head{
                width: 120px;
                display: flex;
                justify-content: center;
                // border: 1px solid blue;

                &>div{
                    border: 2px solid #ccc;
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                    background-image: url(../../assets/images/logo.jpg);
                    background-size: 100% 100%;
                }
            }
            &>.index_right_course_introduce{
                flex-grow: 1;
                padding-left: 15px;
                &>div:nth-child(1){
                    span{
                        display: inline-block;
                        float: left;
                        padding: 0 5px;
                        background: #D1E8FF;
                        border-radius: 3px;
                        margin-right: 10px;
                        color: #1A8CFF;
                    }
                    &>p{
                        text-align: left;
                        letter-spacing: 1px;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                }
                &>div:nth-child(2){
                    height: 30px;
                    display: flex;
                    font-size: 13px;
                    margin-top: 15px;

                    &>div{
                        flex: 1 1;
                        display: flex;
                        align-items: flex-end;

                        &:nth-child(2){
                            justify-content: flex-end;

                            &>span:nth-child(1){
                                display: inline-block;
                                color: orange;
                                padding: 0 8px;
                                background: rgba(222,163,44,0.2);
                                margin-right: 8px;
                                border-radius: 3px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>