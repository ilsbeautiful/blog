<!-- 留言评论模块 -->
<template>
  <div class="tmsgBox"  ref="tmsgBox">
    <div class="tmsg-respond"  ref="respondBox">
      <h3>发表评论</h3>
      <form class="">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="说点什么呢``"
          v-model="textarea">
        </el-input>
        
        <el-row class="tmsg-r-info">
          <el-col :span="24" class="info-submit">
            <p class="tcolors-bg" @click="sendmsg">发送~</p>
          </el-col>
        </el-row>
      </form>
    </div>

    <div class="tmsg-comments"  ref="listDom">
      <a href="#" class="tmsg-comments-tip">评论{{msg.length}}条</a>
      <div class="tmsg-commentshow">
        <ul class="tmsg-commentlist">
          <li class="tmsg-c-item" v-for="(item,index) in msg" :key="index">
            <article class="">
              <header>
                <img :src="item.url">
                <div class="i-name">{{item.name}}</div>
                <div class="i-time">{{item.date}}</div>
              </header>
              <section><p>{{item.content}}</p></section>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getuser } from 'network/home'
import { sendmsg, getmessage } from 'network/message'

export default {
  name:'DetailMsg',
  data() { //选项 / 数据
    return {
      respondBox:'',//评论表单
      listDom:'',//评论列表
      tmsgBox:'',//总评论盒子
      isRespond:false,
      textarea: '',//文本框输入内容
      pBody:true,//表情打开控制
      commentList:'',//评论列表数据
      pageId:0,//当前第几页
      aid:0,//文章id
      hasMore:true,
      haslogin:false,
      userId:'',//用户id
      leaveId:0,//回复评论的当前的commentId
      leavePid:'',//赞赏等其他模块的分类id
      pid:'',//回复评论的一级commentId,
      msg: [],
      data: {
        name:'',
        token: ''
      },
      user:[]
    }
  },
  props: {
    iid: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendmsg() {
      const info = {
        name: this.user.name,
        content: this.textarea,
        url: this.user.url,
        date: this.dayjs().format('YYYY-MM-DD HH:mm:ss'),
        token: this.user.token,
        iid: this.iid
      }
      sendmsg(info).then(res => {
        console.log(res);
        if(res.data.err == 0) {
          this.$message.success('okkk~~')
          setTimeout(() => {
            location.reload()
          }, 1000);
        }
      })
    }
  },
  created() {
    this.data.token = localStorage.getItem('token')
    getuser(this.data).then(res => {
      this.user = res.data.data[0]
      // console.log(this.user);
    })
    getmessage(this.iid).then(res => {
      this.msg.length = res.data.data.length
      this.msg = res.data.data
    })
  }
}
</script>


<style>

.tmsgBox{
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.tmsg-respond h3{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}
.tmsg-respond h3 small{
    font-size: smaller;
    cursor: pointer;
}
.tmsg-respond textarea{
    background:#f4f6f7;
    height:100px;
    margin-bottom: 10px;
}

/*用户输入表单*/
.tmsg-r-info{
    margin:10px 0;
}
.tmsg-r-info input{
    height:30px;
    border-radius: 4px;
    background: #f4f6f7;
}
.tmsg-r-info .info-submit{
    margin: 10px 0;
    text-align: center;
}
.tmsg-r-info .info-submit p,.tmsg-commentshow h1{
    background: #97dffd;
    color:#fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    height:30px;
    line-height: 30px;
    text-align: center;
}
.tmsg-r-info .info-submit p:hover{
    background: #47456d;
}

/*评论列表*/
.tmsg-comments .tmsg-comments-tip{
    display: block;
    border-left: 2px solid #363d4c;
    padding: 0 10px;
    margin: 40px 0;
    font-size: 20px;
}
.tmsg-commentlist {
    margin-bottom:20px;

}
.tmsg-commentshow>.tmsg-commentlist{
    border-bottom: 1px solid #e5eaed;
}
.tmsg-c-item{
    border-top: 1px solid #e5eaed;
}
.tmsg-c-item article{
    margin:20px 0;
}
.tmsg-c-item article header{
    margin-bottom:10px;
}
.tmsg-c-item article header img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    float: left;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    margin-right: 15px;
    object-fit: cover;
}
.tmsg-c-item article header img:hover{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
}
.tmsg-c-item article header .i-name{
    font-size: 14px;
    margin:5px 8px 7px 0;
    color:#444;
    font-weight: bold;
    display: inline-block;
}

.tmsg-c-item article header .i-time{
    color:#aaa;
    font-size: 12px;
}
.tmsg-c-item article section{
    margin-left: 80px;
}
.tmsg-c-item article section p img{
    vertical-align: middle;
}
.tmsg-c-item article section .tmsg-replay{
    margin:10px 0;
    font-size: 12px;
    color:#64609E;
    cursor: pointer;
}

</style>

