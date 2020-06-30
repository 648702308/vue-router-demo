<template>
  <div class="rank">
    <ul class="tab-nav-group">
      <li class="tab-nav-item" v-for="(item,index) in tabnavs" :key="item.id"
          :class="{active:tabnavsActive===index}">
        <span class="tab-nav-box" @click="tabHeader(item,index)">{{item.name}}</span>
      </li>
    </ul>
    <div class="rank-body yui-scroll">
      <van-pull-refresh v-model="refreshing"
                        @refresh="onRefresh"
                        :disabled="disabled"
                        success-text="刷新成功">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我是有底线的 ^_^"
          @load="onLoad"
        >
          <div class="rank-list" v-for="(item,index) in list" :key="item">
            <span class="corner-mark">{{index+1>99?'99+':index+1}}</span>
            <div class="info-box">
              <img class="info-head-img box_shadow" src="../../assets/timgs/default-head.png" alt="">
              <div class="info-body">
                <div class="info-body-h">
                  <div class="name-box"><span class="name">姓名</span></div>
                  <div class="address">四川成都</div>
                </div>
                <div class="info-body-b"><span class="grade">新手入门</span></div>
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Rank",
    data() {
      return {
        tabnavs: [
          {id: 1, name: '全国排名'},
          {id: 2, name: '省级排名'},
          {id: 3, name: '市级排名'},
        ],
        tabnavsActive: 0,

        list: [],
        loading: false,
        finished: false,
        refreshing: false,
        disabled: false,
      }
    },
    watch: {
      tabnavsActive: function (val) {
        console.log(val);
        // 清空列表数据
        this.list = [];
        this.onRefresh()
      },
      loading: function (val) {
        if (val) {
          this.disabled = true
        } else {
          this.disabled = false
        }
      }
    },
    methods: {
      tabHeader(item, index) {
        this.tabnavsActive = index;
      },

      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
          }

          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          this.loading = false;
          if (this.list.length >= 30) {
            this.finished = true;
          }
        }, 1000);
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
    }
  }
</script>

<style scoped lang="less">
  .rank {
    display: flex;
    flex-direction: column;
    height: 100%;
    .tab-nav-group {
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      padding: 30*@rem 15*@rem;
      .tab-nav-item {
        width: 33.33333%;
        padding: 0 15*@rem;
        .tab-nav-box {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32*@rem;
          background-color: rgb(230, 230, 230);
          border-radius: 10*@rem;
          padding: 10*@rem 20*@rem;
          color: #fff;
          transition: background-color 0.3s;
        }
        &.active {
          .tab-nav-box {
            background-color: rgb(107, 127, 226);
          }
        }
      }
    }

    .rank-body {
      background-color: #ececec;
      .rank-list {
        height: 220*@rem;
        padding: 35*@rem 20*@rem;
        overflow: hidden;
        background-color: #fff;
        border-radius: 14*@rem;
        display: flex;
        align-items: center;
        position: relative;
        margin: 20*@rem 30*@rem;
        .corner-mark {
          position: absolute;
          top: 0;
          left: 0;
          width: 70*@rem;
          height: 70*@rem;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          &:before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 80*@rem;
            height: 80*@rem;
            background: #61C4CF;
            border-bottom-right-radius: 80*@rem;
          }
        }

        .info-box {
          margin-left: 60*@rem;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .info-head-img {
            width: 136*@rem;
            height: 136*@rem;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
          }
          .info-body {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .info-body-h {
              width: 100%;
              padding-top: 20*@rem;
              padding-left: 30*@rem;
              display: flex;
              align-items: center;
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
              .name-box {
                height: 50*@rem;
                width: 100%;
                overflow: hidden;
                display: flex;
                align-items: center;
                .name {
                  font-size: 28*@rem;
                  color: rgb(107, 127, 226);
                  min-width: 120*@rem;
                  padding: 0 20*@rem;
                  text-align: center;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .address {
                flex-shrink: 0;
                font-size: 24*@rem;
                float: right;
              }
            }
            .info-body-b {
              padding: 10*@rem 30*@rem;
              display: flex;
              .grade {
                font-size: 26*@rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50*@rem;
                min-width: 120*@rem;
                padding: 0 20*@rem;
                background-color: rgb(107, 127, 226);
                color: #fff;
                border-radius: 25*@rem;
              }
            }
          }
        }
      }
    }
  }
</style>
