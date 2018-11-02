<template>
  <!--登录页面-->
  <div class="signin-page">
    <div class="header-wrap">
      <div class="header">
        <router-link class="header-logo" to="/">
          <!--这里暂时采用这张图片logo，之后替换为圆框图-->
          <img src="../assets/logo.png">
        </router-link>
      </div>
    </div>
    <div class="signin-wrap">
      <div class="signin">
        <p>账号密码登录</p>
        <div class="usr-psw-wrap">
          <label for="usr">用户名或邮箱</label>
          <input id="usr" class="signin-filed" v-model="userName" autocomplete="off">
          <label for="password">密码</label>
          <input id="password" type="password" class="signin-filed" v-model="password" autocomplete="off">
          <el-button class="signin-submit" @click="doSignIn" type="primary">登录</el-button>
        </div>
        <div class="signup-note">
          <p>没有账号?
            <router-link to="/join">立即注册</router-link>
          </p>
        </div>
        <p>单车记，乐在其行</p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        userName: "",
        password: ""
      }
    },
    methods: {
      doSignIn: function () {
        let params = this.$qs.stringify({
          userName: this.userName,
          password: this.password
        });
        let self = this;
        self.$ajax({
            method:
              'post',
            url:
              '/sign/in',
            data: params
          }
        ).then(
          function (res) {
            if (res.data.status === 1) {
              console.log("datetime:" + new Date().getTime());
              self.$store.commit('login',{
                msg:100,
                time:new Date().getTime(),
                userid:res.data.data.autoId
              });
              self.$router.push("/");
            }
          }
        ).catch();
      }
    }
  }
</script>
<style>
  .signin-page {
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

  .signin-wrap {
    height: 800px;
  }

  .signin {
    width: 500px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .signin p {
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

  .signin-filed {
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 6px 8px;
    height: 20px;
    width: 209px;
  }

  .signin-submit {
    display: block;
    padding: 6px 8px;
    height: 40px !important;
    width: 229px !important;
    margin: 0 auto;
    margin-top: 30px;
  }
</style>
