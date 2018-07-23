<template>
    <div>
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
          <router-link to="/login">登录</router-link>

          |
          <router-link to="/join">注册</router-link>
        </div>
        <div v-else class="add-blog">
          <router-link to="/blog/add">分享旅程</router-link>
        </div>
      </slot>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
<style>

</style>
