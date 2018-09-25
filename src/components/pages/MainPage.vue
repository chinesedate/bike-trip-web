<template>
  <div id="main-page">
    <ul class="blog-container" v-for="(blog, index) in blogList">
      <li>
        <p class="blog-title" v-html="blog.title"></p>
        <div class="blog-content">
          <img v-if="blog.titleImageUrl" :src="blog.titleImageUrl">
          <p v-html="blog.content"></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
  #main-page {
    height: 100%;
    width: 100%;
  }
  .blog-container{
    list-style: none;
    width: 1000px;
    margin: 0 auto;
  }
  .blog-content{
    width: 770px;
    height: 200px;
  }
  .blog-title{
    font-size: medium;
  }
</style>
<script>
  export default {
    data() {
      return {
        blogList:[]
      }
    },
    mounted:function() {
      this.queryBlogList()
    },
    methods: {
      queryBlogList: function () {
        const self = this;
        self.$ajax({
          method: 'get',
          url: '/blog/list'
        }).then(
          function (res) {
            if (res.data.status === 1) {
              self.blogList = res.data.data;
            }
          }
        ).catch();
      }
    }
  }
</script>
