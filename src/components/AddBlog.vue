<template>
  <div>
    <top-page></top-page>
    <div class="blog-content-container">
      <div class="blog-title-edit">
        <span class="blog-title-tip" v-show="blogTitleStatus">请输入标题</span>
        <textarea class="blog-title" v-model="blogTitle" @click="blogTitleStatus = false" @blur="showBlogTitleTip"
                  autocomplete="off"></textarea>
      </div>
    </div>
    <div class="blog-content-editor">
      <quill-editor v-model="content"
                    :options="editorOption"
      >
      </quill-editor>
    </div>
    <base-foot class="foot-container"></base-foot>
  </div>
</template>
<script>
  import TopPage from '../components/pages/TopPage';
  import BaseFoot from './BaseFoot'

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
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic'],
              [{'header': 2}],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['link', 'image', 'video']
            ]
          }

        },
        content: ""

      }
    },
    components: {
      'top-page': TopPage,
      'base-foot': BaseFoot
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
<style>
  .quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {

    height: 500px;
    padding-bottom: 10px;
  }
</style>
<style scoped>
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

  .blog-content-editor{
    width: 800px;
    margin: 0 auto;
  }
</style>
