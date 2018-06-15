<template>
    <div id="main-page">
      <router-view></router-view>
    </div>
</template>
<style>
  #main-page{
    height: 100%;
    width: 100%;
    margin-right: -17px;
    margin-bottom: -17px;
    background-color: coral;
    overflow-y: scroll;
  }
</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
