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
    font-family: Microsoft YaHei, SimHei, Tahoma !important;
  }

  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #f9f9f9;
  }
</style>
