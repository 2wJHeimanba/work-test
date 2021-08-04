<template>


  <div id="app">
    <div id="top_banner">
      <top></top>
    </div>
    <div id="box">
      <div class="nav">
        <sidebar></sidebar>
      </div>
      <div class="content"></div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/> -->
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
  // background: pink;
}
#box{
  display: flex;
  padding-bottom: -200px;
  height: calc(100% - 100px);
  // background: pink;
  .nav{
    border: 2px solid blue;
    width: 180px;
  }
  .content{
    border: 2px solid green;
    flex: 1 1;
    // background: green;
  }
}




</style>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>