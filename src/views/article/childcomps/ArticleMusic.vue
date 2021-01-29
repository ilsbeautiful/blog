<template>
  <div class="ArticleMusic">
    <ArticleTag>
      <div slot="title">
        <i class="el-icon-service="></i>
        <h4>音乐</h4>
      </div>
      <div slot="detail" class="detail">
        <p>听音乐~</p>
        <!-- <video id="video" src="~/assets/music/thz.mp3" controls="controls"  loop="loop"> </video> -->
      </div>
    </ArticleTag>
  </div>
</template>

<script>
import ArticleTag from '@/components/content/Article/ArticleTag'

export default {
  name:'ArticleMusic',
  components: {
    ArticleTag
  }
}
</script>

<style scoped>
  video {
    width: 100%;
  }
</style>