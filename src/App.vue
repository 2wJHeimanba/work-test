<template>


  <div id="app">
    <!-- 顶部 -->
    <div id="top_banner">
      <top></top>
    </div>
    <div id="box">
      <!-- 导航栏 -->
      <div class="nav" ref="nav_width">
        <sidebar></sidebar>
      </div>
      <!-- 内容展示区 -->
      <div class="content" ref="content_width">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
        
      </div>
    </div>
  </div>
</template>

<script>
import top from './components/Top'
import sidebar from './components/Nav'
export default {
  components:{top,sidebar},
  mounted(){
    window.onresize=()=>{
      var Width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
      if(768<=Width&&Width<1024){
        this.$refs.content_width.style.width=`${Width-150}px`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active{
  transition:opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background: #f4f5f9;
  min-width: 768px;
}

#top_banner{
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  height: 100px;
  width: 100%;
  transition: all 0.3s linear;
  z-index: 100;
}
#box{
  display: flex;
  padding-bottom: -200px;
  height: calc(100% - 100px);
 
  .nav{
    width: 180px;
    background: orange;
    padding: 100px 0;
    transition: all 0.5s linear;
  }
  .content{
    flex: 1 1;
    padding: 0;
  }
}

@media screen and (max-width:768px) {
  #top_banner{
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    height: 80px;
  }
  #box{
    &>.nav{
      width: 120px;
    }
  }
}

@media screen and (min-width:768px) {
  #box{
    &>.nav{
      width: 150px;
    }
  }
}

@media screen and (min-width:1024px) {
  #box{
    &>.nav{
      width: 180px;
    }
  }
}




</style>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: "iconfont"; /* Project id 2722874 */
  src: url('./assets/iconfont/iconfont.woff2?t=1628301535007') format('woff2'),
       url('./assets/iconfont/iconfont.woff?t=1628301535007') format('woff'),
       url('./assets/iconfont/iconfont.ttf?t=1628301535007') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xingzhuang60kaobei2:before {
  content: "\e604";
}

.icon-baifenbi:before {
  content: "\e611";
}

.icon-chuqinshuai:before {
  content: "\e6a2";
}

.icon-renyuan1:before {
  content: "\e6dc";
}

.icon-down-fill:before {
  content: "\e675";
}

.icon-jianli:before {
  content: "\e605";
}

.icon-gengduo:before {
  content: "\e617";
}

.icon-icon02:before {
  content: "\e620";
}

.icon-yiguoqi:before {
  content: "\e60c";
}

.icon-chuqin:before {
  content: "\e61b";
}

.icon-yiguoqi1:before {
  content: "\e612";
}

.icon-tuichu:before {
  content: "\e600";
}

.icon-tixing:before {
  content: "\e601";
}

.icon-jinhangzhong:before {
  content: "\e602";
}

.icon-shixi:before {
  content: "\e70e";
}

.icon-tianchongxing-:before {
  content: "\e637";
}

.icon-yiguoqi2:before {
  content: "\e795";
}

.icon-yiwancheng:before {
  content: "\e62c";
}

.icon-wenduji:before {
  content: "\e603";
}

.icon-sousuo:before {
  content: "\e615";
}

.icon-yiwancheng1:before {
  content: "\e640";
}

.icon-xiangzuo:before {
  content: "\e85e";
}

.icon-shezhi:before {
  content: "\e606";
}

.icon-kecheng:before {
  content: "\e724";
}

.icon-xiangxia:before {
  content: "\e63a";
}

.icon-gongzi:before {
  content: "\e7e9";
}

.icon-shouye:before {
  content: "\e61c";
}

.icon-renyuan:before {
  content: "\e65e";
}

.icon-gongzuo:before {
  content: "\e62b";
}
</style>