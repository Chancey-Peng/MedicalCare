<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</div>
    </el-backtop>-->
    <Header></Header>
    <Subnav></Subnav>
    <Carousel></Carousel>
    <Content></Content>
    <Login></Login>
    <Footer></Footer>
    <AI></AI>
    <Rightnav></Rightnav>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/header/head";
import Subnav from "./components/subnav/subnav";
import Carousel from "./components/carousel/carousel";
import Login from "./components/login/login";
import Footer from "./components/footer/footer";
import AI from "./components/questions/questions";
import Rightnav from "./components/rightnav/rightnav";
import Content from "./components/content/content";
export default {
  name: "App",
  components: {
    Header,
    Subnav,
    Carousel,
    Login,
    Footer,
    AI,
    Rightnav,
    Content
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
