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
        <blog-tab v-if="getTabNum === '1'" class="tab-container"></blog-tab>
        <route-tab v-else-if="getTabNum === '2'" class="tab-container"></route-tab>
        <shop-tab v-else-if="getTabNum === '3'" class="tab-container"></shop-tab>
        <hotel-tab v-else-if="getTabNum === '4'" class="tab-container"></hotel-tab>
      </div>
      <div class="right-container"></div>
    </div>
  </div>
</template>
<style>
  #main-page {
    height: 100%;
    width: 100%;
    overflow: hidden;
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

  .tab-container {
    min-height: 100vh;
  }

  .blog-title-image-inner img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate3d(-50%, -50%, 0);
  }


  .right-container {
    flex: 1;
    font-size: 14px;
  }

  .blog-actions button {
    border: none;
    background-color: white;
  }

</style>
<script>
  import BlogTab from '../pages/main-page/BlogTab'
  import RouteTab from '../pages/main-page/RouteTab'
  import ShopTab from '../pages/main-page/ShopTab'
  import HotelTab from '../pages/main-page/HotelTab'

  export default {
    data() {
      return {
        blogList: []
      }
    },
    components: {
      'blog-tab': BlogTab,
      'route-tab': RouteTab,
      'shop-tab': ShopTab,
      'hotel-tab': HotelTab
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
      },
      actionLike: function () {

      }
    },
    computed: {
      getTabNum: function () {
        return this.$store.state.tabNum
      }
    }
  }
</script>
