<template>
  <van-overlay class="custom-popup" :show="show">
    <div class="wrapper" @click="closeHeader">
      <div class="moudel-content" @click.stop>
        <div class="moudel-head">{{ options.title||'' }}</div>
        <div class="moudel-body">
          <div class="content">{{ options.content||'' }}</div>
        </div>
        <div class="moudel-foot">
          <div class="btn" @click="closeHeader">确定</div>
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
  export default {
    name: "customPopup",
    props: {
      value: {type: Boolean, default: false},
      options: {
        type: Object, default: () => {
          return {}
        }
      },
    },
    data() {
      return {
        show: false
      }
    },
    watch: {
      value(val) {
        this.show = val
      }
    },
    mounted() {
      this.show = this.value
    },
    methods: {
      closeHeader() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="less">
  .custom-popup {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .moudel-content {
      background-color: #fff;
      width: 540*@rem;
      border-radius: 14*@rem;
      padding: 20*@rem 0;
      .moudel-head {
        font-size: 38*@rem;
        text-align: center;
        padding: 15*@rem 30*@rem;
      }

      .moudel-body {
        padding: 30*@rem;
        min-height: 200*@rem;
        max-height: 210*@rem;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .content {
          font-size: 30*@rem;
        }
      }
      .moudel-foot {
        padding: 15*@rem;
        .btn {
          height: 70*@rem;
          width: 370*@rem;
          background: #6b7fe3;
          border-radius: 14*@rem;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      }
    }
  }
</style>
