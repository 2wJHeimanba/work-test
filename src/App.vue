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
  background: black;
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
  width: 100vw;
}
#box{
  display: flex;
  padding-bottom: -200px;
  height: calc(100% - 100px);
 
  .nav{
    border: 2px solid blue;
    width: 180px;
    background: orange;
    // background: radial-gradient(circle farthest-side at 80px 100px,orange 0%,orange 100%,transparent 100%) no-repeat top left/120px 120px,
				// linear-gradient(to bottom,orange 0% 100%) no-repeat left 100px;
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
  src: url('./assets/iconfont/iconfont.woff2?t=1628082757211') format('woff2'),
       url('./assets/iconfont/iconfont.woff?t=1628082757211') format('woff'),
       url('./assets/iconfont/iconfont.ttf?t=1628082757211') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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