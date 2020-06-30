<template>
  <div class="brush yui-scroll">
    <!--轮播-->
    <div class="head-swiper">
      <!--YuiSwiper-->
      <YuiSwiper :data="swiperList"></YuiSwiper>
    </div>

    <div class="brush-body">
      <div class="brush-list" v-for="(item,index) in brushList" :key="index"
           :style="{backgroundImage:'url('+item.imgUrl+')'}" @click="brushHeader(item,index)">
        <span class="brush-list-name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import YuiSwiper from '@/components/swiper/Swiper.vue'
  import banner1 from '@/assets/timgs/banner-1.png'
  import brushBj1 from '@/assets/timgs/brush-chinese.png'
  import brushBj2 from '@/assets/timgs/brush-math.png'
  import brushBj3 from '@/assets/timgs/brush-english.png'

  export default {
    name: "Brush",
    components: {YuiSwiper},
    data() {
      return {
        //三张轮播，使用变量循环
        swiperList: [
          {
            id: '001',
            imgUrl: banner1
          },
          {
            id: '002',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
          },
          {
            id: '003',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
          },
          {
            id: '004',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
          }
        ],
        brushList: [
          {imgUrl: brushBj1, name: '语文',to:{name:'SelectLevel'}},
          {imgUrl: brushBj2, name: '数学',to:{name:'SelectLevel'}},
          {imgUrl: brushBj3, name: '英语每日挑战',to:{name:'ChallengeEnter'}}
        ]
      }
    },
    methods: {
      brushHeader(item) {
        this.$router.push(item.to)
      }
    }
  }
</script>

<style scoped lang="less">
  .brush {
    padding: 30*@rem 0;
    background-color: #50c7eb;
    height: 100%;
    .head-swiper {
      height: 300*@rem;
      background-color: #ececec;
      margin: 0 30*@rem;
      border-radius: 16*@rem;
      overflow: hidden;
      font-size: 0;
    }

    .brush-body {
      .brush-list {
        height: 190*@rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        border-radius: 10*@rem;
        overflow: hidden;
        margin: 30*@rem 30*@rem 0 30*@rem;
        padding-left: 220*@rem;
        display: flex;
        align-items: center;
        .brush-list-name {
          font-size: 34*@rem;
          color: #ffffff;
        }
      }
    }
  }
</style>
