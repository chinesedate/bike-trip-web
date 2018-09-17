<template>
  <div id="main-page">
    <div v-for="(blog, index) in blogList">
      <p v-html="blog.title"></p>
      <p v-html="blog.content"></p>
    </div>
  </div>
</template>
<style>
  #main-page {
    height: 100%;
    width: 100%;
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
