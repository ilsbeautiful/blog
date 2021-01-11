<template>
  <div id="Message">
    <NavBars/>
    <Messagebox/>
    <MsgBoard/>
  </div>
</template>

<script>
  import NavBars from '@/components/content/navbars/NavBars'
  import Messagebox from '@/views/message/childcomps/MessageBox'
  import MsgBoard from '@/views/message/childcomps/MsgBoard'

  export default {
    name: "Message",
    components: {
      NavBars,
      Messagebox,
      MsgBoard
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