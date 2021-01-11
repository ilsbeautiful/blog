<template>
  <div >
    <h2>可以在这里输入留言~!!!</h2>
    <div class="MessageBox">
      <el-input
        class="textarea"
        type="textarea"
        rows="1"
        placeholder="请输入内容"
        v-model="data.textarea"
        maxlength="80"
        show-word-limit
      >
      </el-input>
      <el-button 
      type="primary" 
      icon="el-icon-edit" 
      style='height:52px;margin-left:15px' 
      @click="submsg">发布</el-button>
    </div>
    
  </div>
</template>

<script>
import { getmessage, message } from 'network/home'

export default {
  name: 'MessageBox',
  data() {
    return {
      data: {
        name: '',
        textarea: '',
        date: ''
      }
    }
  },
  methods: {
    submsg() {
      if(localStorage.getItem('token')) {
        this.data.name = localStorage.getItem('name')
        this.data.date = this.dayjs().format('YYYY-MM-DD HH:mm:ss')
        message(this.data).then(res => {
          // console.log(res);
          setTimeout(() => {
            location.reload()
          }, 1000);
        })
      } else {
        alert('请先登录！')
      }
    }
  }
}
</script>

<style scoped>
  h2 {
    position: relative;
    top: 100px;
    text-align: center;
    color: tomato;
    font-size: 30px;
    margin: 10px;
  }
  .textarea >>> .el-textarea__inner{
    font-family:"Microsoft" !important;
    font-size:18px !important;
    padding: 13px 10px 10px 10px;
  }
  
  .MessageBox {
    position: relative;
    top: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1000px;
    margin: auto;
  }
</style>