<template>
  <header class="heade-info-group">
    <div class="info-left">
      <div class="head-img">
        <img class="box_shadow" src="../../assets/timgs/head.jpg" alt="" @click="$router.push({name:'Me'})">
      </div>
      <div class="info-box">
        <p class="info-name">YWL</p>
        <p class="jinbi-box">
          <img class="jinbi-img" src="../../assets/timgs/icon-jinbi.png" alt="">
          <span class="jinbi-num">{{user.coin}}</span>
        </p>
      </div>
    </div>
    <div class="info-right">
      <p class="address-box">
        <span>广元</span>
        <i class="iconfont icon-below-s"></i>
      </p>
      <p class="mag-box"><i class="iconfont icon-lingsheng"></i></p>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="less">
  .heade-info-group {
    display: flex;
    align-items: center;
    padding: 30*@rem;
    .info-left {
      width: 100%;
      display: flex;
      align-items: center;
      .head-img {
        width: 120*@rem;
        height: 120*@rem;
        margin-right: 20*@rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .info-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        .info-name {
          font-size: 30*@rem;
        }
        .jinbi-box {
          display: flex;
          align-items: center;
          .jinbi-img {
            width: 36*@rem;
            height: auto;
            margin-right: 10*@rem;
          }
          .jinbi-num {
            font-size: 30*@rem;
          }
        }
      }
    }

    .info-right {
      flex-shrink: 0;
      .address-box {
        display: flex;
        align-items: center;
        .icon-below-s {
          font-size: 24*@rem;
          margin-left: 6*@rem;
        }
      }
      .mag-box {
        text-align: center;
        .icon-lingsheng {
          font-size: 34*@rem;
        }
      }
    }
  }
</style>
