<template>
  <div id="music_container">
    <p>音乐鉴赏</p>
    <span class="introduce">这里有好听的音乐~</span>
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      class="musicBox"
      :src="music_link"
    ></iframe>
    <i @click="getMusic(--music_index)" class="prev_Button el-icon-caret-left"></i>
    <i @click="getMusic(++music_index)" class="next_Button el-icon-caret-right"></i>
  </div>
</template>
<script>
import { getmusics } from "network/home";
export default {
  name: "music",
  data() {
    return {
      music_link: "",
      music_index: 7
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getMusic(this.music_index);
    });
  },

  methods: {
    getMusic(id) {
      // console.log(id);
      getmusics(id).then(res => {
        // console.log(res);
        if (res.data.err == 0) {
          this.music_link = `//music.163.com/outchain/player?type=2&id=${res.data.data[0].music_id}&auto=0&height=66`;
          this.music_index = res.data.data[0].id;
        } else {
          this.$Message.error("网络出错了稍后重试吧!");
        }
      });
    }
  }
};
</script>
<style scoped>
#music_container {
  width: 100%;
  margin-bottom: 1rem;
  background: #ffffff6b;
  padding:.5rem;
  border: 1px solid #ccc;
  position: relative;
  background: #fff;
  font-size: 20px;
  border-radius: 8px!important;
  border-bottom-left-radius: 0!important;
  border-bottom-right-radius: 0!important;
}
#music_container:hover {
  transform: translate(0,-2px);
  box-shadow:0 15px 30px rgba(0,0,0,.1);
}
p {
  font-size: 18px;
  padding:0.5rem;
  border-bottom:1.5px solid lightseagreen;
}
.musicBox {
  height: 7.2rem;
  width: 100%;
  border-radius: 8px;
}
.introduce {
  display: inline-block;
  padding: 1rem 0;
}
i.prev_Button,i.next_Button {
  font-size: 1rem;
  margin: 0 0.5rem;
  position: absolute;
  bottom: 0.5rem;
  color: #333;
  cursor: pointer;
  font-weight: bold;
}
.prev_Button {
  left: 40%;
}
.next_Button {
  right: 40%;
}
i:hover {
  color: red !important;
}
</style>