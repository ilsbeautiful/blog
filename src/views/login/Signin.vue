<template>
  <div id="Login">
    <NavBars/>
    <el-form ref="form" :model="form"  :rules="rules" >
      <el-form-item  prop="name">
         <span slot="label" class="label">账号：</span>
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
         <span slot="label" class="label">密码：</span>
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signin">登录</el-button>
        <!-- <el-button @click="onSubmit">注册</el-button> -->
        <el-button @click.native="$router.push('/signup')">注册</el-button>
      </el-form-item>
    </el-form>
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
      this.$router.push('/')
    }
  },
  methods: {
    signin() {
      signin(this.form).then(res => {
        // this.$store.dispatch('getusernames',this.form.name)
        // console.log(res);
        if (res.data.err === 0) {
        // this.$store.commit('getusername',this.form.name)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('name', this.form.name)
          setTimeout(() => {
            this.$router.push('/')
          }, 1500)
        } else {
          if (res.data.err === 1) {
            setTimeout(() => {
              alert('账号或密码出错')
            }, 1500)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  #Login {
    padding-top: 15rem;
    text-align: center;
    width: 800px;
    margin: auto;
  }
  .el-form-item {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .el-form-item div {
    width: 24rem;
  }
  .el-form-item__label {
    width: 220px;
  }
  .label {
    width: 100px;
    color:#f7f7f7;
    /* padding-top: 5rem; */
    text-align: center;
    font-weight: bold;
    font-size: 30px;
  }
</style>