<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App'
}
</script>

<style>
#app {
  font-size: 14px;
  color: #2c3e50;
  margin-top: 0px;
  font-family: Microsoft YaHei,SimHei,Tahoma!important;
}
  * {
    padding:0px;
    margin: 0px;
  }
  html,body,#app {
    height: 100%;
  }
</style>
