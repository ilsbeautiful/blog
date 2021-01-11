<template>
  <div class="MsgBoard">
    <el-row>
      <el-col :span="12" :offset="5"  v-for="(item,index) in data" :key="index">
        <div class="msgss">
          <div class="qweqwe">
            <h2 class="name">{{item.name}}</h2>
            <span>{{dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}}</span>
          </div>
            <p>{{item.content}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getmessage, message } from 'network/home'
export default {
  name: 'MsgBoard',
  data() {
    return {
      data: {
        name: '',
        content: '',
        date: ''
      }
    }
  },
  mounted() {
    getmessage().then(res => {
      this.data = res.data.data
      // console.log(this.data );
    })
  }
}
</script>

<style scoped>
  .MsgBoard {
    position: relative;
    display: flex;
    top: 100px;
    color: #fff;
  }
  .el-row {
    width: 100%;
    
  }
  .msgss {
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .msgss p {
    font-size: 16px;
    color: #fff;
  }
  
  .name {
    color:#69de82;
    margin: 0 0 5px 0;
  }
  .qweqwe {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>