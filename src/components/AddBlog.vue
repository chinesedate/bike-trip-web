<template>
  <div>
    <top-page></top-page>
    <div class="blog-content">
      <div class="blog-title-edit">
        <span v-show="showBlogTitleTip">请输入标题</span>
        <textarea class="blog-title" @click="showBlogTitleTip = false" @blur="showBlogTitleTip = true"></textarea>
      </div>

    </div>
  </div>
</template>
<style>
  .blog-content {
    width: 800px;
    margin: 0 auto;
  }

  .blog-title {
    resize: none;
  }
</style>
<script>
  import TopPage from '../components/pages/TopPage';

  export default {
    data() {
      return {
        showBlogTitleTip: true
      }
    },
    components: {
      'top-page': TopPage
    }
  }
</script>
