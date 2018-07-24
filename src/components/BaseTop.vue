<template>
    <div class="top-container">
      <slot name="left">
        <div class="logo-container">
          <div class="icon-menu" @click="$emit('hide-menu')">
            <!--<i class="el-icon-menu"></i>-->
          </div>
          <div class="logo">
            <router-link class="bike-logo" to="/" title="单车记">单车记</router-link>
          </div>
        </div>
      </slot>
      <slot name="mid"></slot>
      <slot name="right">
        <div v-if="isLogin" class="login-container">
          <router-link to="/blog/add">分享旅程</router-link>
        </div>
        <div v-else class="add-blog">
          <router-link to="/login">登录</router-link>
          |
          <router-link to="/join">注册</router-link>
        </div>
      </slot>
    </div>
</template>

<script>
    export default{
        data(){
            return{
              isLogin:false
            }
        }
    }
</script>
<style>

  .top-container {
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #ebebeb;
    box-shadow: 0 1px 2px hsla(0,0%,60%,.05)
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
