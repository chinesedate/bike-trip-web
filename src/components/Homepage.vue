<template>
  <div class="home">
    <headPage></headPage>
    <div id="content">
      <div class="hot-photoes">
        <div class="mosaic-left">
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
        </div>
        <div class="slider"></div>
        <div class="mosaic-right">
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
          <a href="/blog/12" class="tile">
            <img src="../assets/blog/140130.jpg">
          </a>
        </div>
      </div>
      <div class="hot-lines">
        <p>热门路线</p>
        <div class="hot-lines-wrap">
          <a href="/blog/12" class="line">
            <figure class="img">
              <img src="../assets/blog/140130.jpg">
              <figcaption>
                环千岛湖
              </figcaption>
            </figure>
          </a>
          <a href="/blog/12" class="line">
            <figure class="img">
              <img src="../assets/blog/140130.jpg">
              <figcaption>
                环青海湖
              </figcaption>
            </figure>
          </a>
          <a href="/blog/12" class="line">
            <figure class="img">
              <img src="../assets/blog/140130.jpg">
              <figcaption>
                环海南岛
              </figcaption>
            </figure>
          </a>
          <a href="/blog/12" class="line">
            <figure class="img">
              <img src="../assets/blog/140130.jpg">
              <figcaption>
                318
              </figcaption>
            </figure>
          </a>
          <a href="/blog/12" class="line">
            <figure class="img">
              <img src="../assets/blog/140130.jpg">
              <figcaption>
                川藏线
              </figcaption>
            </figure>
          </a>
          <a href="/blog/12" class="line">
            <figure class="img">
              <img src="../assets/blog/140130.jpg">
              <figcaption>
                青藏线
              </figcaption>
            </figure>
          </a>


        </div>
      </div>
    </div>
    <footPage></footPage>
  </div>
</template>

<script>
  import Head from 'components/Head.vue';
  import Foot from 'components/Foot.vue';

  export default {
    name: 'Homepage',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      headPage: Head,
      footPage: Foot
    }
  }
</script>

<style>
  #content {
    height: 2000px;
    width: 100%;
    overflow: hidden;
  }

  .hot-photoes {
    height: 450px;
    width: 1000px;
    position: relative;
    margin: 0 auto;
  }

  .mosaic-left {
    width: 452px;
    height: 450px;
    position: absolute;
    top: 0;
    left: -452px;
  }

  .mosaic-left a {
    float: right;
    margin: 0 7px 7px 0;
    opacity: 0.5;
  }

  .mosaic-left a:hover {
    opacity: 1;
  }

  .slider {
    width: 1200px;
    height: 450px;
  }

  .mosaic-right {
    width: 452px;
    height: 450px;
    position: absolute;
    right: -452px;
    top: 0;
  }

  .mosaic-right a {
    float: left;
    margin: 0 0 7px 7px;
    opacity: 0.5;
  }

  .mosaic-right a:hover {
    opacity: 1;
  }

  .hot-lines {
    width: 1000px;
    height: 450px;
    margin: 0 auto;
    font-size: 16px;
  }

  .hot-lines-wrap {
    width: 100%;
    height: 300px;
  }

  .hot-lines-wrap .line {
    float: left;
    width: 140px;
    height: 103px;
    margin: 10px 15px 0 10px;
  }

</style>
