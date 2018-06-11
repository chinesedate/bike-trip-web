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
  import TopPage from '../pages/TopPage';
  import NavPage from '../pages/NavPage';
  import MainPage from '../pages/MainPage';

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
