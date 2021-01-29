<template>
  <div class="article-item">
    <span class="s-round-date">
      <span class="month">{{dayjs(articleitem.time).format('M')+'月'}}</span>
      <span class="day">{{dayjs(articleitem.time).format('DD')}}</span>
    </span>
    <!-- <div class="ui label">
      <p>{{articleitem.label}}</p>
    </div> -->
    <div class="img">
      <img :src="imgsrc" alt="">
    </div>
    <div class="listright" @click="clickdetails">
      <h2 class="titles"><a href="">{{articleitem.title}}</a></h2>
      <div v-html="content" class="article-content"></div>
      <div class="brief">
        <div class="bgbg">
          <i class="el-icon-s-custom"></i>
          <span class="name">{{articleitem.name}}</span>
        </div>
        <div class="bgbg" >
          <i class="el-icon-timer"></i>
          <span>{{dayjs(articleitem.time).format('YYYY-MM-DD HH:mm:ss')}}</span>
        </div>
        <div class="bgbg">
          <i class="el-icon-view"></i>
          <span>{{articleitem.look}}</span>
        </div>
        <div class="bgbg">
          <i class="el-icon-star-on"></i>
          <span>{{articleitem.star}}</span>
        </div>
        <div class="bgbg">
          <i class="el-icon-chat-dot-square"></i>
          <span>{{articleitem.msgs}}</span>
        </div>
      </div>
      <i class="labels">
        <el-tag>{{articleitem.label}}</el-tag>
      </i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticleListItem',
  data() {
    return {
      imgsrc:'http://localhost:3000/photo/14.jpg'
    }
  },
  props: {
    articleitem: {
      type: [Object,Array],
      default() {
        return []
      }
    }
  },
  methods: {
    clickdetails() {
      this.$router.push('/detail' +'/' + this.articleitem.iid)
    }
  },
  computed: {
    content() {
      let content = this.articleitem.content
      let reg =/<img.*?src="(.*?)".*?\/?>/i
      let value = content.replace(reg,'')
      return value
    },
    imgs() {
      let content = this.articleitem.content
      let reg =/<img.*?src="(.*?)".*?\/?>/i
      let src = reg.exec(content)
      return src
    }
  },
  created() {
    if(this.imgs) {
      // console.log(this.imgs);
      this.imgsrc = this.imgs[1]
      // console.log(this.imgsrc);
    }
  }
}
</script>

<style scoped>
  .article-item {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 15px;
    display: flex;
    height: 26.25rem;
    width: 100%;
    position: relative;
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 40px;
  }

  .article-item .img {
    padding: 5px;
    width: 25%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  .img img {
    display: block;
    width: 100%;
    height: auto;
  }
  .article-item .img:hover img{
      z-index: 100;
      transition: 0.25s;
      overflow: hidden;
      animation: bounceIn 0.25s ease-in 2 alternate;
  }
  @keyframes bounceIn{
      100% {
          transform: scale(1.07);
      }
  }


  .listright {
    width: 70%;
    padding-left:1.5rem;
  }

  @media screen and (max-width: 1200px) {
    .img {
      display: none;
    }
    .listright {
      width: 100%;
      padding-left:0.5rem;
    }
  }

  .titles {
    position: relative;
    color: #333;
    top: 1.25rem;
    height: 1.5625rem;
    overflow: hidden;
    font-family: "微软雅黑";
    width: 100%;
  }

  .article-content {
    display: block;
    display: -webkit-box;
    position: relative;
    white-space: pre-wrap; 
    width: 90%; 
    top: 4rem;
    color: #000;
    font-size: 15px;
    height: 3.75rem;
    line-height: 1.25rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .brief {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    top: 8rem;
    height: 3.125rem;
    line-height: 2.5rem;
  }

  .brief .name {
    margin-right: 6px;
    white-space: pre-wrap; 
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .brief span,
  .bgbg span  {
    line-height:50px;
  }
  .bgbg {
    /* width: 2.5rem; */
    margin: 0 6px;
    text-align: center;
  }
  .bgbg img {
    width: 17px;
    margin-top: 16px;
  }
  .labels {
    position: relative;
    top: 10rem;
  }

  .s-round-date {
    position: absolute;
    top: -20px;
    right: -35px;
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
    right: -15px;
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
    right: 0;
    border-top: 0 solid transparent;
    border-left-width: 1em;
    border-left-color: #48456D;
    border-left-style: solid;
    border-bottom: 1em solid transparent;
    border-right: 0 solid transparent;
    width: 0;
    height: 0;
}
</style>