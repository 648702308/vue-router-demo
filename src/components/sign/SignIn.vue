<template>
  <div class="sign_in_page" v-if="show">
    <div class="sign_in_group animated" :class="activeCalss">
      <span class="close_btn" @click="closeHeader()"></span>
      <div class="sign-head-bg">
        <img src="../../assets/timgs/sign_bg.png" alt="">
      </div>
      <div class="content_box">
        <ul class="content_group">
          <li class="sign_list flex_group_column" v-for="item in data" :class="{active:item.after<0}">
            <div class="day_week">{{ item.name }}</div>
            <div class="gold_coin_bg">
              <span class="number">×{{ item.coin }}</span>
            </div>
            <div class="sign_state" v-if="item.isSgin">已领取</div>
            <div class="sign_state" v-else>未领取</div>
          </li>
        </ul>
        <div class="sureBtn" @click="receiveHeader">领 取</div>
        <!--<div class="sureBtn disabled gray" >已 领 取</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
    props: {
      data: {type: Array, required: true},
      value: {type: Boolean, default: false}
    },
    data() {
      return {
        show: false,
        activeCalss: 'fadeInUp'
      }
    },
    watch: {
      value(val) {
        this.show = val;
        if (val) {
          this.activeCalss = 'fadeInUp'
        }
      }
    },
    mounted() {
      this.show = this.value
    },
    methods: {
      closeHeader() {
        this.activeCalss = 'fadeOutDown';
        setTimeout(() => {
          this.show = false;
          this.$emit('close')
        }, 500);
      },
      receiveHeader() {
        let today = '';
        this.data.forEach((item, index) => {
          if (item.after === 0) {
            today = item
          }
        });
        this.$emit('receive', today)
      }
    }
  }
</script>

<style scoped lang="less">
  .sign_in_page {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 500;
    padding: 70*@rem 40*@rem 70*@rem;

    .sign_in_group {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      .sign-head-bg {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 2;
        img {
          width: 100%;
        }
      }
      .close_btn {
        display: inline-block;
        position: absolute;
        width: 37*@rem;
        height: 37*@rem;
        border-radius: 50%;
        overflow: hidden;
        top: 0;
        right: 24*@rem;
        text-align: center;
        line-height: 37*@rem;
        color: #fff;
        background-image: url("../../assets/timgs/close.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        z-index: 3;
      }

      .content_box {
        width: 580*@rem;
        overflow: hidden;
        margin: 50*@rem auto 0;
        position: relative;
        background-color: #fff;
        padding: 70*@rem 20*@rem 50*@rem;
        z-index: 1;
        border-radius: 20*@rem;
        .content_group {
          width: 100%;
          height: 100%;
          overflow: hidden;
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          .sign_list {
            width: 33.3333%;
            padding: 15*@rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &.active {
              position: relative;
              &:after {
                display: inline-block;
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(255, 255, 255, 0.5);
              }
            }

            .day_week {
              width: 120*@rem;
              height: 40*@rem;
              color: #fff;
              border-radius: 20*@rem;
              line-height: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24*@rem;
              background-color: #687de3;
              padding-top: 4*@rem;
              margin-bottom: 14*@rem;
            }
            .gold_coin_bg {
              width: 120*@rem;
              height: 120*@rem;
              border-radius: 50%;
              background-color: #687de3;
              padding: 28*@rem;
              margin-bottom: 28*@rem;
              background-image: url("../../assets/timgs/gold_coin_bg.png");
              background-size: 50% auto;
              background-repeat: no-repeat;
              background-position: center center;
              position: relative;

              .number {
                background-color: #aebcff;
                width: 70*@rem;
                height: 34*@rem;
                border-radius: 15*@rem;
                color: #fff;
                font-size: 22*@rem;
                text-align: center;
                position: absolute;
                bottom: -8*@rem;
                left: 0;
                right: 0;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1;
              }
            }
            .sign_state {
              color: #ef9959;
              font-size: 30*@rem;
              font-weight: bold;
              line-height: 1;
            }
          }
        }

        .sureBtn {
          height: 77*@rem;
          width: 378*@rem;
          margin: 20*@rem auto 0;
          font-size: 30*@rem;
          text-align: center;
          line-height: 77*@rem;
          background-color: #687de3;
          color: #fff;
          border-radius: 10*@rem;
        }
      }
    }
  }
</style>
