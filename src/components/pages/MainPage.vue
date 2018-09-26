<template>
  <div id="main-page">
    <div class="main-container">
      <div class="left-container">
        <div class="top-tab">
          <ul class="tab-list">
            <li class="tab-item" @click="tabChange('1')">
              <router-link to="/" class="tab-link" :class="{'is-active':getTabNum === '1'}">推荐</router-link>
            </li>
            <li class="tab-item" @click="tabChange('2')">
              <router-link to="/" class="tab-link" :class="{'is-active':getTabNum === '2'}">线路</router-link>
            </li>
            <li class="tab-item" @click="tabChange('3')">
              <router-link to="/" class="tab-link" :class="{'is-active':getTabNum === '3'}">商店</router-link>
            </li>
            <li class="tab-item" @click="tabChange('4')">
              <router-link to="/" class="tab-link" :class="{'is-active':getTabNum === '4'}">民宿</router-link>
            </li>
          </ul>
        </div>
        <div class="blog-container">
          <div v-for="(blog,index) in blogList" class="blog-item">
            <h2 class="blog-title">
              <router-link to="/">{{blog.title}}</router-link>
              <div class="blog-main"></div>
            </h2>
          </div>
        </div>
      </div>
      <div class="right-container"></div>
    </div>
    <!--<div class="blog-container" v-for="(blog, index) in blogList">-->
    <!--<div class="blog-item">-->
    <!--<p class="blog-title" v-html="blog.title"></p>-->
    <!--<div class="blog-content">-->
    <!--<img v-if="blog.titleImageUrl" :src="blog.titleImageUrl">-->
    <!--<p v-html="blog.content"></p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>
<style>
  #main-page {
    height: 100%;
    width: 100%;
  }

  .main-container {
    display: flex;
    align-items: flex-start;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
  }

  .left-container {
    flex-shrink: 0;
    margin-right: 10px;
    margin-bottom: 0;
    width: 694px;
  }

  .top-tab {
    margin-bottom: 0;
    box-shadow: none;
    border-bottom: 1px solid #f0f2f7;
    width: 100%;
  }

  .tab-item {
    list-style-type: none;
    display: inline-block;
    padding: 0 20px;
  }

  .tab-link {
    padding: 18px 0;
    position: relative;
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    color: #1a1a1a;
    text-align: center;
    text-decoration: none;
  }

  .tab-link.is-active {
    font-weight: 600;
  }

  .tab-link.is-active:after {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -1px;
    height: 3px;
    background: #0084ff;
    content: " ";
  }

  .blog-container {
    min-height: 100vh;
  }

  .right-container {
    flex: 1;
    font-size: 14px;
  }

  /*.blog-container{*/
  /*list-style: none;*/
  /*width: 1000px;*/
  /*margin: 0 auto;*/
  /*}*/
  /*.blog-item{*/
  /*padding:20px;*/
  /*}*/
  /*.blog-content{*/
  /*width: 770px;*/
  /*height: 200px;*/
  /*}*/
  /*.blog-title{*/
  /*font-size: medium;*/
  /*}*/
</style>
<script>
  export default {
    data() {
      return {
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
      },
      tabChange: function (tabNum) {
        this.$store.commit('tab', {
          num: tabNum
        });
      }
    },
    computed: {
      getTabNum: function () {
        return this.$store.state.tabNum
      }
    }
  }
</script>
