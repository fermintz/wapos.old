<template>
  <v-dialog 
    v-model="visible" 
    width="unset"
    transition="slide-y-transition"
    overlay-opacity="0.8"
    overlay-color="#000"
  >
    <div class="pointUse">
      <div class="dialogHead">
        <span>포인트사용하기</span>
        <v-btn text @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="dialogBody">
        <div class="myPoint">
          <div class="myPointCircle">
            <label>나의 포인트</label>
            <span>{{ myPointAmount | numeral('0,0')}}P</span>
          </div>
        </div>
        <dl class="usePoint">
          <dt>사용할 포인트</dt>
          <dd>{{ pointValue }} <span>포인트</span></dd>
        </dl>

        <div class="btns">
          <div class="pointBtn">
            <v-btn outlined @click="pointAdd(500)">500 추가</v-btn>
          </div>
          <div class="pointBtn">
            <v-btn @click="pointAdd(1000)" click="" outlined>1,000 추가</v-btn>
          </div>

          <v-btn width="150px" outlined @click="pointValue = 0" class="clearBtn"
            >초기화</v-btn
          >
        </div>

        <div class="divider"></div>

        <v-btn class="completeBtn" outlined @click="done">
          포인트 사용하기
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ['min', 'max'],
  data() {
    return {
      visible: false,
      pointValue: 0,
      pointUseValue:0,
      myPoint: this.$store.state.user.point,
    };
  },

  computed:{
    myPointAmount(){
      return this.myPoint - this.pointValue
    }
  },

  methods: {
    pointAdd(value) {
      const totalUsePoint = this.pointValue + value;
      if (totalUsePoint > this.myPoint) return;
      if (totalUsePoint < this.max) {
        this.pointValue += value;
      }
    },
    open(state) {
      this.visible = state;
    },
    closeModal() {
      this.visible = !this.visible;
    },
    done() {
      this.$emit('update:usePoint', this.pointValue);
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.pointUse {
  border-radius: 15px;
  overflow: hidden;
  background:#fff;
  width:560px;
}

.dialogHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background:#f8f8f8;
  padding:20px;
  overflow: hidden;

  span {
    font-size: 24px;
    font-weight:500;
    color: #494949;
  }
  .v-btn {
    min-width:50px;
    width:50px;
    height:50px;
  }
  .v-icon {
    color:#292929;
    font-size: 40px;
  }
}

.dialogBody {
  background: #fff;
  padding:30px;

  .myPoint {

    .myPointCircle{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border:2px solid #e2e2e2;
      border-radius:10px;
      height:80px;
      padding:0 15px;
      background:#f8f8f8;
    }

    label {
      font-size: 18px;
      color: #494949;
    }
    
    span{
      font-size: 32px;
      font-weight: 500;
      color:#0085de
    }
  }

  dl.usePoint {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:2px solid #e2e2e2;
    border-radius:10px;
    height:80px;
    padding:0 15px;
    margin-top:20px;
    
    dt {
      text-align: left;
      width: 100%;
      font-size: 18px;
      color: #494949;
    }

    dd {
      width: 100%;
      text-align: right;
      font-size: 32px;
      font-weight: 500;
      color: #EE2073;

      span {
        font-size: 22px;
        color: #292929;
      }
    }
  }

  .btns {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .pointBtn {
      flex: 1;
      margin-right: 20px;

      .v-btn {
        width: 100%;
        height: 60px;
        font-size: 22px;
        border-radius: 10px;
        border: 2px solid #EE2073;
        color: #EE2073;
      }
    }
    .pointBtn:last-child {
      margin-right: 0px;
    }

    .clearBtn {
      width: 150px;
      height: 60px;
      font-size: 22px;
      border-radius: 10px;
      border: 2px solid #c2c2c2;
    }
  }

  .v-btn.completeBtn {
    width: 100%;
    height: 70px;
    border: 0px;
    border-radius: 15px;
    background: #0085de;
    color: #fff;
    font-size: 24px;
  }

  .divider {
    height: 2px;
    background: #e2e2e2;
    margin:30px 0;
  }
}
</style>
