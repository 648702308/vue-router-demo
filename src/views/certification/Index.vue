<template>
  <div class="certification">
    <van-cell-group>
      <van-field v-model="name" clearable placeholder="请输入您的姓名"></van-field>
      <van-field v-model="telphone" type="digit" clearable maxlength="11" placeholder="请输入您的手机号"></van-field>
      <van-field v-model="areaStr" readonly clearable placeholder="省、市、区" @click="showArea = true"></van-field>
      <van-field v-model="schoolName" clearable placeholder="填写您的学校"></van-field>
      <van-field v-model="vcode" type="digit" clearable maxlength="6" placeholder="请输入短信验证码">
        <template slot="button">
          <span class="vcode-btn">发送短信验证码</span>
        </template>
      </van-field>
    </van-cell-group>

    <!--地址三级联动-->
    <van-popup class="sss" v-model="showArea" position="bottom">
      <van-area :area-list="areaList" :value="activeArea"
                @confirm="onConfirmArea"
                @cancel="showArea = false"></van-area>
    </van-popup>

    <div class="foot-btn-group">
      <div class="foot-btn" :class="{disabled:btnDisabled}" @click="onSubmit">确认</div>
    </div>
  </div>
</template>

<script>
  import city from "@/config/city";

  export default {
    name: "Certification",
    data() {
      return {
        showArea: false,
        areaList: city,
        name: '',
        telphone: '',
        area: [],
        schoolName: '',
        vcode: ''
      }
    },
    computed: {
      activeArea() {
        if (this.area.length) {
          return this.area[this.area.length - 1].code
        } else {
          return ''
        }
      },
      areaStr() {
        return this.area.map((item) => item.name).join('、');
      },
      btnDisabled() {
        if (!this.name) {
          return true
        } else if (!this.telphone) {
          return true
        } else if (!this.area.length) {
          return true
        } else if (!this.schoolName) {
          return true
        } else if (!this.vcode) {
          return true
        } else {
          return false
        }
      }
    },
    created() {
      if (localStorage.getItem('certificationInfo')) {
        this.name = JSON.parse(localStorage.getItem('certificationInfo')).name;
        this.telphone = JSON.parse(localStorage.getItem('certificationInfo')).telphone;
        this.area = JSON.parse(localStorage.getItem('certificationInfo')).area;
        this.schoolName = JSON.parse(localStorage.getItem('certificationInfo')).schoolName;
      }
    },
    mounted() {

    },
    methods: {
      onConfirmArea(data) {
        this.area = data;
        this.showArea = false;
      },
      // 提交
      onSubmit() {
        localStorage.setItem('certificationInfo', JSON.stringify({
          name: this.name,
          telphone: this.telphone,
          area: this.area,
          schoolName: this.schoolName,
          vcode: this.vcode,
        }));

        this.$toast('认证成功！');
        setTimeout(() => {
          this.$router.go(-1)
        }, 500)
      }
    }
  }
</script>
<style lang="less">
  .sss {
    .van-picker__cancel, .van-picker__confirm {
      font-size: 30*@rem;
    }
    .van-picker__confirm {
      color: #6b7fe3;
    }
  }
</style>
<style scoped lang="less">
  .certification {
    .van-cell {
      font-size: 30*@rem;
      padding: 30*@rem;
    }

    .vcode-btn {
      color: #6b7fe3;
      margin-left: 30*@rem;
    }
  }

</style>
