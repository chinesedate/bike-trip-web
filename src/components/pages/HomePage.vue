<template>
  <div>
    <el-container>
      <el-header class="bike-header">Header</el-header>

      <el-container class="main-container">
        <el-container class="side-container">
          <el-aside class="bike-aside">Aside</el-aside>
          <el-footer class="bike-footer">Footer</el-footer>
        </el-container>

        <el-main class="bike-main">Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>
<style>
.bike-header{
  height: 56px !important;
  background-color: white;
}
.main-container {
  height: 1000px;
}
.side-container{
  width: 250px !important;
  height: 100%;
  overflow: auto;
  flex-grow: 0;
}
 .bike-aside{
    width: 100% !important;
    height: 100%;
    background-color: beige;
  }
  .bike-footer{
    width: 100% !important;
    background-color: rebeccapurple;

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
