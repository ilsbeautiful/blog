<template>
  <div class="Logined">
    <NavBars/>
    <div v-if="isshow" class="myinfo animation">
      <div><el-page-header @back="goBack" content="个人中心" class="title"></el-page-header></div>
      <div class="headimg">
        <div class="headphoto">
          <img :src="url" alt="">
        </div>
        <div v-show="flag" class="elect">
          <input type="file" name="file" @input="FileUpload()" ref="input" style="display:none"/>
          <a href="#" @click="addimg">选择头像</a>
        </div>
      </div>
      <div class="info">
        <p class="title">昵称：<input :class="{active:!flag}" :disabled="!flag" class="input" type="text" v-model="name"></p>
        <p class="title">介绍：<input :class="{active:!flag}" :disabled="!flag" class="input" type="text" v-model="info"></p>
        <p class="title">邮箱：<input :class="{active:!flag}" :disabled="!flag" class="input" type="text" v-model="email"></p>
      </div>
      <div class="editmsg">
        <button @click="publish" v-show="!flag">发布文章</button>
        <button @click="clear" v-show="flag">取消</button>
        <button @click="updateinfo" v-show="!flag">编辑信息</button>
        <button @click="submit" v-show="flag">确认更改</button>
        <button @click="quit" v-show="!flag">退出登录</button>
      </div>
    </div>

  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'
import { getuser,insimg } from "network/home"
export default {
  name:'logined',
  props:{},
  components: {
    NavBars
  },
  computed: {
    isshow() {
      return localStorage.getItem('token') !== null
    }
  },
  data () {
    return {
      flag:false,
      showtd: false,
      data: {
        name: ''
      },
      name:'',
      email:'',
      info:'',
      url:''
    };
  },
  created() {
    this.data.token = localStorage.getItem('token')
    getuser(this.data).then(res => {
      if (res.data.err == 0) {
        this.name = res.data.data[0].name
        this.email = res.data.data[0].email
        this.info = res.data.data[0].info
        this.url = res.data.data[0].url
      } else if (res.data.err == 9) {
        this.$message.error('登录信息过期了');
        localStorage.clear();
        setTimeout(() => {
          this.$router.push("/home");
        }, 1500);
      }
    })
  },
  mounted() {
    if(localStorage.getItem('token')) {
      this.showtd = true
    }
  },
  methods: {
    quit() {
      localStorage.removeItem("token")
      localStorage.removeItem("name")
      this.$router.push('/article')
    },
    publish() {
      this.$router.push('/profile')
    },
    addimg() {
      this.$refs.input.click()
    },
    FileUpload() {
      window.URL = window.URL || window.webkitURL;
      var file = this.$refs.input.files;
      // console.log(this.$refs.input.files[0]);
      if (!file.length) {
        console.log('kong');
      } else {
        this.url = window.URL.createObjectURL(file[0]);
        // console.log(src);

      }
    },
    submit() {
      var formData = new FormData() // 声明一个FormData对象
      var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
      formData.append('singleFile',this.$refs.input.files[0])
      formData.append('name',this.name)
      formData.append('email',this.email)
      formData.append('info',this.info)
      formData.append('token',localStorage.getItem('token'))
      // console.log(localStorage.getItem('token'));

      insimg(formData).then(res => {
        // console.log(res);
        if(res.data.err == 0) {
          this.$message('修改信息成功')
          localStorage.setItem('name',this.name)
          setTimeout(() => {
            this.$router.replace('/home')
          }, 1000);
        } else {
          console.log('456');
        }
        // this.url.push(res.data.url) 
        // console.log(this.url);
      })
    },
    goBack() {
      console.log('go back');
    },
    updateinfo() {
      this.flag = true;
    },
    clear() {
      this.flag = false;
    }
  }
}
</script>

<style scoped>
  .Logined {
    padding-top: 8rem;
    /* text-align: center; */
  }

  .myinfo {
    position: relative;
    left: 10rem;
  }

  .headimg {
    position: relative;
    margin-top: 3rem;
    left: 10%;
    width: 150px;
  }
  .elect {
    text-align: center;
    margin: 1.5rem 0 0 0;
  }
  .headphoto {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
  .headphoto img {
    width: 100%;
    height: 100%;
  }
  .active {
    background: transparent!important;
    border: none;
  }
  .input {
    width: 50rem;
    border: 0;
    outline: none;
    padding: 0.2rem;
    transition: all .5s;
    font-weight: bold;
    border-radius: 0.2rem;
    margin-left: 0.2rem;
    background: #95f0ff24;
  }
  .info {
    margin-top: 3rem;
    left: 2rem;
    position: absolute;
  }

  .title {
    margin: 2rem 0;
    color: dodgerblue;
    font-weight: bold;
    font-size: 28px;
    font-family: 'Cabin Sketch', cursive;
  }

  .title span {
    color:brown;
  }
  
  .editmsg {
    position: absolute;
    margin-top: 19rem;
    left: 6rem;
  }

  button {
    outline: none;
    width: 100px;
    height: 40px;
    left: 9rem;
    border-radius: 10px;
    border: none;
    margin: 10px;
    cursor: pointer;
    background-color:#3eaf984d;
  }
</style>