<template>
  <div>
    <el-container class="page-container">

      <el-container v-if="menuStatus" class="side-container">
        <el-container class="side-scroll-container">
          <el-aside class="bike-aside">
            <nav-page></nav-page>
          </el-aside>
          <el-footer class="bike-footer">Footer</el-footer>
        </el-container>
      </el-container>

      <el-container :class="{'hide-menu':!menuStatus}" class="main-container">
        <el-container class="main-scroll-container">
          <el-header class="bike-header"><top-page @hide-menu="hideMenu"></top-page></el-header>
          <el-main class="bike-main">
            <main-page></main-page>
          </el-main>
        </el-container>
      </el-container>

    </el-container>

  </div>
</template>
<style>

  .side-container {
    position: fixed;
    top: 56px;
    bottom: 0;
    width: 250px !important;
    overflow: hidden;
    flex-grow: 0;
  }

  .side-scroll-container {
    width: 267px !important;
    margin-right: -17px;
    margin-bottom: -17px;
    overflow: scroll;
  }

  .bike-aside {
    width: 100% !important;
    height: 1000px !important;
    background-color: #F2F6FC;
    overflow: hidden;
  }

  .bike-footer {
    width: 100% !important;
    height: 200px !important;
    margin-bottom: 0;
    background-color: rebeccapurple;
  }

  .main-container {
    position: fixed;
    top: 0;
    left: 250px;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
  }

  .main-container.hide-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
  }

  .main-scroll-container {
    height: 2000px;
  }

  .bike-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 17px;

    height: 56px !important;
    background-color: white;
  }

  .bike-main {
    margin-top: 56px;
    height: 2000px !important;
    padding: 0;

  }

</style>
<script>
  import TopPage from '../pages/TopPage';
  import NavPage from '../pages/NavPage';
  import MainPage from '../pages/MainPage';

  export default {
    data() {
      return {
        menuStatus:true
      }
    },
    methods:{
      hideMenu:function () {
        this.menuStatus = !this.menuStatus;
      }
    },
    components: {
      'top-page': TopPage,
      'nav-page': NavPage,
      'main-page': MainPage
    }
  }
</script>
