<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="login">
    <div id="login-container">
      <div class="ibg-bg" v-bind:class="indexBanner"
           style="transform: matrix(1, 0, 0, 1, 0, 0); transition: all 500ms linear;" @mouseover="clear"
           @mouseout="run">
      </div>
      <div class="header-container">
        <div id="login-header">
          <div class="logo">
            <a class="bike-logo" href="//pan.baidu.com" target="_blank" title="单车记">单车记</a>
            <a class="pan-logo" href="//pan.baidu.com" title="网盘">网盘</a>
          </div>
          <span class="login-title">
            <a class="b-no-ln" href="//pan.baidu.com" id="top_menu_other" target="_blank">严打违规文件和盗版侵权传播</a>
            <a class="b-no-ln" hidefocuns="true" href="//pan.baidu.com" target="_blank">百度首页</a>
            <a class="b-no-ln" hidefocuns="true" href="//pan.baidu.com" target="_blank">客户端下载</a>
            <a class="b-no-ln" hidefocuns="true" href="//pan.baidu.com" target="_blank">官方贴吧</a>
            <a class="b-no-ln" hidefocuns="true" href="//pan.baidu.com" target="_blank">官方微博</a>
            <a class="b-no-ln" hidefocuns="true" href="//pan.baidu.com" target="_blank">问题反馈</a>
            <a class="b-no-ln center-entry" hidefocuns="true" href="//pan.baidu.com" target="_blank">会员中心</a>
          </span>
        </div>
      </div>
      <div class="login-main">
        <div v-bind:class="[allIndexBanner, nowIndex===0 ? '' : isHidden]">
          <div class="index-body-content">
          <p>
            <span class="left-quote"></span>
            <span>安全存储</span>
          </p>
          <p>
            <span>生活井井有条</span>
            <span class="right-quote"></span>
          </p>
            </div>
        </div>
        <div v-bind:class="[allIndexBanner, nowIndex===1 ? '' : isHidden]">
          <div class="index-body-content">
          <p>
            <span class="left-quote"></span>
            <span>在线预览</span>
          </p>
          <p>
            <span>文件即开机看</span>
            <span class="right-quote"></span>
          </p>
          </div>
        </div>
        <div v-bind:class="[allIndexBanner, nowIndex===2 ? '' : isHidden]">
          <div class="index-body-content">
          <p>
            <span class="left-quote"></span>
            <span>多段并用</span>
          </p>
          <p>
            <span>数据随身携带</span>
            <span class="right-quote"></span>
          </p>
          </div>
        </div>
        <div v-bind:class="[allIndexBanner, nowIndex===3 ? '' : isHidden]">
          <div class="index-body-content">
          <p>
            <span class="left-quote"></span>
            <span>好友分享</span>
          </p>
          <p>
            <span>共度幸福时光</span>
            <span class="right-quote"></span>
          </p>
          </div>
        </div>
        <div class="yunbg">
          <ul class="focus-content clearfix">
            <li class="focus-content-item">
              <a class="focus-anchor" v-bind:class="nowIndex===0 ? isCurrent : '' " hidefocus="true" href="javascript:;" idx="0" v-on:click="focusContentItemClick(0)"></a>
            </li>
            <li class="focus-content-item">
              <a class="focus-anchor" v-bind:class="nowIndex===1 ? isCurrent : ''" hidefocus="true" href="javascript:;" idx="1" v-on:click="focusContentItemClick(1)"></a>
            </li>
            <li class="focus-content-item">
              <a class="focus-anchor" v-bind:class="nowIndex===2 ? isCurrent : ''" hidefocus="true" href="javascript:;" idx="2" v-on:click="focusContentItemClick(2)"></a>
            </li>
            <li class="focus-content-item">
              <a class="focus-anchor" v-bind:class="nowIndex===3 ? isCurrent : ''" hidefocus="true" href="javascript:;" idx="3" v-on:click="focusContentItemClick(3)"></a>
            </li>
          </ul>
        </div>
        <div class="login-sdk-v4">
          <div class="header-login">
            <div id="login-middle" class="tang-pass-login" v-bind:style="loginVisibleStyle">
              <div id="TANGRAM_PSP_4_form" class="pass-form pass-form-normal" method=post autocomplete=off>
                <p class="pass-form-logo">账号密码登录</p>
                <p id="TANGRAM_PSP_4_errorWrapper" class="pass-generalErrorWrapper"></p>
                <p id="TANGRAM_PSP_4_userNameWrapper" class="pass-form-item pass-form-item-userName">
                  <input id="TANGRAM_PSP_4_userName" type="text" v-model="userName" class="pass-text-input pass-text-input-userName open" autocomplete="new-password" value placeholder="手机/邮箱/用户名">
                </p>
                <p id="TANGRAM_PSP_4_passwordWrapper" class="pass-form-item pass-form-item-password">
                  <input id="TANGRAM_PSP_4_password" type="password" v-model="password" class="pass-text-input pass-text-input-password" autocomplete="new-password" value placeholder="密码">
                </p>
                <p id="TANGRAM_PSP_4_memberPassWrapper" class="pass-form-item pass-form-item-memberPass">
                  <input id="TANGRAM_PSP_4_memberPass" type="checkbox" name="memberPass" class="pass-checkbox-input pass-checkbox-memberPass" checked="checked">
                  <label for="TANGRAM_PSP_4_memberPass" id="TANGRAM_PSP_4_memberPassLabel" >下次自动登录</label>
                </p>
                <p id="TANGRAM_PSP_4_sunmitWrapper" class="pass-form-item pass-form-item-submit">
                  <input id="TANGRAM_PSP_4_submit" type="submit" value="登录" v-on:click="doLogin" class="pass-button pass-button-submit" style="color:rgb(255,255,255);">
                </p>
              </div>
            </div>
            <div id="register-middle" class="tang-pass-login" v-bind:style="loginHiddenStyle"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="login-slogan">

    </div>
    <div id="login-footer">

    </div>
  </div>
</template>
<style>
  #login-container {
    position: relative;
    width: 100%;
    height: 550px;
    min-width: 1102px;
    overflow: hidden;
  }

  #login-container .ibg-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-size: cover;
  }

  .index-banner-0 {
    background: url(../assets/login/bg1.jpg) no-repeat center center;
  }

  .index-banner-1 {
    background: url(../assets/login/bg2.jpg) no-repeat center center;
  }

  .index-banner-2 {
    background: url(../assets/login/bg3.jpg) no-repeat center center;
  }

  .index-banner-3 {
    background: url(../assets/login/bg4.jpg) no-repeat center center;
  }

  #login-header {
    height: 60px;
    min-width: 1002px;
  }

  .header-container {
    position: absolute;
    height: 60px;
    width: 100%;
    left: 0;
    z-index: 3
  }

  #login-container .logo {
    background: url(../assets/login/dancheji_logo.png) no-repeat scroll 0 transparent;
    float: left;
    height: 51px;
    margin: 10px 0 0 25px;
    overflow: hidden;
    width: 181px;
    display: inline
  }

  #login-container .pan-logo {
    display: none;
    float: left;
    height: 44px;
    margin: 0 0 0 5px;
    outline: medium none;
    text-indent: -9999em;
    width: 40px
  }

  #login-container .bike-logo {
    display: block;
    float: left;
    height: 44px;
    outline: medium none;
    text-indent: -9999em;
    width: 186px
  }

  #login-container .login-title {
    float: right;
    margin: 25px 20px 0 0;
  }

  #login-container .login-title, #login-container .login-title a {
    margin: 30px 20px 0 0;
    color: #fff;
    text-decoration: none;
  }

  #login-container #top_menu_other {
    color: #f00;
  }

  #login-container .login-title .center-entry {
    background: #e35a53;
    color: #fff;
    padding: 4px 10px;
    border-radius: 20px
  }

  #login-container  .login-main {
    display: table;
    margin: 0 auto;
    clear: both;
    width: 1102px;
    height: 90%;
    position: relative;
    overflow: hidden;
    top: 10%
  }

  .all-index-banner {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hidden {
    display: none!important;
  }

  .index-body-content {
    position: absolute;
    bottom: 80px;
    font-size: 44px;
    color: #fff
  }
  .index-body-content p {
    position: relative;
    padding: 10px 100px;
  }


  .all-index-banner .left-quote,.all-index-banner .right-quote {
    height: 32px;
    width: 46px;
    overflow: hidden
  }

  .all-index-banner .left-quote {
    background: url("../assets/login/leftquote.png") top no-repeat;
    display: inline-block;
    position: absolute;
    left: 40px;
    top: 8px;
  }

  .all-index-banner .right-quote {
    background: url("../assets/login/rightquote.png") no-repeat top;
    position: absolute;
    right: 40px;
    top: 20px;
  }

  .focus-content {
    bottom: 20px;
    position: absolute;
    left: 50%;
    margin-left:-52px;
  }

  .focus-content .focus-content-item {
    list-style: none;
    float: left;
    padding: 0 8px;
  }

  .focus-content .focus-content-item .focus-anchor {
    display: block;
    height: 8px;
    outline: medium none;
    overflow: hidden;
    width: 8px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: #fff;
    opacity: .5;
  }

  .focus-content .focus-content-item .focus-anchor:hover,.focus-content .focus-content-item .current {
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    opacity: 1
  }

  .login-sdk-v4 {
    height: 100%;
    border-radius:3px;
    width:352px;
    display: table-cell;
    vertical-align: middle;
  }

  .login-sdk-v4 .header-login {
    border-radius:3px;
    background: #fff;
  }

  .header-login {
    position: relative;
    width: 100%;
    min-height: 396px;
    z-index: 999;
    background: #fff;
    border-radius: 4px;
    vertical-align: middle;
    box-shadow: rgba(0,0,0,0.3) 0 0 50px;
  }

  #login-container #login-middle {
    width: 352px;
    height:100%;
    display: table-cell;
    vertical-align: middle;
  }

  #login-container #register-middle {
    width: 352px;
    height:100%;
    display: table-cell;
    vertical-align: middle;
  }

  #login-container .login-sdk-v4 .tang-pass-login {
    padding: 0;
  }

  #login-container .tang-pass-login {
    position:relative;
    padding: 0 20px 0 20px;
  }

  .login-sdk-v4 .pass-form-normal p.pass-form-logo {
    padding-bottom: 8px;
    margin-bottom: 0;
  }

  .login-sdk-v4 .tang-pass-login p.pass-form-logo {
    margin-top: 0;
  }

  .login-sdk-v4 .tang-pass-login .pass-form {
    padding: 0 20px;
  }

  .login-sdk-v4 .pass-form-logo {
    font-size: 20px;
    text-align: center;
    padding: 30px 0 12px 0;
    font-weight: 100;
    color:#333;
    background:0;
    margin-left: 0;
  }

  #login-container .tang-pass-login .pass-form-item {
    position: relative;
    margin-bottom: 0;
    clear: both;
  }

  #login-container .tang-pass-login .pass-form-item input.pass-text-input-userName {
    padding-left: 16px!important;
    border: 0;
    border-bottom: 1px solid #e7e7e7;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  #login-container .tang-pass-login .pass-form-item.pass-form-item-userName{
    border: 1px solid #eaeaea;
    z-index: 21;
    border-bottom-width: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  #login-container .tang-pass-login .pass-form-item .pass-text-input {
    position: relative;
    z-index: 17;
    display: block;
    padding: 7px 10px;
    height: 26px;
    width: 284px;
    border: 1px solid #dedede;
    font-size: 14px;
    color: #666;
    transition: .3s;
    line-height: 26px;
    background-color: #fefefe;
    padding-left: 20px;
  }

  .tang-pass-login a, .tang-pass-login label, .tang-pass-login p, .tang-pass-login li, .tang-pass-login input {
    font-size: 12px;
    margin: 0;
    padding: 0;
    list-style: none
  }

  #login-container .tang-pass-login .pass-form-item input.pass-text-input-password {
    padding-left: 16px;
    border: 0;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  #login-container .tang-pass-login .pass-generalErrorWrapper {
    height: auto;
    _height: 28px;
    min-height: 28px;
    color: #fc4343
  }

  #login-container .pass-form .pass-form-item-password {
    border: 1px solid #e7e7e7;
    border-top-width: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radiuss: 4px;
  }

  #tang-pass-login .pass-form-item {
    position: relative;
    clear: both;
    z-index: 18;
  }

  .tang-pass-login .pass-form-item {
    position: relative;
    clear: both;
    z-index: 18;
  }

  .tang-pass-login .pass-form-item-memberPass {
    margin-bottom: 25px;
    padding-top: 19px;
  }

  .tang-pass-login .pass-form-item-memberPass {
    margin-bottom: 10px;
    display: inline-block;
  }

  #login-container .tang-pass-login .pass-form-item-memberPass input {
    vertical-align: middle;
    margin-top: -4px;
  }

  #tang-pass-login .pass-form-item-memberPass input {
    vertical-align: middle;
  }

  .tang-pass-login .pass-form-item-memberPass label {
    color: #4a4a4a;
    margin-left: 5px;
    font-size: 12px;
  }

  #login-container .tang-pass-login .pass-form-item-submit .pass-button-submit {
    width: 100%;
    height: 41px;
    background: #3582f8;
    border-radius:4px;
    transition:.3s;
    font-size: 16px;
    border: 0;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-family: "Microsoft YaHei,SimHei,Tahoma";
    font-weight: 100;
  }

  .tang-pass-login .pass-form-item-submit input {
    width: 302px;
    height: 40px;
    line-height: 40px;
    background: #2e82ff;
    border-radius:2px;
  }

  #login-container .tang-pass-login .pass-form-item {
    position: relative;
    margin-bottom: 0;
    clear: both;
  }

  .tang-pass-login .pass-form-item-submit {
    position: relative;
  }

  .tang-pass-login .pass-form-item-submit {
    position: relative;
    padding-top: 20px;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  #login-slogan {
    margin-top: 30px;
    margin: 0 auto;
    width: 750px;
    height: 110px;
  }

  #login-footer {
    text-align: center;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1400px) {
    #login-container {
      height: 720px;
      min-width: 1200px
    }

    #login-slogan {
      margin-top: 60px
    }
  }

</style>
<script>

  export default {
    name: "Login",
    data() {
      return {
        msg: 'hello vue',
        slides: [
          {
            src: require('../assets/login/bg1.jpg'),
            title: 'xxx1',
          },
          {
            src: require('../assets/login/bg2.jpg'),
            title: 'xxx2'
          },
          {
            src: require('../assets/login/bg3.jpg'),
            title: 'xxx3'
          },
          {
            src: require('../assets/login/bg4.jpg'),
            title: 'xxx4'
          }
        ],
        nowIndex: 0,
        isShow: true,
        inv: 2000,
        allIndexBanner:"all-index-banner",
        isHidden:"hidden",
        isCurrent:"current",
        loginVisibleStyle: {
          display:"block",
          visibility:"visible",
          opacity:1
        },
        loginHiddenStyle: {
          display:"none",
          visibility:"hidden",
          opacity:1
        },
        userName:"",
        password:""
      }
    },
    computed: {
      prevIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      },
      indexBanner: function () {
        return "index-banner-" + this.nowIndex
      }
    },
    methods: {
      goto(index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 20)
      },
      run() {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clear() {
        clearInterval(this.invId)
      },
      focusContentItemClick:function (index) {
        this.nowIndex = index
      },
      doLogin() {
        var params = {
          userName:this.userName,
          password:this.password
        }
        this.$http.post('/sign/in',params, {emulateJSON:true}).then(function(res){
          this.$router.push("/")
          },
          function(){

            this.unmask();

          });
      }
    },
    mounted() {
      this.run();
    }
  }
</script>
