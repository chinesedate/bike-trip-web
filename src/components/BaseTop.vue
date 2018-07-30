<template>
    <div class="top-container">
      <icon class="wx-icon" name="wx"></icon>
      <!--<div class="content">-->
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
        <!--</div>-->
    </div>
</template>

<script>
    export default{
        data(){
            return{
            }
        },
      computed:{
        isLogin:function () {
          return this.$store.state.isLogin === '';
        }
      }
    }
</script>
<style>
  .wx-icon {
    width: 20px;
    height: 30px;
  }

  .top-container {
    width: 100%;
    height: 60px;
    padding:12px 0;
  }
  .content{
    padding: 0 16px;
    max-width: 1012px;
    margin: 0 auto;
  }

  .logo-container {
    float: left;
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
    background: url(../assets/logo.png) no-repeat scroll 0 transparent;
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

  .login-container {
    float: right;
    width: 200px;
    padding: 18px 50px;
    text-align: center;
  }

  .add-blog{
    float: right;
    width: 200px;
    padding: 18px 50px;
    text-align: center;
  }
</style>
