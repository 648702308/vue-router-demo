<template>
  <div class="pkduel yui-scroll">
    <!--轮播-->
    <div class="head-swiper">
      <!--YuiSwiper-->
      <YuiSwiper :data="swiperList"></YuiSwiper>
    </div>

    <!--等级列表-->
    <div class="grade-body">
      <div class="grade-list" :class="{gray:!item.active}"
           v-for="(item,index) in gradeDatas" :key="item.id" @click="gradeHeader(item,index)">
        <div class="grade-img-box">
          <img src="../../assets/timgs/xinshou.png" alt="">
        </div>
        <div class="grade-cont-box">
          <div class="grade-cont-item grade-name-box">
            <span class="grade-name">{{item.name}}</span>
          </div>
          <div class="grade-cont-item grade-star-box">
            <div class="star-lists">
              <img class="star" v-for="(sitem,sindex) in item.star" :key="sindex"
                   :class="{gray:item.starActive<(sindex+1)}"
                   src="../../assets/timgs/icon-star.png" :title="sindex+1" alt="">
            </div>
            <div class="star-num">{{item.starActive}} / {{item.star}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import YuiSwiper from '@/components/swiper/Swiper.vue'

  import banner1 from '@/assets/timgs/banner-1.png'

  export default {
    name: "Pkduel",
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

        gradeDatas: [
          {id: 1, name: '草民', active: true, star: 3, starActive: 3},
          {id: 2, name: '里长', active: true, star: 4, starActive: 1},
          {id: 3, name: '县吏', active: false, star: 5, starActive: 0},
          {id: 4, name: '亭长', active: false, star: 5, starActive: 0},
          {id: 5, name: '县尉', active: false, star: 5, starActive: 0},
          {id: 6, name: '三老', active: false, star: 5, starActive: 0},
          {id: 7, name: '县长', active: false, star: 5, starActive: 0},
          {id: 8, name: '县令', active: false, star: 5, starActive: 0},
          {id: 9, name: '监御史', active: false, star: 5, starActive: 0},
          {id: 10, name: '都尉', active: false, star: 5, starActive: 0},
          {id: 11, name: '中郎将', active: false, star: 5, starActive: 0},
          {id: 12, name: '中常侍', active: false, star: 5, starActive: 0},
          {id: 13, name: '郡太守', active: false, star: 5, starActive: 0},
          {id: 14, name: '州牧', active: false, star: 5, starActive: 0},
          {id: 15, name: '少府', active: false, star: 5, starActive: 0},
          {id: 16, name: '大司农', active: false, star: 5, starActive: 0},
          {id: 17, name: '宗正', active: false, star: 5, starActive: 0},
          {id: 18, name: '大鸿胪', active: false, star: 5, starActive: 0},
          {id: 19, name: '廷尉', active: false, star: 5, starActive: 0},
          {id: 20, name: '太仆', active: false, star: 5, starActive: 0},
          {id: 21, name: '卫尉', active: false, star: 5, starActive: 0},
          {id: 22, name: '光禄勋（郎中令）', active: false, star: 5, starActive: 0},
          {id: 23, name: '太常（奉常）', active: false, star: 5, starActive: 0},
          {id: 24, name: '司空（御史大夫）', active: false, star: 5, starActive: 0},
          {id: 25, name: '司马（太尉）', active: false, star: 5, starActive: 0},
          {id: 26, name: '司徒（成像）', active: false, star: 5, starActive: 0},
          {id: 27, name: '太保', active: false, star: 5, starActive: 0},
          {id: 28, name: '太傅', active: false, star: 5, starActive: 0},
          {id: 29, name: '太师', active: false, star: 5, starActive: 0},
          {id: 30, name: '小升初王者', active: false, star: 5, starActive: 0},
        ]
      }
    },
    methods: {
      gradeHeader() {

      }
    }
  }
</script>

<style scoped lang="less">
  .pkduel {
    padding: 30*@rem 0;
    height: 100%;
    background-color: #ececec;
    .head-swiper {
      height: 300*@rem;
      background-color: #ececec;
      margin: 0 30*@rem;
      border-radius: 16*@rem;
      overflow: hidden;
      font-size: 0;
    }
    .grade-body {
      margin-top: 30*@rem;
      .gray {
        -webkit-filter: grayscale(100%);
        filter: progid:DXImageTransform.Microsoft.BasicImage(graysale=1);
        pointer-events: none;
      }
      .grade-list {
        background-color: #fff;
        margin: 30*@rem 30*@rem 0 30*@rem;
        border-radius: 10*@rem;
        padding: 30*@rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
        &:active {
          background-color: #ddd;
        }
        .grade-img-box {
          flex-shrink: 0;
          width: 136*@rem;
          height: 136*@rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .grade-cont-box {
          display: flex;
          height: 150*@rem;
          width: 100%;
          justify-content: center;
          flex-direction: column;
          margin-left: -7*@rem;
          .grade-cont-item {
            height: 50%;
          }
          .grade-name-box {
            display: flex;
            align-items: flex-end;
            .grade-name {
              min-width: 120*@rem;
              padding: 6*@rem 30*@rem;
              text-align: center;
              font-size: 30*@rem;
              position: relative;
              &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 1px;
                bottom: 0;
                left: 0;
                border-bottom: solid 1px rgb(107, 127, 226);
              }
            }
          }
          .grade-star-box {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            .star-lists {
              font-size: 0;
              display: flex;
              flex-direction: row-reverse;
              .star {
                width: 42*@rem;
                height: auto;
                margin-left: 10*@rem;
              }
            }
            .star-num {
              margin-left: 10*@rem;
              font-size: 28*@rem;
            }
          }
        }
      }
    }
  }
</style>
