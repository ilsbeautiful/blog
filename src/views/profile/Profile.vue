<template>
  <div id="Profile">
    <NavBars/>
    <form class="form">
      <h2>{{$store.state.info.name}}</h2><br>
      标题：<input type="text" v-model="form.title"><br>
      内容：<input type="text" v-model="form.content"><br>
      标签：<input type="text" v-model="form.label"><br>
      <button @click="submit">提交</button>
    </form>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'
import { publish } from "network/home"

export default {
  name: "Profile",
  components: {
      NavBars
  },
  data() {
    return {
      form: {
        name: '',
        title: '',
        content: '',
        label: '',
        time: ''
      }
    }
  },
  methods: {
    submit() {
      this.form.name = this.$store.state.info.name
      this.form.time = this.dayjs().format('YYYY-MM-DD HH-mm-ss')
      publish(this.form).then(res => {
        console.log(res);
        if (res.data.err === 0) {
          setTimeout(() => {
            this.$router.push('/article')
          }, 1000);
        }
      })
      // console.log(this.form.time);
    }
  }
}
</script>

<style scoped>
  #Profile {
    height: 100vh;
    position: relative;
    /* background-image: url(~assets/img/home/mtimg.jpg); */
    background-size: 100%;
  }
  .form {
    position: relative;
    top: 50px;
    color: #fff;
  }
  .form input {
    width: 500px;
    height: 50px;
    margin: 15px 0;
  }
</style>