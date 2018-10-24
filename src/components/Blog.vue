<template>
  <div>
    <base-top></base-top>
    <div class="deatil-wrap clearfix">
      <div class="side-left">
        <h1>{{blog.title}}</h1>
        <div class="content clearfix">
          <div class="left-tool">
            <div class="tool-wrap">
              <div class="year">
                <span>{{blog.createdAt | dateFormat("YEAR")}}</span>
              </div>
              <div class="md">
                {{blog.createdAt | dateFormat("MD")}}
              </div>
              <div class="time">
                {{blog.createdAt | dateFormat("TIME")}}
              </div>
              <div>
                <router-link :to="{name:'Author', params:{id:blog}}" target="_blank">
                  <div class="author-avatar">
                    <img class="avatar" v-if="blog.author.avatarUrl" :src="blog.author.avatarUrl" alt="用户头像">
                    <img class="avatar" v-else src="../assets/user/default_avatar.jpeg" alt="用户头像">
                  </div>
                  <div class="author-nickname">
                    <span>{{blog.author.nickname}}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="content-blog">
            <div v-html="blog.content"></div>
          </div>
        </div>
        <!--<div class="caption-sub">-->
        <!--<div class="caption-info"></div>-->
        <!--<div class="caption-numbers">-->
        <!--<span class="view-count">阅读 123-->
        <!--</span>-->
        <!--<span class="like-count">点赞 25-->
        <!--</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="main-text" v-html="blog.content"></div>-->
      </div>
      <div class="side-right"></div>
    </div>
    <base-foot></base-foot>
  </div>
</template>
<script>
  import BaseTop from '../components/BaseTop'
  import BaseFoot from '../components/BaseFoot'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {
          author: {}
        }
      }
    },
    components: {
      'base-top': BaseTop,
      'base-foot': BaseFoot
    },
    created: function () {
      console.log("created.....................................");
      this.queryBlogOne();

    },
    methods: {
      queryBlogOne: function () {
        console.log("querying......................")

        const self = this;
        self.$ajax({
          method: 'get',
          url: '/blog/one/' + self.id
        }).then(
          function (res) {
            if (res.data.status === 1) {
              self.blog = res.data.data;
              console.log(self.blog);
            }
          }
        ).catch();
      }
    },
    filters: {
      dateFormat(createdAt, type) {
        let date = new Date(createdAt);
        if (type === 'YEAR') {
          return date.getFullYear();
        } else if (type === "MD") {
          return (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1) + "/" + (date.getDate() < 10 ? "0" : "") + date.getDate();
        } else if (type === "TIME") {
          return date.getHours() + ":" + date.getMinutes();
        }
      }
    }
  }
</script>
<style>
  .deatil-wrap {
    width: 1240px;
    margin: 20px auto 40px;
  }

  .side-left {
    width: 890px;
    float: left;
  }

  .side-left h1 {
    font-size: 30px;
    line-height: 1.5;
    margin-top: 8px;
    margin-bottom: 25px;
    color: #333;
  }

  .side-right {
    width: 300px;
    float: right;
  }

  .left-tool {
    width: 80px;
    padding-right: 30px;
    margin-right: 30px;
    text-align: center;
  }

  .left-tool .year {
    color: #000;
    font-family: Politica;
    font-size: 20px;
  }

  .left-tool .year span {
    display: inline-block;
    background: #fff;
    padding: 0 5px;
  }

  .left-tool .md {
    color: #000;
    font-family: Politica;
    font-size: 20px;
    line-height: 1.2;
  }

  .left-tool .time {
    font-size: 20px;
    color: #000;
    font-family: Politica;
    margin-bottom: 25px;
  }

  .tool-wrap {
    position: relative;
    width: 80px;
    transition: all .5s;

  }

  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }

  .avatar {
    width: 100%;
    height: 100%;
  }

  .author-nickname {
    margin-top: 10px;
  }

  .clearfix:after {
    clear: both;
    content: "";
    display: block;
  }

  .content-blog {
    min-height: 700px;
  }
</style>
