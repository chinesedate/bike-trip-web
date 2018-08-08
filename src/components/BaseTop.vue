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
          <ul class="user-nav d-flex">
            <li class="dropdown">
              <div  v-if="isLogin" class="details-reset d-flex" @click.stop="showDetails">
                <div>
                  <img src="../assets/user.png" height="20px" width="20px">
                  <span class="dropdown-caret"></span>
                </div>
                <ul v-if="showUserDropdown" class="user-dropdown-ul" v-click-outside="showDetails">
                  <li><router-link to="/blog/add">游记</router-link></li>
                  <li><router-link to="/ride/team">组队</router-link></li>
                </ul>
              </div>
              <div v-else>
                <router-link to="/login">登录</router-link>
                |
                <router-link to="/join">注册</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showUserDropdown: false
      }
    },
    // created: function() {
    //   this.$on("closeEvent",this.showDetails());
    // },
    computed: {
      isLogin: function () {
        return this.$store.state.isLogin !== '';
      }
    },
    methods: {
      showDetails: function () {
        this.showUserDropdown = !this.showUserDropdown;
      }
    },
    directives: {
      'click-outside': {
        bind: function (el, binding, vnode) {
          el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
              // and if it did, call method provided in attribute value
              vnode.context[binding.expression](event);
            }
          };
          document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unbind: function (el) {
          document.body.removeEventListener('click', el.clickOutsideEvent)
        },
      }
    }
  }
</script>
<style>
  .top {
    width: 100%;
    padding: 10px 0;
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

  .user-nav {
    width: 200px;
    list-style: none;
    align-items: center;
  }
  .user-nav li {
    float:left;
  }

  .dropdown {
    position: relative;
  }

  .details-reset summary {
    list-style: none;
    display: block;
  }

  .details-reset summary::-webkit-details-marker {
    display: none;
  }

  .d-flex {
    display: flex;
  }

  .dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border: 4px solid;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  .user-dropdown-ul {
    position: absolute;
    top: 20px;

  }

  .user-nav ul {
    list-style: none;
  }
</style>
