<template>
  <div class="top">
    <div class="content">
      <div class="logo">
        <div>
          <router-link class="logo-link" to="/">
            <icon class="logo-svg" name="logo" :scale="100"></icon>
          </router-link>
        </div>
      </div>
      <div class="top-menu">
        <div class="d-flex">
          <div class="top-search">
            <input type="text" class="search-content">
          </div>
        </div>
        <div class="d-flex">
          <ul class="user-nav">
            <li class="dropdown"></li>
            <li class="dropdown"></li>
          </ul>
        </div>
      </div>
      <!--<div class="logo">-->
      <!--<div class="icon-menu" @click="$emit('hide-menu')">-->

      <!--</div>-->
      <!--<div class="logo">-->
      <!--<router-link class="bike-logo" to="/" title="单车记">单车记</router-link>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="menu"></div>-->
      <!--</div>-->
      <!--<div class="logo-container">-->
      <!--<div class="icon-menu" @click="$emit('hide-menu')">-->
      <!--&lt;!&ndash;<i class="el-icon-menu"></i>&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="logo">-->
      <!--<router-link class="bike-logo" to="/" title="单车记">单车记</router-link>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div v-if="isLogin" class="login-container">-->
      <!--<router-link to="/blog/add">分享旅程</router-link>-->
      <!--</div>-->
      <!--<div v-else class="add-blog">-->
      <!--<router-link to="/login">登录</router-link>-->
      <!--|-->
      <!--<router-link to="/join">注册</router-link>-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      isLogin: function () {
        return this.$store.state.isLogin === '';
      }
    }
  }
</script>
<style>
  .top {
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid #ebebeb;
    box-shadow: 0 1px 2px hsla(0, 0%, 60%, .05);
  }

  .content {
    display: flex;
    max-width: 1012px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .logo {
    display: flex;
  }

  .logo-link {
    margin: -1px 15px -1px -2px;
    white-space: nowrap;
  }

  .logo-svg {
    width: 32px;
    height: 32px;
  }

  .logo-container {
    float: left;
    width: 150px;
    height: 100%;
    margin-left: 30px;
    text-align: center;
  }

  .top-menu {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
  }

  .top-search {
    display: flex;
    width: 300px;
    padding: 3px 0;
    font-size: 13px;
  }

  .search-content {
    width: 100%;
    height: 30px;
  }
  .user-nav{
    width: 50px;
  }

  .d-flex{
    display: flex;
  }

  /*.icon-menu i {*/
  /*font-size: 20px;*/
  /*}*/
  /*.logo {*/
  /*float: left;*/
  /*width: 130px;*/
  /*height: 56px;*/
  /*}*/
  /*.logo {*/
  /*background: url(../assets/logo.png) no-repeat scroll 0 transparent;*/
  /*margin: 20px 0 0;*/
  /*float: left;*/
  /*height: 36px;*/
  /*overflow: hidden;*/
  /*width: 120px;*/

  /*}*/

  /*.bike-logo {*/
  /*display: block;*/
  /*float: left;*/
  /*height: 56px;*/
  /*outline: medium none;*/
  /*text-indent: -9999em;*/
  /*width: 120px*/
  /*}*/

  /*.login-container {*/
  /*float: right;*/
  /*width: 200px;*/
  /*padding: 18px 50px;*/
  /*text-align: center;*/
  /*}*/

  /*.add-blog{*/
  /*float: right;*/
  /*width: 200px;*/
  /*padding: 18px 50px;*/
  /*text-align: center;*/
  /*}*/
</style>
