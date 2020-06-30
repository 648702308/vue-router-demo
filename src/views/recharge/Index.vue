<template>
  <div class="recharge">
    <van-radio-group v-model="radio">
      <div class="radio-item" v-for="(item,index) in rechargeData" :key="item.id">
        <div class="radio-item-left">
          <img class="img" src="../../assets/timgs/gold_coin_bg.png"/>
          <span class="ride">×</span>
          <span class="gold-coin-num">{{item.coin}}</span>
        </div>
        <div class="radio-item-right">
          <span class="recharge-price">￥{{item.price}}</span>
          <van-radio :name="item.id" checked-color="#6b7fe3"></van-radio>
        </div>
      </div>
    </van-radio-group>

    <div class="foot-btn-group">
      <div class="foot-btn" :class="{disabled:!radio}">立 即 购 买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recharge",
    data() {
      return {
        rechargeData: [
          {id: 1, coin: 20, price: 2},
          {id: 2, coin: 120, price: 10},
          {id: 3, coin: 400, price: 30},
          {id: 4, coin: 750, price: 50},
          {id: 5, coin: 2000, price: 100},
        ],
        radio: '',
      }
    }
  }
</script>
<style scoped lang="less">
  .recharge {
    .radio-item {
      height: 150*@rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30*@rem;
      position: relative;
      &::after {
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        right: 0;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #ebedf0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      .radio-item-left {
        display: flex;
        align-items: center;
        .ride {
          margin-right: 20*@rem;
          font-size: 36*@rem;
          line-height: 1;
        }
        .img {
          width: 100*@rem;
          height: auto;
          margin-right: 30*@rem;
        }
        .gold-coin-num {
          font-size: 34*@rem;
        }
      }
      .radio-item-right {
        display: flex;
        align-items: center;
        .recharge-price {
          margin-right: 20*@rem;
          font-size: 38*@rem;
          color: rgb(251, 233, 69);
          margin-top: 7*@rem;
        }
      }
    }
  }
</style>
