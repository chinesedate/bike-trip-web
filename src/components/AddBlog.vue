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
      </quill-editor>
    </div>
    <base-foot class="foot-container"></base-foot>
    <el-upload
      class="avatar-uploader"
      action=""
      :http-request="imageUpload"
      name="img"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
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
        serverUrl: '',  // 这里写你要上传的图片服务器地址
        header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
        editorOption: {
          placeholder: "请输入正文",
          modules: {
            toolbar: {
              container: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{'header': 1}, {'header': 2}],               // custom button values
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                [{'direction': 'rtl'}],                         // text direction

                [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                [{'header': [1, 2, 3, 4, 5, 6, false]}],

                [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                [{'font': []}],
                [{'align': []}],
                ['link', 'image', 'video'],
                ['clean']                                         // remove formatting button
              ],
              handlers: {
                'image': function (value) {
                  console.log("aaaaaaaaaaaaaaaaaaaa");
                  if (value) {
                    // 触发input框选择图片文件
                    document.querySelector('.avatar-uploader input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
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
      beforeUpload() {

      },
      uploadSuccess() {

      },
      uploadError() {

      },
      // 覆盖el-upload默认的文件上传行为
      imageUpload(param) {
        // let params = this.$qs.stringify({
        //   file:param.file
        // });
        var bodyFormData = new FormData();
        bodyFormData.set("image",param.file);
        this.$ajax({
          method:'post',
          headers:{
            'Content-Type':'multipart/form-data'
          },
          url:'blog/image/upload',
          data:bodyFormData
        }).then().catch();
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

  .custom-button {
    outline: none;
  }
</style>
