<template>
  <div class="select-level yui-scroll">
    <div class="level-box">
      <div class="level-list" v-for="(item,index) in levelDatas" :key="index"
           :class="{gray:!item.active}">
        <div class="level-item">
          <div class="content">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectLevel",
    data() {
      return {
        levelDatas: [
          {id: 1, name: '童生', active: true},
          {id: 2, name: '秀才', active: false},
          {id: 3, name: '举人', active: false},
          {id: 4, name: '亚元', active: false},
          {id: 5, name: '解元', active: false},
          {id: 6, name: '贡元', active: false},
          {id: 7, name: '会元', active: false},
          {id: 8, name: '进士', active: false},
          {id: 9, name: '传胪', active: false},
          {id: 10, name: '探花', active: false},
          {id: 11, name: '榜眼', active: false},
          {id: 12, name: '状元', active: false},
          {id: 13, name: '', active: false},
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .select-level {
    background-color: #ececec;
    .gray {
      -webkit-filter: grayscale(100%);
      filter: progid:DXImageTransform.Microsoft.BasicImage(graysale=1);
      pointer-events: none;
    }
    .level-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 30*@rem;
      .level-list {
        width: 33.3333%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25*@rem 0;
        .level-item {
          width: 186*@rem;
          height: 186*@rem;
          border-radius: 14*@rem;
          background-color: #fff;
          padding: 10*@rem;
          position: relative;
          font-size: 40*@rem;
          color: #fff;
          overflow: hidden;
          .content {
            background-color: #6b7fe2;
            border-radius: 14*@rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        &:last-child {
          .level-item {
            .content {
              background-color: transparent;
              background-image: url("../../assets/timgs/brush-hg.png");
              background-position: center center;
              background-size: auto 100%;
              background-repeat: no-repeat;
              color: transparent;
            }
          }
        }
      }
    }
  }
</style>
