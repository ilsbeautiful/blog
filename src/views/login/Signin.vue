<template>
  <div id="Login">
    <NavBars/>
    <div class="animation loginbox">
      <div slot="label" class="label">登录</div>
      <el-form ref="form" :model="form"  :rules="rules" >
        <el-form-item  prop="name" class="iteminput">
          <el-input v-model="form.name" autocomplete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="iteminput">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <h3><a href="/">忘记密码?</a></h3>
        <el-form-item>
          <el-button type="primary" @click="signin">登录</el-button>
          <el-button @click.native="$router.push('/signup')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'

import { signup, signin } from "network/home"

export default {
  name: "Login",
  components: {
    NavBars
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        if (this.form.name.length > 16) {
          callback(new Error('账号太长了~'));
        }
        callback();
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    }
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    if(localStorage.getItem('token')) {
      // this.$router.push('/logined')
    }
  },
  methods: {
    signin() {
      signin(this.form).then(res => {
        // this.$store.dispatch('getusernames',this.form.name)
        const name = res.data.data[0].name;
        const token = res.data.token;
        if (res.data.err === 0) {
        // this.$store.commit('getusername',this.form.name)
          localStorage.setItem('name', name)
          localStorage.setItem('token', token)
          setTimeout(() => {
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            })
          }, 500)
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000)
        } else {
          if (res.data.err === 1) {
            setTimeout(() => {
              this.$message.error('账号或密码出错');
            }, 1000)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  #Login {
    padding-top: 14rem;
  }

  .loginbox {
    padding-top: 0px;
    padding: 40px;
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
  }
  .loginbox h3 {
    text-align: right;
    margin-bottom: 20px;
  }
  .loginbox h3 a {
    font-size: 13px;
    color: #999;
    font-weight: 100;
  }
  .el-form {
    position: relative;
    width: 100%;
  }

  .el-form-item {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
  }

  .iteminput >>> .el-form-item__content{
    width: 100%;
  }

  .label {
    position: relative;
    color:#666;
    font-weight: bold;
    font-size: 24px;
    height: 32px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    .loginbox {
      padding-top: 0px;
      height: 320px;
      width: 75%;
      margin: auto;
      background-color: #fff;
    }
    .label {
      font-size: 25px;
      left: 56px;
      top: 40px;
    }
    .el-form {
      position: relative;
      top: 70px;
      width: 100%;
    }
    #Login {
      padding-top: 8rem;
    }
  }
</style>