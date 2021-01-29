<template>
  <div class="NavBarsItem  hidden-md-and-down">
    <ul class="navcoll">
      <li class="navitem"
          v-for="(item,index) in LinkList" 
          :key="index"
          @click="ClickIndex(item.path,index)"
          :style="activeStyle"
          ref="tag">
          <i :class="item.class"></i>
          <p>{{item.name}}</p>
      </li>
    </ul>
    
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
  export default {
    name: 'NavBarsItem',
    components: {
    },
    data() {
      return {
        active: 0,
        path: '',
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
      // path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    mounted() {
      // const name = this.$store.state.info.name;
      // const name = localStorage.getItem('name');
      // if(localStorage.getItem('token')) {
      //   this.$refs.tag[this.$refs.tag.length-1].innerHTML = name
      // } else {
      //   console.log("don't login");
      // }
      // console.log(localStorage.getItem('name'));
      // console.log(this.$route.path);
      // console.log(this.isActive);
      // const name = this.$store.state.info.name;
      // const name = localStorage.getItem('name');
      // if(localStorage.getItem('token')) {
      //   this.$refs.tag[this.$refs.tag.length-1].innerHTML = name
      // } else {
      //   console.log("don't login");
      // }
      // console.log(localStorage.getItem('name'));
      
    },
    methods: {
      ClickIndex(path,index) {
        this.$router.push(path)
        this.path = path
        this.active = index
        if(path === '/signin') {
        if(localStorage.getItem('token')) {
          this.$router.push('/logined')
          }
        } else if(path == 'https://github.com/') {
          window.open(path)
        } 
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {backgroundColor: this.activeColor} : {}
      }
    },
  }
</script>

<style  scoped>
  .NavBarsItem {
    background-color: #000000f2;
    position: fixed;
    height: 49px;
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
    width: 60%;
    right: 150px;
    justify-content: flex-end;
    flex-direction: row;
    justify-content: space-around;
  }

  .navitem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #dedede;
    font-size: 15px;
  }
  .navitem a{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #dedede;
    font-size: 15px;
  }
/* 
  .navitem:hover{
    background-color:#84848421;
    cursor:pointer;
    transition: all 0.3s linear;
  } */

  .navactive {
    background-color: #ccc;
  }
</style>