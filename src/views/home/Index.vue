<template>
  <div class="home b-image yui-scroll">
    <!--YuiHeader-->
    <YuiHeader></YuiHeader>
    <!--YuiSwiper-->
    <div class="head-swiper">
      <YuiSwiper :data="swiperList"></YuiSwiper>
    </div>


    <div class="flex-group">
      <div class="flex-col" v-for="(item,index) in flexs" :key="index">
        <router-link tag="div" class="flex-col-group" :to="item.to">
          <div class="flex-col-head" :style="{backgroundColor:item.color}">
            <img class="col-img" :src="item.imgUrl" alt="">
          </div>
          <div class="col-title">{{item.name}}</div>
        </router-link>
      </div>
    </div>


    <YuiSignIn :value="showSignPopup" :data="weekDatas"></YuiSignIn>
  </div>
</template>

<script>
  import YuiHeader from '@/components/head/Header.vue'
  import YuiSwiper from '@/components/swiper/Swiper.vue'
  import YuiSignIn from '@/components/sign/SignIn.vue'
  import {makeWeek} from "@/api/methodApi";

  import img1 from '../../assets/timgs/dajiang.png'
  import img2 from '../../assets/timgs/paihang.png'
  import img3 from '../../assets/timgs/duijue.png'

  let signInCoinDtas = [10, 20, 30, 40, 50, 60, 70];

  export default {
    name: "Index",
    components: {YuiHeader, YuiSwiper, YuiSignIn},
    data() {
      return {
        showSignPopup: false,
        //三张轮播，使用变量循环
        swiperList: [
          {
            id: '001',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
          },
          {
            id: '002',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
          },
          {
            id: '003',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
          }
        ],
        flexs: [
          {name: '排行榜', imgUrl: img1, color: '#ed9859', to: {name: 'Rank'}},
          {name: '对决排位赛', imgUrl: img3, color: '#ed9859', to: {name: 'Pkduel'}},
          {name: '刷题', imgUrl: img3, color: '#ed9859', to: {name: 'Brush'}},
          {name: '大奖赛', imgUrl: img2, color: '#6a7ee1', to: {name: 'Rank'}},
          {name: '敬请期待', imgUrl: img3, color: '#ed9859', to: {name: 'Rank'}},
          {name: '敬请期待', imgUrl: img3, color: '#ed9859', to: {name: 'Rank'}}
        ]
      }
    },
    computed: {
      weekDatas() {
        return makeWeek().map((item, index) => {
          return {
            name: item.weekstr,
            day: item.day,
            isSgin: false,
            coin: signInCoinDtas[index]
          }
        })
      }
    },
    created() {
      // 判断是否签到
      if (this.user.day === new Date().getDate()) {
        if (this.user.isSign) {
          this.showSignPopup = false
        } else {
          this.showSignPopup = true
        }
      } else {
        this.showSignPopup = true
      }
    },
    mounted() {
    }
  }

</script>

<style scoped lang="less">
  .home {
    background-image: url("../../assets/timgs/bj-1.jpg");
    .head-swiper {
      height: 300*@rem;
    }
    .flex-group {
      display: flex;
      flex-wrap: wrap;
      padding: 30*@rem;
      .flex-col {
        width: 33.3333%;
        margin: 20*@rem 0;
        .flex-col-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .flex-col-head {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 125*@rem;
            height: 125*@rem;
            border-radius: 14*@rem;
            overflow: hidden;
            font-size: 0;
            .col-img {
              width: 100%;
              height: 100%;
            }
          }
          .col-title {
            text-align: center;
            font-size: 28*@rem;
            margin-top: 15*@rem;
          }
        }
      }
    }
  }
</style>
