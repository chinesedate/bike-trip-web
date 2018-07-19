<template>
  <div class="add-blog-container">
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
        <div id="toolbar" slot="toolbar">
          <!-- Add font size dropdown -->
          <select class="ql-size">
            <option value="small"></option>
            <!-- Note a missing, thus falsy value, is used to reset to default -->
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>
          <!-- Add a bold button -->
          <button class="ql-bold"></button>
          <!-- Add subscript and superscript buttons -->
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>

          <button type="button" class="custom-button"  @click.prevent="customClick">
            <svg viewBox="0 0 18 18">
              <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
              <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
              <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
            </svg>
          </button>

        </div>
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
          placeholder: "请输入正文",
          modules: {
            toolbar: "#toolbar"
          },
          scrollingContainer: ".blog-content-editor"

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
      },
      customClick() {
      }
    }
  }
</script>
<style>
  .quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {

    height: auto;
    min-height: 300px;
    margin: 0 auto;
    padding-bottom: 300px;
  }
</style>
<style scoped>
  .add-blog-container {
    overflow-y: visible;
  }

  .blog-content-container {
    width: 1020px;
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
    background: 0 0;
  }

  .blog-content-editor {
    width: 1020px;
    margin: 0 auto;
  }
  .custom-button{
    outline: none;
  }
</style>
