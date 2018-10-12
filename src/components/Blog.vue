<template>
  <div>
    <base-top></base-top>
    <div class="deatil-wrap">
      <div class="side-left">
        <div class="caption">
          {{blog.title}}
        </div>
        <div class="caption-sub">
          <div class="caption-info"></div>
          <div class="caption-numbers">
            <span class="view-count">阅读 123
            </span>
            <span class="like-count">点赞 25
            </span>
          </div>
        </div>
        <div class="main-text" v-html="blog.content"></div>
      </div>
      <div class="side-right"></div>
    </div>
  </div>
</template>
<script>
  import BaseTop from '../components/BaseTop'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    components: {
      'base-top': BaseTop
    },
    mounted: function () {
      this.queryBlogOne();
    },
    methods: {
      queryBlogOne: function () {
        const self = this;
        self.$ajax({
          method: 'get',
          url: '/blog/one/' + self.id
        }).then(
          function (res) {
            if (res.data.status === 1) {
              self.blog = res.data.data;
            }
          }
        ).catch();
      }
    }
  }
</script>
<style>
  .deatil-wrap {
    width: 1000px;
    margin: 20px auto 0;
  }

  .side-left {
    width: 625px;
    float: left;
  }

  .side-right {
    width: 275px;
    float: right;
  }

  .caption {
    padding: 0 10px;
    font-size: 24px;
  }

  .caption-sub {
    width: 100%;
    margin-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebebeb;
  }

  .caption-numbers {
    float: right;
    width: 200px;
  }

  .caption-sub:after {
    content: '';
    display: block;
    height: 0;
    font-size: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .like-count {
    margin-left: 10px;
  }
  .main-text{
    margin-top: 20px;
    min-height: 600px;
  }
</style>
