<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="fixed-view" />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed:{
      transitionName(){
        return this.$store.getters.getTransitionName;
      }
    }
  }
</script>

<style>
  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: "Helvetica Neue", "Avenir", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    margin: 0 auto;
    height: 100%;
  }
  /*切换页面时的滑动效果*/
  .views {
    transition: all .8s ease;
  }
  .slide-left-enter-active {
    transition: all .3s ease;
  }
  .slide-left-leave-active {
    transition: all .4s ease;
  }
  .slide-left-enter {
    transform: translateX(100%);
    /*opacity: 0;*/
  }
  .slide-left-leave-to {
    transform: translateX(-100%);
    /*opacity: 0;*/
  }

  .slide-right-enter-active {
    transition: all .3s ease;
  }
  .slide-right-leave-active {
    transition: all .4s ease;
  }
  .slide-right-enter {
    transform: translateX(-100%);
    /*opacity: 0;*/
  }
  .slide-right-leave-to {
    transform: translateX(100%);
    /*opacity: 0;*/
  }
</style>
