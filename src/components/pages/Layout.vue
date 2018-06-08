<template>
  <div>
    <top-page></top-page>
    <nav-page></nav-page>
    <main-page></main-page>
  </div>
</template>
<style>

</style>
<script>
  import TopPage from 'TopPage';
  import NavPage from 'NavPage';
  import MainPage from 'MainPage';

  export default {
    data() {
      return {}
    },
    components: {
      'top-page': TopPage,
      'nav-page': NavPage,
      'main-page': MainPage
    }
  }
</script>
