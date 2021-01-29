<template>
  <div id="Photo">
    <NavBars/>
    <div class="masonry animation">
      <div class="item" v-for="item in link" :key="item.id">
        <img :src="item.linkitemsrc" alt="">
      </div>
    </div>
    <BackTop/>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'
import BackTop from '@/components/content/backTop/BackTop'
// import { backTopMixin } from '@/common/mixin'

export default {
  name: "Photo",
  components: {
      NavBars,
      BackTop
  },
  // mixins: [backTopMixin],
  data() {
    return {
      link: [
        {linkitemsrc:'http://localhost:3000/photo/2.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/3.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/4.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/5.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/6.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/7.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/8.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/9.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/10.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/11.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/12.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/13.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/14.jpg'},
        {linkitemsrc:'http://localhost:3000/photo/15.jpg'}
      ]
    }
  },
  created() {
    // console.log(this.url);
  }
}
</script>

<style scoped>
  #Photo {
    height: 100%;
    position: relative;
  }
  .masonry {
    position: relative;
    /* border: 2px solid #ccc; */
    top:100px;
    width: 80%;
    column-count: 4;
    column-gap: 0;
    margin:auto;
  }
  .item {
    padding: 5px;
    overflow: hidden;
    background-color: #0000007a;
  }
  .masonry img {
    display: block;
    width: 100%;
    height: auto;
  }
  .item:hover img{
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

  @media screen and (max-width: 1200px){
    .masonry {
      position: relative;
      /* border: 2px solid #ccc; */
      top:100px;
      width: 80%;
      column-count: 3;
      column-gap: 0;
      margin:auto;
    }
  }
  @media screen and (max-width: 992px){
    .masonry {
      position: relative;
      /* border: 2px solid #ccc; */
      top:100px;
      width: 80%;
      column-count: 2;
      column-gap: 0;
      margin:auto;
    }
  }
  @media screen and (max-width: 768px){
    .masonry {
      position: relative;
      /* border: 2px solid #ccc; */
      top:100px;
      width: 80%;
      column-count: 1;
      column-gap: 0;
      margin:auto;
    }
  }
</style>