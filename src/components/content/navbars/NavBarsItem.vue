<template>
  <div class="navitem" @click="itemClick()" :class="{navactive: isActive}">
    <div><slot name="item-icon"></slot></div>
    <div class="item-text"><slot name="item-text"></slot></div>
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
      }
    },
    props: {
      path: String,
    },
    mounted() {
    },
    created() {
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
  }
</script>

<style scoped>
  .navitem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #dedede;
    font-size: 15px;
  }
  
  .navitem:hover{
    background-color:#48456C;;
    cursor:pointer;
    transition: all 0.3s linear;
  }
  
  .navactive {
    /* background-color: #84848421; */
    background: rgba(73, 69, 107, 0.7);
  }
</style>