<template>
  <div class="mNavBars hidden-lg-and-up">
    <div class="logo">
      <img src="../../../assets/img/icon/blog.png" alt="">
      <i class="el-icon-menu catalog" @click="isshow"></i>
    </div>
    <div v-show="shows" class="navcoll">
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
  </div>
</template>

<script>
  import NavBarsItem from '@/components/content/navbars/NavBarsItem'

  export default {
    name: 'mNavBars',
    components: {
      NavBarsItem
    },
    data() {
      return {
        active:-1,
        shows: false
      }
    },
    props: {
      path: String,
    },
    mounted() {
      const name = localStorage.getItem('name');
      if(localStorage.getItem('token')) {
        this.$refs.tag.innerHTML = name
      }
    },
    methods: {
      isshow() {
        this.shows = !this.shows
      },
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
  .mNavBars {
    /* background-color: #000000f2; */
    /* background: rgba(40, 42, 44, 0.6); */
    position: fixed;
    height: 45px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .logo {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: 123px;
    height: 30px;
    margin-left: 19px;
  }
  
  .catalog {
    margin-right: 10px;
    font-size: 35px;
    color: white;
  }
 
  .navcoll {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    /* background-color:#000000; */
    background: rgba(40, 42, 44, 0.6);

  }
 
  .navitem {
    color: #fff;
    font-size: 15px;
    padding: 15px 40px;
    border-bottom: 1px solid #9c9c9c;
  }
  
</style>