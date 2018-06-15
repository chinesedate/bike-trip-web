<template>
  <div>
    <el-container>
      <el-header class="bike-header">Header</el-header>

      <el-container class="main-container">
        <el-container class="side-container">
          <el-container class="scroll-container">
            <el-aside class="bike-aside">
              <nav-page></nav-page>
            </el-aside>
            <el-footer class="bike-footer">Footer</el-footer>
          </el-container>
        </el-container>
        <el-main class="bike-main">
          <main-page></main-page>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
<style>

  .bike-header {
    height: 56px !important;
    background-color: white;
  }

  .main-container {
    position: fixed;
    top: 56px;
    bottom: 0;
    width: 100%;
  }

  .side-container {
    margin-top: 0;
    margin-bottom: 0;
    width: 250px !important;

    overflow: hidden;
    flex-grow: 0;
  }

  .scroll-container {
    width: 267px !important;

    margin-right: -17px;
    margin-bottom: -17px;
    overflow: scroll;
  }

  .bike-aside {
    width: 100% !important;
    height: 1000px !important;
    background-color: beige;
  }

  .bike-footer {
    width: 100% !important;
    height: 400px !important;
    margin-bottom: 0;
    background-color: rebeccapurple;
  }

  .bike-main {
    margin-right: 0;
    margin-bottom: 0;
    height: 1000px !important;
    padding: 0;
    overflow: hidden;
  }

</style>
<script>
  import TopPage from '../pages/TopPage';
  import NavPage from '../pages/NavPage';
  import MainPage from '../pages/MainPage';

  export default {
    data() {
      return {}
    },
    components: {
      'top-page': TopPage,
      'nav-page': NavPage,
      'main-page': MainPage
    }
  }
</script>
