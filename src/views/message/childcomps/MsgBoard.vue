<template>
  <div class="MsgBoard">
    <div class="messages" v-for="(item,index) in user" :key="index">
      <div class="msgtitle">
        <div style="display:flex">
          <img :src="item.imgsrc" alt="">
          <h2 class="name">{{item.name}}</h2>
        </div>
        <span class="time">{{dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}}</span>
      </div>
      <p>{{item.content}}</p>
    </div>
  </div>
</template>

<script>
import { getmessage, message, getuser} from 'network/home'
export default {
  name: 'MsgBoard',
  data() {
    return {
    }
  },
  props:{
    user:{
      type:[Object,Array],
      default:''
    },
    url: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // console.log(this.url);
  }
}
</script>

<style scoped>
  .MsgBoard {
    position: relative;
    display: flex;
    top: 125px;
    color: #333;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  
  .messages {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 35px 0px 35px; 
    height: 80px;
    width: 80%;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 992px) {
    .messages {
      width: 100%;
    }
  }

  p {
    width: 100%;
    font-size: 16px;
    color: #333;
  }
  
  .msgtitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .msgtitle img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .name {
    color:#be02ecd1;
    margin: 0 0 5px 0;
  }
  
</style>