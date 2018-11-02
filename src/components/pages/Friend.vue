<template>
    <div>
      <base-top></base-top>
    </div>
</template>
<style>

</style>
<script>
  import BaseTop from '../BaseTop'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
          'base-top':BaseTop
        }
    }
</script>
