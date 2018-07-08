<template>
  <div>
    <top-page></top-page>
    <div class="blog-content">
      <div class="blog-title-edit">
        <span class="blog-title-tip" v-show="blogTitleStatus">请输入标题</span>
        <textarea class="blog-title" v-model="blogTitle" @click="blogTitleStatus = false" @blur="showBlogTitleTip"
                  autocomplete="off"></textarea>
      </div>
      <div class="blog-content-editor"  contenteditable="true">
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
      </div>

    </div>
  </div>
</template>
<style>
  .blog-content-editor{
    height: 50px;
    width: 100%;
  }
  .blog-content {
    width: 800px;
    margin: 0 auto;
  }

  .blog-title-tip {
    font-size: 34px;
    line-height: 50px;
    position: absolute;
    z-index: -1;
  }

  .blog-title {
    resize: none;
    height: 50px;
    width: 100%;
    font-size: 34px;
    line-height: 50px;
    overflow: auto;
    background: 0 0
  }
</style>
<script>
  import TopPage from '../components/pages/TopPage';

  export default {
    data() {
      return {
        blogTitleStatus: true,
        blogTitle:"",
        blogContent:[{
          text:"fdsfasdfasdfadsf"
        }]
      }
    },
    components: {
      'top-page': TopPage
    },
    methods:{
      showBlogTitleTip(){
        if (this.blogTitle.toString() === "") {
          this.blogTitleStatus = true;
        }
      }
    }
  }
</script>
