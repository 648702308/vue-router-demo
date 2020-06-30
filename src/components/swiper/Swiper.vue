<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container">
      <!--slides -->
      <swiper-slide class="swiper-item" v-for='item in data' :key='item.id'>
        <img class='swiper-img' :src='item.imgUrl' alt="去哪儿门票"/>
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "YuiSwiper",
    props: {
      data: {
        type: Array
      }
    },
    created() {
      console.log(this.data)
    },
    data() {
      return {
        swiperOption: {
          //显示分页
          pagination: {
            el: '.swiper-pagination'
          },
          //设置点击箭头
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          //自动轮播
          autoplay: {
            delay: 2000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false,
          },
          //开启循环模式
          loop: true
        },
      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    height: 100%;
    width: 100%;
    font-size: 0;
    .swiper-container {
      height: 100%;
      .swiper-img {
        height: 100%;
        width: 100%;
      }
      .swiper-pagination {
        bottom: 0;
      }
    }
  }
</style>
