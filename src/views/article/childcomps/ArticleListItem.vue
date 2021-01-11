<template>
  <div class="article-item">
    <img src="~/assets/img/home/mtimg.jpg" alt="">
      <div>
        <h2 class="titles">{{articleitem.title}}</h2>
        <p class="article-content">{{articleitem.content}}</p>
        <div class="brief">
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <p class="name">{{articleitem.name}}</p>
          <p class="date">{{dayjs(articleitem.time).format('YYYY-MM-DD HH:mm:ss')}}</p>
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
  props: {
    articleitem: {
      type: [Object,Array],
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .article-item img {
    width: 170px;
    border-radius: 5px;
  }
  .article-item {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    position: relative;
    background: #ffff;
    font-size: 15px;
    display: flex;
    height: 300px;
    width: 100%;
    border-bottom: 1px solid #a29c9c;
    padding: 10px;
 }
 .titles {
    position: relative;
    color: #333;
    top: 35px;
    padding-left: 30px;
    height: 25px;
    overflow: hidden;
    font-family: "微软雅黑";
    width: 100%;
  }

  .article-content {
    display: block;
    display: -webkit-box;
    position: relative;
    white-space: pre-wrap; 
    width:40em; 
    top: 50px;
    color: #000;
    padding-left: 30px;
    font-size: 15px;
    height: 60px;
    line-height: 20px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .brief {
    display: flex;
    position: relative;
    top: 80px;
    padding-left: 30px;
    line-height: 40px;
  }

  .brief .name {
    margin-right: 15px;
  }

  .labels {
    position: relative;
    padding-left: 30px;
    top: 100px;
  }

  .issue {
    right: 25px;
    position: absolute;
  }
</style>