<template>
  <div id="Login">
    <NavBars/>
    <el-form :model="form" status-icon :rules="rules" ref="form" class="demo-ruleForm">
      <el-form-item prop="name">
         <span slot="label" class="label">账号：</span>
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
         <span slot="label" class="label">密码：</span>
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkpass">
         <span slot="label" class="label">确认密码：</span>
        <el-input type="password" v-model="form.checkpass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="age">
         <span slot="label" class="label">年龄：</span>
        <el-input v-model.number="form.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sign_up('form')">注册</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button @click.native="$router.push('/signin')">已有账号，去登陆</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'
import { signup, signin } from "network/home"

export default {
  name: "Signup",
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
      };
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkpass !== '') {
            this.$refs.form.validateField('checkpass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      form: {
          name: '',
          password: '',
          checkpass: '',
          age: ''
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkpass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
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
    onlogin() {
      login(this.form).then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token)
          this.$router.push('/')
        }
      })
    },
    postname() {
      postuser(this.form).then(res => {
        console.log(res);
        // console.log(res.data.token);
        if (res.status ===200) {
          // this.$store.commit('')
          localStorage.setItem('token', res.data.token)
          setTimeout(() => {
            this.$router.push('/')
          }, 1500);
        }
      })
    },

     sign_up(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            const datas = {
              name: this.form.name,
              password: this.form.password,
              age: this.form.age
            }
            signup(datas).then(res => {
              console.log(res);
              if (res.status === 200) { 
                alert('注册成功');
                localStorage.setItem('token', res.data.token)
                setTimeout(() => {
                  this.$router.push('/')
                }, 2000);
              }
            })
          } else {
            console.log('error signup!!');
            return false;
          }
        });
      },
      resetForm(form) {
        this.$refs[form].resetFields();
      }
    }
  
  
}
</script>

<style>
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