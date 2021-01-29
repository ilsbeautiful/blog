<template>
  <div class="likeme">
    <h2>If you like it.</h2>
    <div @click="increase" class="aixin">
      <img class="heart" src="~/assets/img/icon/爱心.png" alt="">
      <span >{{love}}</span>
    </div>
    
  </div>
</template>

<script>
import {likeme, getlikeme} from 'network/home.js'
export default {
  name:'likeme',
  data() {
    return {
      love: 0,
    }
  },
  created() {
    getlikeme().then(res => {
      this.love = res.data.data[0].love
    })
  },
  methods: {
    increase() {
      this.love+=1
      likeme(this.love).then(res => {
        // console.log(res);
        this.$message.success('点赞成功')
      })
    }
  }
}
</script>

<style scoped>
.likeme {
  text-align: center;
  margin: 0px 0px 20px 0;
  padding: 15px;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 8px!important;
  border-bottom-left-radius: 0!important;
  border-bottom-right-radius: 0!important;
}
.likeme:hover {
  transform: translate(0,-2px);
  box-shadow:0 15px 30px rgba(0,0,0,.1);
}
h2 {
  font-size: 27px;
  color: deeppink;
  font-weight: bold;
  font-family: 'Cabin Sketch';
}
.aixin {
  margin-top: 18px;
  height: 5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.heart {
  width: 5rem;
}
.heart:hover {
  transform: scale(1.15);
  -webkit-transform: scale(1.15);
}
span {
  font-size: 30px;
  align-self: center;
  color: darkmagenta;
  font-weight: bold;
  font-family: 'Cabin Sketch', cursive;
}
</style>