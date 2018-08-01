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
            <li class="dropdown">
              <details class="details-reset d-flex">
                <summary>
                  <img src="../assets/user.png" height="20px" width="20px">
                  <span class="dropdown-caret"></span>
                </summary>
                <ul>
                  <li>f</li>
                  <li>a</li>
                </ul>
              </details>
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

  .user-nav {
    width: 50px;
    list-style: none;
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
</style>
