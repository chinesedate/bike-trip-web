<template>
    <div>
      <top-page></top-page>
    </div>
</template>
<style>
</style>
<script>
import TopPage from '../components/pages/TopPage';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
      components :{
          'top-page':TopPage
      }
    }
</script>
