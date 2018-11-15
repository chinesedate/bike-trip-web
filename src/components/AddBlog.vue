<template>
  <div class="add-blog-container">
    <base-top></base-top>
    <div class="title-container">
      <div class="title-image-wrap">
        <img v-if="titleImageUrl" :src="titleImageUrl" class="title-image">
        <el-upload
          v-else
          class="title-image-uploader"
          action=""
          :http-request="uploadTitleImage"
          :show-file-list="false"
          :on-success="uploadSuccessTitleImage"
          :on-error="uploadErrorTitleImage"
          :before-upload="beforeTitleImageUpload"
          accept="image/jpg,image/jpeg,image/gif,image/png">
          <i class="el-icon-plus title-image-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="title-text-wrap">
      <input class="title-text" v-model="blogTitle" @click="titleTip = ''" @blur="showTitleTip()"
             :placeholder="titleTip" autocomplete="off">
    </div>
    <div class="content-container">
      <div class="content-ctrl">
        <div class="ctrl-button">
          <el-button type="text" @click="saveDraft()">保存草稿</el-button>
        </div>
        <div class="ctrl-button">
          <el-button type="text">预览</el-button>
        </div>
        <div class="ctrl-button">
          <el-button type="text">发布游记</el-button>
        </div>
      </div>
      <div class="blog-content-editor" @click="moveScrollBar($event)">
        <quill-editor v-model="content"
                      ref="blogQuillEditor"
                      :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
    <el-upload
      class="avatar-uploader-hide"
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
<style>
  .quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {
    height: auto;
    min-height: 300px;
    margin: 0 auto;
    line-height: 3;
  }

  .ql-container.ql-snow, .ql-toolbar.ql-snow {
    border: none;
  }

  .title-image-uploader {
    width: 100%;
    height: 100%;
  }

  .title-image-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    height: 178px;
    margin: auto;
    /*overflow: hidden;*/
    /*border-color: #409EFF;*/
  }

  .title-image-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .title-image-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 280px;
    height: 178px;
    line-height: 178px;

  }
</style>
<style scoped>
  .add-blog-container {
    overflow-y: visible;
  }

  .content-container {
    width: 870px;
    margin: 40px auto;
  }

  .content-container:after {
    content: "";
    display: block;
    clear: both;
  }

  .blog-title-tip {
    font-size: 34px;
    line-height: 50px;
    position: absolute;
    z-index: -1;
  }

  .blog-title {
    resize: none;
    height: 100%;
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
    float: right;
    margin-right: 20px;
    margin-bottom: 100px;
  }

  .custom-button {
    outline: none;
  }

  .blog-title-image-container {
    width: 770px;
    margin: 0 auto;
  }

  .blog-title-image-container {
    width: 770px;
    height: 178px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  /*.avatar-uploader-icon {*/
  /*font-size: 28px;*/
  /*color: #8c939d;*/
  /*width: 770px;*/
  /*height: 178px;*/
  /*line-height: 178px;*/
  /*text-align: center;*/
  /*}*/

  .title-container {
    height: 640px;
    background: #f7f8f9;
    position: relative;
  }

  .title-image-wrap {
    /*width: 280px;*/
    /*height: 178px;*/
    /*margin: auto;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
    width: 100%;
    height: 100%;
  }

  .title-text-wrap {
    width: 870px;
    height: 20px;
    padding: 30px 0 10px;
    margin: 10px auto;
    border-bottom: 1px dashed black;
  }

  .title-text {
    height: 100%;
    width: 100%;
    overflow: auto;
    background: 0 0;
    border-style: none;
    outline: none;
    font-size: 18px;
    padding: 0 20px;
  }

  .content-ctrl {
    width: 60px;
    height: 200px;
    float: left;
  }

  .title-image {
    width: 100%;
    height: 100%;
  }
</style>
<script>
  import BaseTop from '../components/BaseTop';
  // import BaseFoot from './BaseFoot'

  export default {
    data() {
      return {
        titleTip: "输入游记标题（最多50个字）",
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
                ['bold', 'italic'],        // toggled buttons
                // ['blockquote', 'code-block'],

                [{'header': 1}, {'header': 2}],               // custom button values
                [{'list': 'ordered'}, {'list': 'bullet'}],
                // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                // [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                // [{'direction': 'rtl'}],                         // text direction

                // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                // [{'header': [1, 2, 3, 4, 5, 6, false]}],

                // [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                // [{'font': []}],
                // [{'align': []}],
                ['link', 'image', 'video']
                // ['clean']                                         // remove formatting button
              ],
              // container: '#toolbar',
              handlers: {
                'image': function (value) {
                  if (value) {
                    // 触发input框选择图片文件
                    document.querySelector('.avatar-uploader-hide input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          },
          scrollingContainer: ".add-blog-container"

        },
        titleImageUrl: ""   // 题图地址
      }
    },
    components: {
      'base-top': BaseTop,
      // 'base-foot': BaseFoot
    },
    methods: {
      showTitleTip() {
        if (this.blogTitle.toString() === "") {
          this.titleTip = "输入游记标题（最多50个字）";
        }
      },
      showBlogTitleTip() {
        if (this.blogTitle.toString() === "") {
          this.blogTitleStatus = true;
        }
      },
      show(event) {
        // console.log(event.target.innerHTML)
        // console.log("x:" + event.offsetX + "  y:" + event.offsetY)
      },
      moveScrollBar(event) {

        console.log("x:" + event.clientX + "  y:" + event.clientY + " screen:" + window.innerHeight)
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");

        let height = window.innerHeight - event.clientY;
        if (height <= 100) {
          console.log("height:" + height)
          window.scrollBy(0, 100 - height)
        }

      },
      beforeUpload() {

      },
      uploadSuccess(res, file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.blogQuillEditor.quill
        // 如果上传成功
        if (res.status === 1) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertText(length, '\n');
          quill.insertEmbed(length + 1, 'image', res.data)
          quill.insertText(length + 2, '\n');
          // 调整光标到最后
          quill.setSelection(length + 3)
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

        var self = this;
        var reader = new FileReader;
        reader.readAsDataURL(item.file);
        reader.onload = function (evt) {
          var image = new Image();
          image.src = evt.target.result;
          image.onload = function () {
            // if (image.width < 1000 || image.height < 300) {
            //   item.onError("请上传宽不小于1000，高不小于300的图片")
            // }
            // 上传图片到服务器
            var bodyFormData = new FormData();
            bodyFormData.set("image", item.file);
            self.$ajax({
              method: 'post',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              url: 'blog/image/upload',
              data: bodyFormData
            }).then(function (res) {
                console.log("图片上传成功。。。。。")
                item.onSuccess(res.data)
              }
            ).catch(function (res) {
                item.onError(res.data)
              }
            );
          };
        };

      },

      // 保存博客
      saveContent() {
        var blogData = new FormData();
        blogData.set("authorId", this.$store.state.userId);
        blogData.set("titleImageUrl", this.titleImageUrl);
        blogData.set("title", this.blogTitle);
        blogData.set("content", this.content);
        this.$ajax({
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          url: '/blog/content/save',
          data: blogData
        }).then(function (res) {
            item.onSuccess(res.data)
          }
        ).catch(function (res) {
            item.onError(res.data)
          }
        );

      },

      // 保存草稿
      saveDraft() {
        console.log("userid:" + this.$store.state.userId);
        var blogData = new FormData();
        blogData.set("authorId", this.$store.state.userId);
        blogData.set("titleImageUrl", this.titleImageUrl);
        blogData.set("title", this.blogTitle);
        blogData.set("content", this.content);
        this.$ajax({
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          url: '/blog/draft/save',
          data: blogData
        }).then(function (res) {
            item.onSuccess(res.data)
          }
        ).catch(function (res) {
            item.onError(res.data)
          }
        );

      },

      // 上传题图前进行校验
      beforeTitleImageUpload(file) {

        const isImage = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isImage) {
          this.$alert('上传文件只支持 jpg,png 格式!', '文件格式错误', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
          // this.$message.error('上传文件只支持 jpg,png 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isImage && isLt2M;
      },

      // 上传题图
      uploadTitleImage(item) {
        var self = this;
        var reader = new FileReader;
        reader.onload = function (evt) {
          var image = new Image();
          image.src = evt.target.result;
          image.onload = function () {
            if (image.width < 1350 || image.height < 480) {
              item.onError("请上传宽度不小于1350，高度不小于480的图片")
            } else {
              // 上传图片到服务器
              var bodyFormData = new FormData();
              bodyFormData.set("image", item.file);
              self.$ajax({
                method: 'post',
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                url: 'blog/image/upload',
                data: bodyFormData
              }).then(function (res) {
                  item.onSuccess(res.data)
                }
              ).catch(function (res) {
                  item.onError(res.data)
                }
              );
            }
          };
        };
        reader.readAsDataURL(item.file);
      },

      // 题图上传成功后动作
      uploadSuccessTitleImage(res, file) {
        // res为图片服务器返回的数据
        // 如果上传成功
        if (res.status === 1) {
          this.titleImageUrl = res.data;
        } else {
          this.$message.error('图片插入失败')
        }
      },

      // 题图上传失败后动作
      uploadErrorTitleImage(err, file) {
        this.$alert(err, '图片尺寸错误', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }

    },
    directives: {
      focus: {
        inserted: function () {

        }
      }
    }
  }
</script>
