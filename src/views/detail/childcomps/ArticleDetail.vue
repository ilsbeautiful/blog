<template>
  <div v-if="Object.keys(goods).length !== 0" class="ArticleDetail">
    <span class="s-round-date">
      <span class="month">{{dayjs(goods.time).format('M')+'月'}}</span>
      <span class="day">{{dayjs(goods.time).format('DD')}}</span>
    </span>
    <div class="ui label">
      <p>{{goods.label}}</p>
    </div>
    <div class="detail" >
      <h2 class="titles"><a href="">{{goods.title}}</a></h2>
      <div class="brief">
        <div class="bgbg">
          <i class="el-icon-s-custom"></i>
          <span class="name">{{goods.name}}</span>
        </div>
        <div class="bgbg" >
          <i class="el-icon-timer"></i>
          <span>{{dayjs(goods.time).format('YYYY-MM-DD HH:mm:ss')}}</span>
        </div>
        <div class="bgbg">
          <i class="el-icon-view"></i>
          <span>{{this.look + 1}}</span>
        </div>
        <div class="bgbg">
          <i class="el-icon-star-on"></i>
          <span>{{goods.star}}</span>
        </div>
        <div class="bgbg">
          <i class="el-icon-chat-dot-square"></i>
          <span>{{goods.msgs}}</span>
        </div>
      </div>
      <div class="detail-content">
        <div v-html="goods.content"></div>
      </div>
      <div class="donate-word" @click="addstar">
        <span>点赞~</span>
      </div>
    </div>
  </div>
</template>

<script>
import {addstar} from 'network/message'
export default {
  name: 'ArticleDetail',
  data() {
    return {
      data: {
        iid: ''
      }
    }
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    look() {
      return this.goods.look++
    }
  },
  methods: {
    addstar() {
      this.goods.star++
      this.data.iid = this.goods.iid
      addstar(this.data).then(res => {
        // console.log(res);
      })
    }
  }
}
</script>

<style scoped>
  .ArticleDetail {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 15px;
    display: flex;
    height: 66rem;
    width: 100%;
    position: relative;
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 40px;
  }

  .detail {
    width: 100%;
    /* padding-left:1.5rem; */
  }

  @media screen and (max-width: 1200px) {
    .img {
      display: none;
    }
    .detail {
      width: 100%;
      padding-left:0.5rem;
    }
  }
  .titles {
    position: relative;
    color: #444;
    top: 1rem;
    height: 1.5625rem;
    overflow: hidden;
    font-family: "微软雅黑";
    width: 100%;
    text-align: center;
  }
  .brief {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    top: 2rem;
  }
  .bgbg {
    margin: 0 8px;
    text-align: center;
  }
  .bgbg i{
    margin: 0 2px;
  }

  .detail-content {
    display: block;
    display: -webkit-box;
    position: relative;
    width: 100%;
    height: 200px;
    top: 6rem;
    color: #000;
    font-size: 16px;
    font-family: 'Cabin Sketch';
    letter-spacing: 1px;
    white-space: pre-wrap; 
    box-orient: vertical;
    -webkit-box-orient: vertical;
  }

  .donate-word{
    margin:40px 0;
    text-align: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
  .donate-word span{
    display: inline-block;
    width:80px;
    height:34px;
    line-height: 34px;
    color:#fff;
    background: #ea9fd0;
    margin:0 auto;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease-in-out
  }
  .donate-word span:hover{
    background: #e232a5;
  }
/* datesssssssssssssssssss */
  .s-round-date {
    position: absolute;
    top: -20px;
    left: -35px;
    height: 70px;
    width: 70px;
    padding-top: 10px;
    border-radius: 100px;
    color: #fff;
    background: #97dffd;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .s-round-date span {
      text-align: center;
      display: block;
  }
  .s-round-date .day {
      font-size: 30px;
      font-weight: 700;
  }
  .ui.label {
    border-color: #97dffd;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: #97dffd;
    margin: 5px 0 15px 2px;
    font-size: 14px;
    position: absolute;
    left: -17px;
    top: 100px;
    border-radius: 0 4px 4px 0;
    padding: 7px 11.2px 7px 32px;
    display: inline-block;
    color: #fff;
    word-break: break-all;
}
.ui.label a {
    color: #fff;
    line-height: 100%;
}
.ui.label::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    border-top: 0 solid transparent;
    border-right-width: 1em;
    border-right-color: #48456D;
    border-right-style: solid;
    border-bottom: 1em solid transparent;
    border-left: 0 solid transparent;
    width: 0;
    height: 0;
}
</style>