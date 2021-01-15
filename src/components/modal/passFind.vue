<template>
  <v-dialog
    v-model="visible"
    overlay-color="#000"
    overlay-opacity="0.8"
    width="unset"
  >
    <div :class="{passFind:true, rePassword:state}">
      <div class="head">
        <h4>{{!state ? '임시비밀번호 입력' : '비밀번호 재설정' }}</h4>
        <p v-if="!state">휴대폰에 발송된 임시비밀번호를 입력해주세요</p>
        <p v-else>사용하실 비밀번호를 다시 설정해주세요</p>
      </div>

      <div class="passwordView">
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="keypad">
        <div class="number">
          <div class="rowLine">
            <div class="numberKey" v-for="col in 5" :key="col">
              <v-btn outlined>{{ col }}</v-btn>
            </div>
          </div>
          <div class="rowLine">
            <div class="numberKey" v-for="col in 4" :key="col">
              <v-btn outlined>{{ col + 5 }}</v-btn>
            </div>
            <div class="numberKey">
              <v-btn outlined>0</v-btn>
            </div>
          </div>
        </div>
        <div class="control">
          <v-btn outlined @click="state = !state">다시입력</v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      state:false
    };
  },
  methods: {
    open(value) {
      this.visible = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.passFind {
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  font-size: 32px;

  .head {
    h4 {
      font-size: 32px;
      font-weight: 500;
    }
    p {
      font-size: 18px;
      margin-top: 10px;
      color: #888;
      margin-bottom: 0px;
    }
  }

  .passwordView {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #292929;
    border-radius: 10px;
    height: 70px;
    margin: 30px 0;

    span {
      display: block;
      width: 24px;
      height: 24px;
      background: #fff;
      margin: 0 15px;
      border-radius: 50%;
    }

    span.active{
      background:#EC1F72
    }
  }

  .keypad {
    display: flex;

    .number {
      flex: 1;

      .rowLine {
        display: flex;
        margin-left: -10px;
        margin-bottom: 20px;

        .numberKey {
          width: 20%;
          padding: 0 10px;
        }
        .v-btn {
          width: 100%;
          height: 60px;
          font-size: 24px;
          border: 2px solid #c2c2c2;
          border-radius: 10px;
          background: #fff;
        }
      }

      .rowLine:last-child {
        margin-bottom: 0px;
      }
    }
    .control {
      width: 130px;
      margin-left: 10px;

      .v-btn {
        width: 130px;
        height: 140px;
        font-size: 24px;
        border: 2px solid #c2c2c2;
        border-radius: 10px;
        background: #fff;
      }
    }
  }
}

.rePassword {
  .passwordView{
    background:#0085DE;

    span{
      background:#fff;
    }

    span.active{
      background:#FFC400
    }
  }
}
</style>
