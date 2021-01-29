<template>
  <div id="Login">
    <NavBars/>
    <div class="animation loginbox">
      <div slot="label" class="label">注册</div>
      <el-form :model="form" status-icon :rules="rules" ref="form" class="demoform">
        <el-form-item prop="name" class="iteminput">
          <el-input v-model="form.name" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="email" class="iteminput"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']} 
          ]">
          <el-input v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="iteminput">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="密码：6-12位英文、数字、下划线"></el-input>
        </el-form-item>
        <el-form-item prop="checkpass" class="iteminput">
          <el-input type="password" v-model="form.checkpass" autocomplete="off" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sign_up('form')">注册</el-button>
          <!-- <el-button @click="resetForm('form')">重置</el-button> -->
          <el-button @click.native="$router.push('/signin')">已有账号，去登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
    
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
          callback(new Error('请输入用户名'));
        } else {
          if (this.form.name.length > 16) {
            callback(new Error('用户名太长了~'));
          }
          callback();
        }
      };
   
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (this.form.password.length > 16){
          callback(new Error('密码太长了亲~'));
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
          email: ''
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
        },
    }
  },
  created() {
    if(localStorage.getItem('token')) {
      // this.$router.push('/')
    }
  },
  methods: {
    // onlogin() {
    //   login(this.form).then(res => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       localStorage.setItem('token', res.data.token)
    //       this.$router.push('/')
    //     }
    //   })
    // },
    // postname() {
    //   postuser(this.form).then(res => {
    //     console.log(res);
    //     // console.log(res.data.token);
    //     if (res.status ===200) {
    //       // this.$store.commit('')
    //       localStorage.setItem('token', res.data.token)
    //       setTimeout(() => {
    //         this.$router.push('/')
    //       }, 1500);
    //     }
    //   })
    // },

    sign_up(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          const datas = {
            name: this.form.name,
            password: this.form.password,
            email: this.form.email
          }
          signup(datas).then(res => {
            // console.log(res);
            if (res.status === 200) { 
              setTimeout(() => {
                this.$message({
                  message: '恭喜你，注册成功',
                  type: 'success'
                })
              }, 500)
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('name', this.form.name)
              setTimeout(() => {
                this.$router.push('/home')
              }, 1500);
            }
          })
        } else {
          this.$message.error('出错了~');
          return false;
        }
      });
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

  .demoform {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .el-form {
    position: relative;
    width: 100%;
  }

  .el-form-item {
    display: flex;
    justify-content: center;
    position: relative;
    /* top: 50px; */
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

  @media screen and (max-width: 1500px) {
    .loginbox {
      width: 30%;
    }
  }

  @media screen and (max-width: 992px) {
    .elform >>> .el-form-item__label {
      width: 100px;
      padding: 0;
    }
    .el-form-item {
      display: flex;
      width: 100%;
    }
    .label {
      font-size: 25px;
      left: 56px;
      top: 40px;
    }
    .loginbox {
      padding-top: 0px;
      height: 445px;
      width: 75%;
      margin: auto;
      background-color: #fff;
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