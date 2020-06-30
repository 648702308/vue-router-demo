<template>
  <div class="challenge-enter">
    <div class="challenge-head">
      <div class="challenge-head-left">
        <img class="coin-img" src="../../assets/timgs/icon-jinbi.png" alt="">
        <span class="coin-num">{{user.coin}}</span>
      </div>
      <div class="challenge-head-right">今日剩余免费挑战次数：<span class="free-num">{{5}}</span></div>
    </div>

    <div class="challenge-body">
      <h4 class="b-title">连续回答十二道问题</h4>
      <p class="b-tips">答对6道获得1金币</p>
      <p class="b-tips">答对12道获得3金币</p>
    </div>

    <div class="challenge-foot">
      <div class="start-btn" @click="$router.push({name:'Challenge'})">
        开 始 挑 战
        <p class="start-coin-box">
          <img class="coin-img" src="../../assets/timgs/icon-jinbi.png" alt="">
          <span class="coin-num">{{user.coin}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChallengeEnter"
  }
</script>

<style scoped lang="less">
  .challenge-enter {
    height: 100%;
    background-color: #50c7eb;
    display: flex;
    flex-direction: column;
    .challenge-head {
      padding: 50*@rem 30*@rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .challenge-head-left {
        display: flex;
        align-items: center;
        .coin-img {
          width: 40*@rem;
          height: auto;
          margin-right: 10*@rem;
        }
        .coin-num {
          font-size: 30*@rem;
        }
      }
      .challenge-head-right {
        font-size: 30*@rem;
        .free-num {
          font-weight: bold;
        }
      }
    }

    .challenge-body {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .b-title {
        font-size: 36*@rem;
        margin-bottom: 50*@rem;
      }
      .b-tips {
        font-size: 26*@rem;
        line-height: 1.8;
      }
    }

    .challenge-foot {
      padding: 30*@rem 30*@rem 100*@rem 30*@rem;
      .start-btn {
        height: 130*@rem;
        background: #6b7fe3;
        border-radius: 16*@rem;
        font-size: 34*@rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: opacity 0.3s;
        &:active {
          opacity: 0.8;
        }
        .start-coin-box {
          position: absolute;
          right: 20*@rem;
          display: flex;
          align-items: center;
          padding: 0 30*@rem;
          .coin-img {
            width: 40*@rem;
            height: auto;
            margin-right: 10*@rem;
          }
          .coin-num {
            font-size: 30*@rem;
          }
        }
      }
    }
  }
</style>
