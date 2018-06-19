<template>
  <div id="top-page">
    <div class="logo-container">
      <div class="icon-menu" @click="$emit('hide-menu')">
        <!--<i class="el-icon-menu"></i>-->
      </div>
      <div class="logo">
        <router-link class="bike-logo" to="/" title="单车记">单车记</router-link>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<style>
  #top-page {
    width: 100%;
    height: 100%;
  }

  .logo-container {
    width: 150px;
    height: 100%;
    margin-left: 30px;
    text-align: center;
  }

  .icon-menu {
    float: left;
    position: relative;
    top: 15px;
    width: 25px;
    height: 25px;
    padding: 18px 0 0 0;
    background-color: #93959d;
  }

  /*.icon-menu i {*/
  /*font-size: 20px;*/
  /*}*/
  /*.logo {*/
  /*float: left;*/
  /*width: 130px;*/
  /*height: 56px;*/
  /*}*/
  .logo {
    background: url(../../assets/logo.png) no-repeat scroll 0 transparent;
    margin: 20px 0 0;
    float: left;
    height: 36px;
    overflow: hidden;
    width: 120px;

  }

  .bike-logo {
    display: block;
    float: left;
    height: 56px;
    outline: medium none;
    text-indent: -9999em;
    width: 120px
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
