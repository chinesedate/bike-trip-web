<template>
  <div>
    <el-container class="page-container">
      <el-header class="bike-header">
        <base-top></base-top>
      </el-header>
      <el-main class="bike-main">
        <main-page></main-page>
      </el-main>
      <el-footer class="bike-footer">
        <base-foot></base-foot>
      </el-footer>
    </el-container>

  </div>
</template>
<script>
  import BaseTop from '../BaseTop';
  import NavPage from '../pages/NavPage';
  import MainPage from '../pages/MainPage';
  import BaseFoot from '../BaseFoot';

  export default {
    data() {
      return {
        menuStatus: true
      }
    },
    methods: {
      hideMenu: function () {
        this.menuStatus = !this.menuStatus;
      }
    },
    components: {
      'base-top': BaseTop,
      'nav-page': NavPage,
      'main-page': MainPage,
      'base-foot': BaseFoot
    }
  }
</script>
<style>
  .bike-header {
    padding: 0 !important;
    height: auto!important;
    background-color: white;
  }

  .bike-main {
    height: 2000px !important;
    padding: 0;
  }
</style>

