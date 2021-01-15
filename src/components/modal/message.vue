<template>
  <v-dialog v-model="visible" width="unset" overlay-opacity="0.8">
    <div class="message">
      <div class="confirm" v-show="type === 'confirm'">
        <h4>{{ title }}</h4>
        <p>{{ descriptino }}</p>
        <div class="btns">
          <v-btn text class="cancle">취소</v-btn>
          <v-btn text class="finish">확인</v-btn>
        </div>
      </div>

      <div class="progress" v-show="type === 'progress'">
        <v-progress-circular
          indeterminate
          size="80"
          width="8"
          color="#EC1F72"
          style="margin-bottom:30px;"
        />
        <h4>{{ title }}</h4>
        <p>잠시만 기다려주세요</p>
      </div>

      <div class="normal" v-show="type === 'normal'">
        <h4>{{ title }}</h4>
        <p>{{ descriptino }}</p>
        <v-btn text>확인</v-btn>
      </div>

      <div class="pass" v-show="type === 'pass'">
        <v-icon>mdi-email-receive-outline</v-icon>
        <h4>임시비밀번호를 발송하였습니다</h4>
        <p>휴대폰으로 발송된 임시비밀번호를 확인해주세요</p>
        <v-btn text>확인</v-btn>
      </div>

      <div class="card-error" v-show="type === 'error'">
        <v-icon>mdi-close-circle</v-icon>
        <h4>결제에 실패하였습니다</h4>
        <p>다시 결제를 진행해주세요</p>
        <v-btn text>확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ["type", "title", "description"],
  data() {
    return {
      visible: false,
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
.message {
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 15px;
    padding: 30px 60px;
  }

  .v-icon {
    font-size: 80px;
    margin-bottom: 30px;
    animation: scaleUp 0.5s forwards ease-in-out;
    animation-delay: 0.1s;
    color:#EC1F72;
    opacity: 0;
  }

  @keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
      
    }
  }

  h4 {
    font-size: 32px;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    margin-top: 5px;
    color: #888;
  }
  .v-btn {
    font-size: 18px;
    height: 54px;
    width: 150px;
    margin: 30px 10px 10px 0;
    border-radius: 27px;
    background: #0085de;
    color: #fff;
  }

  .v-btn.cancle {
    background: #a2a2a2;
  }

  .card-error {
    .v-icon {
      color: #d22828;
    }
  }
}
</style>
