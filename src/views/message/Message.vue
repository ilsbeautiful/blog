<template>
  <div id="Message" >
    <NavBars/>
    <div class="animation">
      <MessageBox :url='url'/>
      <MsgBoard :user='data' :url='url'/>
    </div>
    <BackTop/>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'
import MessageBox from '@/views/message/childcomps/MessageBox'
import MsgBoard from '@/views/message/childcomps/MsgBoard'
import BackTop from '@/components/content/backTop/BackTop'

import { getmessage, message, getuser} from 'network/home'

export default {
  name: "Message",
  data() {
    return {
      data: {
        name: '',
        content: '',
        date: '',
        token:'',
        imgsrc: ''
      },
      url: ''
    }
  },
  components: {
    NavBars,
    MessageBox,
    MsgBoard,
    BackTop
  },
  created() {
    
  },
  mounted() {
    this.getinfo()
  },
  methods: {
    getinfo() {
      this.data.token = localStorage.getItem('token')
      getuser(this.data).then(res => {
        this.url = res.data.data[0].url
        // console.log(this.url);
      })
      getmessage().then(res => {
        this.data = res.data.data
        // console.log(this.data );
      })
    }
  }
}
</script>

<style scoped>
  #Message {
    /* height: 100vh; */
    width: 100%;
    position: absolute;
    /* background-image: url(~assets/img/home/mtimg.jpg); */
    background-size: 100%;
  }
</style>