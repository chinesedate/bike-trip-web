<template>
  <!--注册页面-->
  <div class="signup-page">
    <div class="header-wrap">
      <div class="header">
        <router-link class="header-logo" to="/">
          <!--这里暂时采用这张图片logo，之后替换为圆框图-->
          <img src="../assets/logo.png">
        </router-link>
      </div>
    </div>
    <div class="signup-wrap">
      <div class="signup">
        <p>注册账号</p>
        <div class="usr-psw-wrap">
          <label for="usr">用户名或邮箱</label>
          <input id="usr" class="signup-filed" v-model="userName" autocomplete="off">
          <label for="password">密码</label>
          <input type="password" id="password" class="signup-filed" v-model="password" autocomplete="off">
          <el-button class="signup-submit" @click="signUp" type="primary">注册</el-button>
        </div>
        <div class="signup-note">
          <p>已有账号?
            <router-link to="/login">立即登录</router-link>
          </p>
        </div>
        <p>单车记，乐在其行</p>
      </div>
    </div>
  </div>
</template>
<style>
  .signup-page {
    height: 100%;
    background-color: #f9f9f9;
  }

  .header-wrap {
    width: 100%;
  }

  .header {
    width: 100%;
    padding: 30px 0 20px 0;
    text-align: center;
  }

  .signup-wrap {
    height: 800px;
  }

  .signup {
    width: 500px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .signup p {
    font-size: 20px;
    letter-spacing: 2px;
  }

  .usr-psw-wrap {
    width: 260px;
    margin: 20px auto 30px;
    height: 300px;
    background-color: white;
    padding: 30px 20px 0 20px;
    border: 1px solid #d8dee2;
    border-radius: 5px;
  }

  .usr-psw-wrap label {
    text-align: left;
    margin-left: 20px;
    display: block;
  }

  .signup-note {
    width: 280px;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid #d9dee2;
  }

  .signup-note p {
    font-size: 14px;
  }

  .signup-filed {
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 6px 8px;
    height: 20px;
    width: 209px;
  }

  .signup-submit {
    display: block;
    padding: 6px 8px;
    height: 40px !important;
    width: 229px !important;
    margin: 0 auto;
    margin-top: 30px;
  }
</style>
<script>

  export default {
    data() {
      return {
        userName: "",
        password:""
      }
    },
    methods:{
      signUp:function () {
        let param =this.$qs.stringify({
          userName:this.userName,
          password:this.password
        });
        this.$ajax({
          method:'post',
          url:'sign/up',
          data:param
        }).then().catch();
      }
    }
  }
</script>
