<template>
  <div class="cont-box" contenteditable="true" v-html="content" @input="changeTxt" @focus="lock=true" @blur="lock=false">
    <!-- <img v-for="(item,index) in dialogImageUrl" :key="index" :src="item" alt=""> -->
  </div>
</template>

<script>
export default {
  name:'Contentchild',
  props:{
    child:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      content:this.child,
      lock:false
    }
  },
  watch:{
    child:{
      handler(newValue, oldValue) {
        if(!this.lock) {
          this.innerText=this.child;
        };
      },
      deep:true
    }
  },
  methods:{
    changeTxt:function(e){
      this.child=this.$el.innerHTML;
    }
  }
}
</script>

<style scoped>
  .cont-box{
      width: 100%;
      height: auto;
      min-height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #fff3;
      border: 1px solid #dfdfdf;
      outline: none;
      padding: 10px;
  }
  .cont-box img {
    width: 100px;
    /* height: 100; */
  }
  .cont-box:empty:after {
    content: '详细内容';
    color: #ababab;
    font-size: 15px;
    text-align: left;
  }
</style>