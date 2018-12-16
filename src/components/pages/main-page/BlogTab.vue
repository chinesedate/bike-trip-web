<template>
  <div>
    <div v-for="(blog,index) in blogList" class="blog-item">
      <h2 class="blog-title">
        <router-link :to="{name:'Blog', params:{id:blog.autoId}}">{{blog.title}}</router-link>
      </h2>
      <div class="blog-main">
        <div v-if="blog.titleImageUrl" class="blog-title-image">
          <div class="blog-title-image-inner"><img :src="blog.titleImageUrl"></div>
        </div>
        <div class="blog-content">
          <span class="blog-content-text" v-html="blog.briefIntroduction"></span>
        </div>
        <div class="blog-actions">
          <button @click="actionLike()">喜欢</button>
          <button>评论</button>
          <button>收藏</button>
          <button>转发</button>
          <button>打赏</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "BlogTab",
        blogList: []
      }
    },
    mounted: function () {
      this.queryBlogList();
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

<style scoped>
  .blog-item {
    padding: 20px;
  }

  .blog-main {
    cursor: pointer;
    line-height: 1.67;
  }

  .blog-title-image {
    position: relative;
    width: 190px;
    height: 105px;
    margin-top: -2px;
    margin-right: 18px;
    margin-bottom: 4px;
    float: left;
    overflow: hidden;
    background-position: 50%;
    background-size: cover;
    border-radius: 4px;
    transform: translateZ(0);
  }

  .blog-title-image:after {
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 26, 0.2);
    content: '';
  }

  .blog-title-image-inner {
    position: absolute;
    top: 50%;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateY(-50%);
    overflow: hidden;
  }

  .blog-title-image-inner img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate3d(-50%, -50%, 0);
  }

  .blog-content {
    max-height: 100px;
    margin-top: 16px;
    margin-bottom: -4px;
    overflow: hidden;
  }

  .blog-actions {
    clear: both;
    padding: 10px 20px;
    margin: 0 -20px -10px;
  }

  .blog-actions button {
    border: none;
    background-color: white;
  }
</style>
