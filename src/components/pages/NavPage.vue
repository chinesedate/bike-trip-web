<template>
  <div id="nav-page">
    <div class="nav-list">
      <ul>
        <li class="nav-item"><a><i class="el-icon-share"></i>首页</a></li>
        <li class="nav-item"><a><i class="el-icon-share"></i>路线</a></li>
        <li class="nav-item"><a><i class="el-icon-share"></i>民宿</a></li>
        <li class="nav-item"><a><i class="el-icon-share"></i>商店</a></li>
        <li class="nav-item"><a><i class="el-icon-share"></i>热门</a></li>
        <li class="nav-item"><a><i class="el-icon-share"></i>摄影</a></li>
      </ul>
    </div>
  </div>
</template>
<style>
  #nav-page {
    width: 100%;
    height: 100%;
    background-color: #F2F6FC;
  }
  .nav-list ul {
    margin-top: 20px;
  }
  .nav-item {
    height: 40px;
    width: 250px;
    padding-left: 20px;
    text-align: left;
  }
  .nav-item i {
    margin: 0 10px;
  }
</style>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
