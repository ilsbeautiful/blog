<template>
  <div class="NavBar">
    <div class="navcoll  hidden-md-and-down">
      <NavBarsItem path="/home">
        <div slot="item-icon" class="el-icon-s-home"></div>
        <div slot="item-text">首页</div>
      </NavBarsItem>
      <NavBarsItem path="/article">
        <div slot="item-icon" class="el-icon-tickets"></div>
        <div slot="item-text">文章</div>
      </NavBarsItem>
      <NavBarsItem path="/photo">
        <div slot="item-icon" class="el-icon-picture"></div>
        <div slot="item-text">云相册</div>
      </NavBarsItem>
      <NavBarsItem path="/message">
        <div slot="item-icon" class="el-icon-edit-outline"></div>
        <div slot="item-text">留言板</div>
      </NavBarsItem>
      <NavBarsItem @click.native="Gogithub">
        <div slot="item-icon" class="el-icon-share"></div>
        <div slot="item-text">GitHub</div>
      </NavBarsItem>
      <NavBarsItem @click.native="Clicks">
        <div slot="item-icon" class="el-icon-s-custom"></div>
        <div slot="item-text" ref="tag">登陆 / 注册</div>
      </NavBarsItem>
    </div>
    <MNavBars/>
  </div>
</template>

<script>
  import NavBarsItem from '@/components/content/navbars/NavBarsItem'
  import MNavBars from '@/components/content/navbars/mNavBars'

  export default {
    name: 'navbars',
    components: {
      NavBarsItem,
      MNavBars
    },
    data() {
      return {
      }
    },
    props: {
    },
    mounted() {
      const name = localStorage.getItem('name');
      if(localStorage.getItem('token')) {
        this.$refs.tag.innerHTML = name
      }
    },
    methods: {
      Clicks() {
        if(localStorage.getItem('token')) {
          this.$router.push('/logined')
        } else {
          this.$router.push('/signin')
        }
      },
      Gogithub() {
        window.open('https://github.com/')
      }
    },
    computed: {
      
    }
  }
</script>

<style scoped>
  .NavBar {
    /* background-color: #000000f2; */
    background: rgba(40, 42, 44, 0.6);
    position: fixed;
    height: 45px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    display: flex;
    justify-content: flex-end;
  }
  .navcoll {
    display: flex;
    justify-content: space-around;
    line-height: 49px;
    position: relative;
    width: 45%;
    right: 200px;
    justify-content: flex-end;
    flex-direction: row;
    justify-content: space-around;
  }
  
</style>