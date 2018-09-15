<template>
  <div class="add-blog-container">
    <base-top></base-top>
    <div class="content-save-container">
      <input type="button" value="保存" @click="saveContent()">
    </div>
    <div class="content-container">
      <div class="blog-content-container">
        <div class="blog-title-edit">
          <span class="blog-title-tip" v-show="blogTitleStatus">请输入标题</span>
          <textarea class="blog-title" v-model="blogTitle" @click="blogTitleStatus = false" @blur="showBlogTitleTip"
                    autocomplete="off"></textarea>
        </div>
      </div>
      <div class="blog-content-editor">
        <quill-editor v-model="content"
                      ref="blogQuillEditor"
                      :options="editorOption"
        >
        </quill-editor>
      </div>
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
  import BaseTop from '../components/BaseTop';
  import BaseFoot from './BaseFoot'

  export default {
    data() {
      return {
        blogTitleStatus: true,
        blogTitle: "",
        content: "",
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
                // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                // [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                // [{'direction': 'rtl'}],                         // text direction

                // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                // [{'header': [1, 2, 3, 4, 5, 6, false]}],

                [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                [{'font': []}],
                [{'align': []}],
                ['link', 'image', 'video']
                // ['clean']                                         // remove formatting button
              ],
              handlers: {
                'image': function (value) {
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

        }

      }
    },
    components: {
      'base-top': BaseTop,
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
      uploadSuccess(res,file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.blogQuillEditor.quill
        // 如果上传成功
        if (res.status === 1) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', res.data)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false
      },
      uploadError() {

      },
      // 覆盖el-upload默认的文件上传行为
      imageUpload(item) {
        var bodyFormData = new FormData();
        bodyFormData.set("image",item.file);
        this.$ajax({
          method:'post',
          headers:{
            'Content-Type':'multipart/form-data'
          },
          url:'blog/image/upload',
          data:bodyFormData
        }).then(function (res) {
          item.onSuccess(res.data)
          }
        ).catch(function (res) {
          item.onError(res.data)
          }

        );
      },
      saveContent() {
        var blogData = new FormData();
        blogData.set("title", this.blogTitle);
        blogData.set("content", this.content);
        this.$ajax({
          method:'post',
          headers:{
            'Content-Type':'multipart/form-data'
          },
          url:'/blog/content/save',
          data:blogData
        }).then(function (res) {
            item.onSuccess(res.data)
          }
        ).catch(function (res) {
            item.onError(res.data)
          }

        );

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
  .content-save-container{
    position:fixed;
    top: 150px;
    right: 100px;
    width: 40px;
    height: 40px;
  }
  .content-container {
    margin-top: 38px;
  }

  .blog-content-container {
    width: 770px;
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
    border-style: hidden hidden solid;
    border-bottom: 1px solid black;
    outline: none;

  }

  .blog-content-editor {
    width: 770px;
    margin: 20px auto 0;
  }

  .custom-button {
    outline: none;
  }
</style>
