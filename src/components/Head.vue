<template>
  <div id="header">
    <div class="dcj-header">
      <div class="header-wrap clearfix">
        <div class="head-logo">
          <a class="dcj-logo" title="单车记，乐在其行" href="http://www.dancheji.cn/"></a>
        </div>
        <ul class="head-nav">
          <li><a href="/">首页</a></li>
          <li><a href="/">路线</a></li>
          <li><a href="/">社区</a></li>
          <li><a href="/">商店</a></li>
          <li><a href="/">民宿</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Head',
    data() {
      return {}
    }
  }
</script>
<style>
  .dcj-header {
    height: 68px;
    background: #fff;
    position: relative;
    z-index: 90;
  }

  .header-wrap {
    width: 1000px;
    height: 68px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  .head-logo {
    float: left;
    padding: 16px 0 13px;
    width: 136px;
    height: 39px;
  }

  .head-logo .dcj-logo {
    display: block;
    height: 39px;
    background: url("../assets/login/dancheji.png") no-repeat 0 0;
    position: relative;
  }

  .head-nav {
    float: left;
    display: inline;
    padding: 0 10px 0 25px;
    line-height: 68px;
    font-size: 16px;
    color: #333;
  }

  .head-nav li {
    display: inline;

  }

  .head-nav li a {
    padding: 0 16px;
    display: inline-block;
    font-size: 16px;
  }

  @media screen and (max-width: 1440px) {
    .dcj-header {
      height: 58px;
    }
    .header-wrap {
      height: 58px;
    }
  }
</style>
