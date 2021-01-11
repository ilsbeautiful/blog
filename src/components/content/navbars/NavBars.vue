<template>
  <Header class="home-nav">
    <ul class="navcoll" slot="right">
      <li class="naa"
          v-for="(item,index) in LinkList" 
          :key="index"
          @click="ClickIndex(item.path)"
          :class="{'navactive':active==index}"
          ref="tag">
          <i :class="item.class"></i>
          {{item.name}}
      </li>
    </ul>
  </Header>
</template>

<script>
  import Header from '@/components/common/header/Header'

  export default {
    name: 'navbars',
    components: {
      Header
    },
    data() {
      return {
        active:-1,
        LinkList:[
          {name:"首页",path:'/',class:'el-icon-s-home'},
          {name:"文章",path:'/article',class:'el-icon-tickets'},
          {name:"云相册",path:'/photo',class:'el-icon-picture'},
          {name:"留言板",path:'/message',class:'el-icon-edit-outline'},
          {name:"GitHub",path:'https://github.com/',class:'el-icon-share'},
          {name:"登陆 / 注册",path:'/signin',class:'el-icon-s-custom'}
        ]
      }
    },
    props: {
      path: String,
    },
    mounted() {
      // const name = this.$store.state.info.name;
      const name = localStorage.getItem('name');
      if(localStorage.getItem('token')) {
        this.$refs.tag[this.$refs.tag.length-1].innerHTML = name
      } else {
        console.log("don't login");
      }
    },
    methods: {
      ClickIndex(path) {
        if(path == '/signin') {
            if(localStorage.getItem('token')) {
              this.$router.push('/logined')
              return
            }
          } else if(path == 'https://github.com/') {
            return window.open(path)
          }
        this.$router.replace(path)
      }
    },
    computed: {
      // isActive() {
      //   return this.includes(this.path)
      // },
      // ColorisActive() {
      //   return this.isActive ? {color: this.navcollactive} : {}
      // }
    }
  }
</script>

<style>
  .home-nav {
    background-color: #000000e8;
    position: fixed;
    height: 49px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .navcoll {
    display: flex;
    justify-content: space-around;
    line-height: 49px;
  }

  .naa {
    color: #dedede;
    font-size: 15px;
    margin: 0px 40px;
  }
  .navactive {
    background-color: yellow;
  }
</style>