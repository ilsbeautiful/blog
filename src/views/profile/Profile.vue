<template>
  <div id="Profile" >
    <NavBars/>
    <el-form ref="form" class="form animation" :model="Form" >
      <el-form-item label="标题">
        <el-input v-model="Form.title"></el-input>
      </el-form-item>

      <el-form-item label="内容" >
        <div>
          <input type="file" name="file" @input="FileUpload()" ref="input" style="display:none"/>
          <a href="#" @click="addimg">添加图片</a>
        </div>
        <div class="cont-box" contenteditable="true" ref="contentbox"> 
          <img v-for="(item,index) in dialogImageUrl" :key="index" :src="item" alt="">
        </div>
        <!-- <Contentchild :child="content"></Contentchild> -->
         <!-- v-html="content" @blur="content=$event.target.innerHTML" -->
      </el-form-item>

      <el-form-item label="标签">
        <el-checkbox-group v-model="Form.label">
          <el-checkbox-button label="javascript" name="type"></el-checkbox-button>
          <el-checkbox-button label="html" name="type"></el-checkbox-button>
          <el-checkbox-button label="css" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      
      <el-form-item size="large">
        <el-button type="primary" @click="submit">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      
    </el-form>
  </div>
  <!-- <el-button style="margin-left: 10px;" size="mini" type="success" @click="submit">上传到服务器</el-button>
      <el-upload
          ref="upload"
          action="http://localhost:3000/upload/"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="uploads(this)"
          :auto-upload="false">
        <el-button slot="trigger" size="mini" type="text">选取文件</el-button>
      </el-upload>
      <div class="dialogs" v-show="centerssss">
        <div class="affirm">
          <span>确认图片</span>
          <img width="100%" :src="dialogImageUrl" alt="">
          <el-button class="button" @click="centerssss = false">取 消</el-button>
          <el-button type="primary" class="button" @click="centerssss = false">确 定</el-button>
        </div>
      </div> -->
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'
import Contentchild from '@/views/profile/Contentchild'
import { publish, Upload } from "network/home"

export default {
  name: "Profile",
  components: {
      NavBars,
      Contentchild
  },
  data() {
    return {
      Form: {
          name: '',
          title: '',
          content: '',
          label: [],
          time: '',
          singleFile: {}
        },
      dialogImageUrl: [],
      content: {},
      disabled: true
    }
  },
  created() {
    // this.Form.name = localStorage.getItem('name')
    // console.log(this.Form.name);
  },
	computed:{
	},
  methods: {
    addimg() {
      if(this.disabled){
        this.$refs.input.click()
        this.disabled = false
      } else {
        this.$message.error('只能插入一张图片哦~')
      }
    },
    FileUpload() {
      window.URL = window.URL || window.webkitURL;
      var file = this.$refs.input.files;
      // console.log(this.$refs.input.files[0]);
      if (!file.length) {
        console.log('kong');
      } else {
        var src = window.URL.createObjectURL(file[0]);
        this.dialogImageUrl.push(src)
        // console.log(src);
      }

      // var reader = new FileReader();
      // reader.addEventListener("load", function () {
      //   preview.src = reader.result;
      //   console.log(preview.src);
      // }, false);
    },
    submit() {
      var formData = new FormData() // 声明一个FormData对象
      var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
      formData.append('singleFile',this.$refs.input.files[0])
      formData.append('name',localStorage.getItem('name'))
      formData.append('title',this.Form.title)
      formData.append('content',this.$refs.contentbox.innerHTML)
      formData.append('label',this.Form.label)
      formData.append('time',this.dayjs().format('YYYY-MM-DD HH-mm-ss'))
      console.log(formData);
      publish(formData).then(res => {
        console.log(res);
        if (res.data.err === 0) {
          this.$message('发布成功')
          setTimeout(() => {
            this.$router.push('/article')
          }, 1000);
        } else {
          alert('发布失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.cont-box{
      width: 100%;
      height: auto;
      min-height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #fff3;
      border: 1px solid #dfdfdf;
      outline: none;
      padding: 10px;
  }
  .cont-box img {
    width: 100px;
    /* height: 100; */
  }
  .cont-box:empty:after {
    content: '详细内容';
    color: #ababab;
    font-size: 15px;
    text-align: left;
  }

/* .dialogs {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.affirm  {
    width: 30%;
    height: 300px;
    display: flex;
    text-align: center;
    position: relative;
    margin: 22vh auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
}
.affirm img {
  vertical-align: middle;
    display: inline-block;
    width: 70px;
    top: 50px;
    height: 70px;
    position: relative;
    z-index: 1;
    background-color: #FFF;
}
.affirm .button {
    bottom: 0px;
    margin: 0 10px;
    align-self: flex-end;
    width: 100px;
} */
  #Profile {
    width: 100%;
    /* background-image: url(~assets/img/home/mtimg.jpg); */
    background-size: 100%;
  }
  .form {
    position: relative;
    padding: 5px 10px;
    width: 80%;
    margin: auto;
    top: 50px;
    color: #333;
    /* background: #fff; */
  }
  .form input {
    width: 100%;
    height: 50px;
    margin: 15px 0;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 5px 10px;
  }
  .form button {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
</style>