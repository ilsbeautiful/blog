<template>
  <div class="Logined">
    <NavBars/>
    <img src="../../assets/img/mv/ycy.jpg" alt="你已经登陆过啦！">
    <p>您已经登陆过了，可以点击推出！！！</p>
    <button @click="publish" v-show="showtd">发布文章</button>

    <button @click="quit">退出登录</button>

  </div>
</template>
<script>
import NavBars from '@/components/content/navbars/NavBars'


  export default {
    name:'logined',
    props:{},
    components: {
      NavBars
    },
    data () {
      return {
        showtd: false
      };
    },
    mounted() {
      if(localStorage.getItem('token')) {
        this.showtd = true
      }
    },
    methods: {
      quit() {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        this.$router.push('/article')
      },
      publish() {
        this.$router.push('/profile')
      }
    }
  }

</script>
<style scoped>
  .Logined {
    padding-top: 8rem;
    text-align: center;
  }

  .Logined img {
    width: 300px;
    border-radius: 50%;
  }

  p {
    color:#f7f7f7;
    padding-top: 5rem;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
  }
</style>