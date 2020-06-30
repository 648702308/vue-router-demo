<template>
  <div class="me">
    <div class="head-box b-image">
      <div class="tips">实名认证用户每日可获得金币</div>
      <div class="info-group box_shadow">
        <div class="info-head box_shadow">
          <img class="head-img" src="../../assets/timgs/head.jpg" alt="">
        </div>
        <div class="info-body">
          <div class="info-name">Y W L</div>
          <div class="gold-coin">
            <img class="gold-coin-img" src="../../assets/timgs/icon-jinbi.png" alt="">
            <span class="coin-number">{{user.coin}}</span>
            <span class="coin-recharge" @click="$router.push({name:'Recharge'})">[充值]</span>
          </div>
        </div>
        <div class="info-foot">
          <div class="info-foot-item certification">
            <img src="../../assets/timgs/me-aut.png" alt="">
            <div class="certified" v-if="certified">
              <p class="tel">
                {{ certificationInfo.telphone.substr(0, 3) + '****' + certificationInfo.telphone.substr(7) }}
              </p>
              <p class="name">{{ certificationInfo.name}}<span class="aut_text">[已认证]</span></p>
            </div>
            <span v-else @click="$router.push({name:'Certification'})">实名认证</span>
          </div>
          <div class="info-foot-item sign">
            <img src="../../assets/timgs/me-qiandao.png" alt="">
            <span v-if="isSign">已签到</span>
            <span v-else @click="signHeader">签到</span>
          </div>
        </div>
      </div>
    </div>

    <div class="echarts-content">
      <v-chart :options="radar" autoresize/>
    </div>

    <div class="share_box">
      <img class="share_img" src="../../assets/timgs/icon-share.png" alt="">
      <span class="text">分享、并查看排行</span>
    </div>
    <div class="foot-btn-group">
      <div class="foot-btn" @click="$router.go(-1)">返 回 首 页</div>
    </div>
    <!--YuiSignIn-->
    <YuiSignIn v-model="showSignPopup" :data="weekDatas"
               @close="showSignPopup=false"
               @receive="receiveHeader">

    </YuiSignIn>

    <!--提示弹窗-->
    <customPopup v-model="showPopup" :options="popupConfig" @close="showPopup=false"></customPopup>
  </div>
</template>

<script>
  import customPopup from '@/components/popup/customPopup.vue'
  import YuiSignIn from '@/components/sign/SignIn.vue'
  import {makeWeek} from "@/api/methodApi";

  let signInCoinDtas = [10, 20, 30, 40, 50, 60, 70];
  export default {
    name: "Me",
    components: {customPopup, YuiSignIn},
    data() {
      return {
        show: false,
        // 认证
        certified: false,
        certificationInfo: {},
        // 签到
        isSign: false,
        showSignPopup: false,
        signDatas: [],
        weekDatas: [],

        showPopup: false,
        popupConfig: {},

        // 雷达图
        radar: {
          title: {
            text: ''
          },
          tooltip: {},
          radar: {
            shape: 'circle',
            splitNumber: 3, // 雷达图圈数设置
            name: {
              textStyle: {
                color: 'rgb(51,51,51)',
                borderRadius: 2,
                padding: [2, 4]
              }
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["#fff"]  // 图表背景网格的颜色
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 2,
                color: 'rgb(104,125,227)' // 图表背景网格线的颜色
              }
            },
            axisLine: {            // 坐标轴线
              show: true,       // 默认显示，属性show控制显示与否
              lineStyle: {
                width: 2,
                color: 'rgb(104,125,227)' // 图表背景网格线的颜色
              }
            },
            indicator: [
              {name: '语文', max: 100},
              {name: '数学', max: 100},
              {name: '英语', max: 100},
            ]
          },
          series: [{
            name: '',
            type: 'radar',
            symbol: "none", // 去掉图表中各个图区域的边框线拐点
            areaStyle: {normal: {}},
            data: [
              {
                value: [90, 85, 95],
                name: '成绩'
              }
            ],
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                  opacity: 0.5,
                  color: "rgba(74,201,246,0.5)" // 图表中各个图区域的颜色
                },
                lineStyle: {
                  color: "rgba(74,201,246,0.5)" // 图表中各个图区域的边框线颜色
                },
              }
            },
          }]
        }
      }
    },
    created() {
      // 判断是否认证
      if (localStorage.getItem('certificationInfo')) {
        this.certificationInfo = JSON.parse(localStorage.getItem('certificationInfo'));
        this.certified = true
      }
      // 判断是否签到
      if (this.user.day === new Date().getDate()) {
        this.isSign = this.user.isSign
      }
      //本周签到数据
      if (localStorage.getItem('signDatas')) {
        if (JSON.parse(localStorage.getItem('signDatas'))[0].day === makeWeek()[0].day) {
          this.signDatas = JSON.parse(localStorage.getItem('signDatas'));
        } else {
          this.signDatas = makeWeek()
        }
      } else {
        this.signDatas = makeWeek()
      }
      let weekDatas = [];
      makeWeek().forEach((item, index) => {
        this.signDatas.forEach((sitem, sindex) => {
          if (item.day === sitem.day) {
            if (sitem.isSign) {
              weekDatas.push({
                name: item.weekstr,
                day: item.day,
                after: item.after,
                isSgin: true,
                coin: signInCoinDtas[index],
              })
            } else {
              weekDatas.push({
                name: item.weekstr,
                day: item.day,
                after: item.after,
                isSgin: false,
                coin: signInCoinDtas[index],
              })
            }
          }
        })
      });
      this.weekDatas = weekDatas;
      console.log(this.user);
    },
    methods: {
      // 签到
      signHeader() {
        if (this.certified) {
          // 签到弹窗
          this.showSignPopup = true;
        } else {
          // 提示认证弹窗
          this.showPopup = true;
          this.popupConfig = {
            title: '温馨提示',
            content: '您还未实名认证、请先实名认证！',
          }
        }
      },

      // 领取
      receiveHeader(data) {
        data.isSign = true;
        this.signDatas.forEach((item, index) => {
          if (item.day === data.day) {
            item.isSign = true
          }
        });
        localStorage.setItem('signDatas', JSON.stringify(this.signDatas));
        this.showSignPopup = false;

        this.$toast('签到成功！');
        this.isSign = true;
        this.user.coin += data.coin;
        this.user.isSign = true;
        this.user.day = data.day;
        localStorage.setItem('xscUser', JSON.stringify(this.user));
      }
    }
  }
</script>

<style scoped lang="less">
  .me {
    .head-box {
      height: 300*@rem;
      background-image: url("../../assets/timgs/me-bg.png");
      position: relative;
      .tips {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 360*@rem;
        height: 60*@rem;
        margin: 0 auto;
        background-color: #fff;
        color: #6b7fe3;
        font-size: 24*@rem;
        border-bottom-right-radius: 10*@rem;
        border-bottom-left-radius: 10*@rem;
      }

      .info-group {
        padding: 30*@rem;
        box-sizing: border-box;
        min-height: 200*@rem;
        background-color: #fff;
        border-radius: 7px;
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -60*@rem;
        margin: auto 30*@rem;
        display: flex;
        align-items: center;
        .info-head {
          flex-shrink: 0;
          height: 130*@rem;
          width: 130*@rem;
          border-radius: 50%;
          overflow: hidden;
          .head-img {
            width: 100%;
            height: 100%;
          }
        }

        .info-body {
          width: 100%;
          padding: 0 20*@rem;
          .info-name {
            font-size: 30*@rem;
          }
          .gold-coin {
            display: flex;
            align-items: center;
            margin-top: 10*@rem;
            .gold-coin-img {
              width: 38*@rem;
              margin-right: 10*@rem;
            }
            .coin-number {
              font-size: 28*@rem;
              margin-right: 10*@rem;
            }
            .coin-recharge {
              color: #687de3;
            }
          }
        }

        .info-foot {
          flex-shrink: 0;
          .info-foot-item {
            display: flex;
            align-items: center;
            padding: 10*@rem 0;
            font-size: 28*@rem;
            img {
              width: 50*@rem;
              margin-right: 10*@rem;
            }

            .certified {
              .tel {
                font-size: 24*@rem;
                color: #687de3;
              }
              .name {
                font-size: 24*@rem;
                .aut_text {
                  color: #cccccc;
                }
              }
            }
          }
        }
      }
    }

    .echarts-content {
      height: 525*@rem;
      width: 525*@rem;
      margin: 80*@rem auto 0 auto;
      .echarts {
        width: 100%;
        height: 100%;
      }
    }
    .share_box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .share_img {
        margin-bottom: 10*@rem;
        width: 38*@rem;
        height: 38*@rem;
      }
      .text {
        font-size: 28*@rem;
      }
    }
  }
</style>
