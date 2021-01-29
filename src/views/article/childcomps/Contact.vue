<template>
  <div class="Contact">
    <img src="~/assets/img/home/g.jpg" alt="">
    <h2 >My Contact Information.</h2>
    <div class="contact">
        <!-- <div @click="qq" class="contactimg1"  title="QQ"></div>
        <div @click="wx" class="contactimg2"  title="微信"></div>
        <div @click="github" class="contactimg3"  title="GitHub"></div>
        <img v-if="active" @mouseover="mouseOver"  src="~/assets/img/icon/qq.png" alt="" class="contactimg">
        <img v-else @mouseleave="mouseLeave" src="~/assets/img/icon/qq-active.png" alt="" class="contactimg"> -->
      <ContactItem @click.native="qq" class="contactimg" title="QQ">
        <img slot="item-icon" src="~/assets/img/icon/qq.png" alt="QQ">
        <img slot="item-icon-active" src="~/assets/img/icon/qq-active.png" alt="QQ">
      </ContactItem>
      <ContactItem @click.native="wx" class="contactimg" title="微信">
        <img slot="item-icon" src="~/assets/img/icon/wx.png" alt="WX">
        <img slot="item-icon-active" src="~/assets/img/icon/wx-active.png" alt="WX">
      </ContactItem>
      <ContactItem @click.native="github" class="contactimg" title="GitHub">
        <img slot="item-icon" src="~/assets/img/icon/GitHub.png" alt="GitHub">
        <img slot="item-icon-active" src="~/assets/img/icon/GitHub-active.png" alt="GitHub">
      </ContactItem>
    </div>
  </div>
</template>

<script>
import ContactItem from '@/views/article/childcomps/ContactItem'

export default {
  name:'Contact',
  components: {
    ContactItem
  },
  data() {
    return {
      active: true
    }
  },
  methods: {
    qq() {
      window.open('http://localhost:3000/static/img/qq.jpg')
    },
    wx() {
      window.open('http://localhost:3000/static/img/微信.jpg')
    },
    github() {
      window.open('https://github.com/ilsbeautiful')
    }
  }
}
</script>

<style scoped>
.Contact {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 8px!important;
  border-bottom-left-radius: 0!important;
  border-bottom-right-radius: 0!important;
}
.Contact:hover {
  /* animation: toflow 0.5s linear; */
  transform: translate(0,-2px);
  box-shadow:0 15px 30px rgba(0,0,0,.1);
   /* transform: scale(1.15);
    -webkit-transform: scale(1.15); */
}
@keyframes toflow {
  100%{
    transform:translate(0,0px);
  }
  100%{
    transform:translate(0,-2px);
  }
}
/* 
@keyframes toflow {
    0%{
        transform: scale(1) translate(0,0px);
    }
    50%{
        transform:scale(0.95) translate(0,10px);
    }
    100%{
        transform:scale(1) translate(0,0px);
    }
} */

img {
  width: 100%;
  opacity: 0.71;
}
h2 {
  margin: 20px 0 ;
  text-align: center;
}
.contact{
  display: flex;
  justify-content: space-evenly;
}
.contactimg {
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* background: url('../../../assets/img/icon/qq.png');
  background-size: contain; */
}
/* .contactimg1 {
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: url('../../../assets/img/icon/qq.png');
  background-size: contain;
}
.contactimg1:hover {
  background: url('../../../assets/img/icon/qq-active.png');
  background-size: contain;
}
.contactimg2 {
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: url('../../../assets/img/icon/wx.png');
  background-size: contain;
}
.contactimg2:hover {
  background: url('../../../assets/img/icon/wx-active.png');
  background-size: contain;
}
.contactimg3 {
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: url('../../../assets/img/icon/GitHub.png');
  background-size: contain;
}
.contactimg3:hover {
  background: url('../../../assets/img/icon/GitHub-active.png');
  background-size: contain;
} */
</style>