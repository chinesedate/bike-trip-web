<template>
  <div>
    <top-page></top-page>
    <div class="blog-content-container">
      <div class="blog-title-edit">
        <span class="blog-title-tip" v-show="blogTitleStatus">请输入标题</span>
        <textarea class="blog-title" v-model="blogTitle" @click="blogTitleStatus = false" @blur="showBlogTitleTip"
                  autocomplete="off"></textarea>
      </div>
      <div class="blog-content-editor">
        <quill-editor v-model="content"
                      :options="editorOption"
                      >
        </quill-editor>
      </div>

    </div>
  </div>
</template>
<style>
  .button {
    width: 20px;
    height: 20px;
  }

  .blog-content-editor {
    height: 50px;
    width: 100%;
  }

  .blog-content-container {
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
        blogTitle: "",
        blogContent: [
          {
            con: "a"
          },
          {
            con: "b"
          }],
        editorOption:{
          modules:{
            toolbar:[
              ['bold', 'italic'],
              [{'header':2}],
              [{'list':'ordered'},{'list':'bullet'}],
              ['link','image','video']
            ]
          }

        }

      }
    },
    components: {
      'top-page': TopPage,
      'test': {
        render: function (createElement) {
          return createElement(
            'h',   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
          )
        }
      }
    },
    methods: {
      showBlogTitleTip() {
        if (this.blogTitle.toString() === "") {
          this.blogTitleStatus = true;
        }
      },
      show(event) {
        // console.log(event.target.innerHTML)
        // console.log("x:" + event.offsetX + "  y:" + event.offsetY)
      },
      showContent() {
        for (let a of this.blogContent) {
          console.log(a.con)
        }
      }
    }
  }
</script>
