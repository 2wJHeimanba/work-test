<template>


  <div id="app">
    <!-- 顶部 -->
    <div id="top_banner">
      <top></top>
    </div>
    <div id="box">
      <!-- 导航栏 -->
      <div class="nav">
        <sidebar></sidebar>
      </div>
      <!-- 内容展示区 -->
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import top from './components/Top'
import sidebar from './components/Nav'
export default {
  data(){
    return{

    }
  },
  components:{top,sidebar}
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background: #f4f5f9;
  min-width: 837px;
}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

#top_banner{
  border: 2px solid #ccc;
  height: 100px;
  width: 100%;
}
#box{
  display: flex;
  padding-bottom: -200px;
  height: calc(100% - 100px);
 
  .nav{
    border: 2px solid blue;
    width: 180px;
    background: orange;
    padding: 100px 0;
  }
  .content{
    border: 2px solid green;
    flex: 1 1;
    padding: 10px 15px;
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
  src: url('./assets/iconfont/iconfont.woff2?t=1628213497987') format('woff2'),
       url('./assets/iconfont/iconfont.woff?t=1628213497987') format('woff'),
       url('./assets/iconfont/iconfont.ttf?t=1628213497987') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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