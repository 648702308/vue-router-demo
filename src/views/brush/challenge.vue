<template>
  <div class="challenge">
    <div class="challenge-head">
      <div class="topic-numbers">
        <div class="topic-num-item"
             :class="{active:item.active,disabled:item.after}"
             v-for="(item,index) in datas" :key="item.id">{{index+1}}
        </div>
      </div>
    </div>
    <div class="challenge-body">
      <div class="answer-content">
        you can touch it _____ you can't eat it.
      </div>
      <div class="answer-content-b">
        <div class="look-answer">
          <button class="look-btn">答案分析</button>
          <img class="coin-img" src="../../assets/timgs/icon-jinbi.png" alt="">
          <span class="need-coin">{{2}}</span>
        </div>
        <div class="answer-next">
          <button class="next-btn">完成</button>
          <button class="next-btn">下一题</button>
        </div>
      </div>
    </div>
    <div class="challenge-foot">
      <div class="answer-btns">
        <div class="answer-btn box_shadow error">答案1</div>
        <div class="answer-btn box_shadow">答案1</div>
        <div class="answer-btn box_shadow">答案1</div>
        <div class="answer-btn box_shadow">答案1</div>
        <div class="answer-btn box_shadow">答案1</div>
        <div class="answer-btn box_shadow">答案1</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Challenge",
    data() {
      return {
        datas: [
          {id: 1, active: false, after: true},
          {id: 2, active: false, after: true},
          {id: 3, active: false, after: true},
          {id: 4, active: true, after: false},
          {id: 5, active: false, after: false},
          {id: 6, active: false, after: false},
          {id: 7, active: false, after: false},
          {id: 8, active: false, after: false},
          {id: 9, active: false, after: false},
          {id: 10, active: false, after: false},
          {id: 11, active: false, after: false},
          {id: 12, active: false, after: false},
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .challenge {
    height: 100%;
    background-color: #50c7eb;
    display: flex;
    flex-direction: column;
    .challenge-head {
      flex-shrink: 0;
      .topic-numbers {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 27*@rem;
        .topic-num-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50*@rem;
          height: 50*@rem;
          border: solid 1px #ececec;
          border-radius: 50%;
          font-size: 30*@rem;
          margin: 4*@rem;
          background-color: #ececec;
          transition: background-color 0.3s;
          &.active {
            background-color: #6b7fe3;
            color: #fff;
          }
          &.disabled {
            background-color: #ddd;
            pointer-events: none;
          }
        }
      }
    }

    .challenge-body {
      flex-shrink: 0;
      min-height: 380*@rem;
      overflow: auto;
      display: flex;
      align-items: center;
      padding: 30*@rem 30*@rem 90*@rem 30*@rem;
      position: relative;
      .answer-content {
        width: 100%;
        text-align: center;
        font-size: 30*@rem;
      }
      .answer-content-b {
        position: absolute;
        bottom: 15*@rem;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30*@rem;
        .look-answer {
          display: flex;
          align-items: center;
          .look-btn {
            padding: 6*@rem 20*@rem;
            background-color: #6b7fe2;
            color: #fff;
            border-radius: 10*@rem;
            font-size: 24*@rem;
          }
          .coin-img {
            width: 36*@rem;
            height: auto;
            margin: 0 10*@rem;
          }
          .need-coin {
            font-size: 24*@rem;
          }
        }
        .answer-next {
          .next-btn {
            padding: 10*@rem 30*@rem;
            background-color: #6b7fe2;
            color: #fff;
            border-radius: 10*@rem;
            font-size: 28*@rem;
          }
        }
      }

    }

    .challenge-foot {
      flex: 1;
      padding: 30*@rem 30*@rem;
      overflow: auto;
      .answer-btns {
        .answer-btn {
          margin: 30*@rem 70*@rem;
          height: 130*@rem;
          padding: 0 90*@rem;
          border-radius: 65*@rem;
          color: rgb(104, 125, 227);
          font-size: 34*@rem;
          position: relative;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
          &:active {
            background-color: #ececec;
          }
          &:after {
            display: inline-block;
            content: '';
            width: 34*@rem;
            height: 34*@rem;
            position: absolute;
            right: 40*@rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-position: center center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          &.correct {
            background-color: rgb(151, 226, 118);
            color: #fff;
            pointer-events: none;
            &:after {
              background-image: url(../../assets/timgs/icon-correct.png);
            }
          }
          &.correct ~ .answer-btn, &.error ~ .answer-btn {
            opacity: 0.5;
            pointer-events: none;
          }
          &.error {
            background-color: rgb(239, 153, 89);
            color: #fff;
            pointer-events: none;
            &:after {
              background-image: url(../../assets/timgs/icon-error.png);
            }
          }
        }
      }
    }
  }
</style>
