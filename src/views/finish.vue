<template>
  <BaseLayout>
    <div class="finish">
      <div class="finishText">
        <div class="icon">
          <v-icon>
            mdi-check-circle
          </v-icon>
        </div>
        <h4>결제가 완료되었습니다</h4>
        <p>* 결제하신 장비에서 <b>시작하기 버튼을 반드시 눌러</b>주세요</p>
      </div>
      <div class="total">
        <dl class="goodsPrice">
          <dt>상품금액</dt>
          <dd>5,000 원</dd>
        </dl>
        <v-icon>
          mdi-minus
        </v-icon>
        <dl class="usePoint">
          <dt>사용한 포인트</dt>
          <dd>2,500 포인트</dd>
        </dl>
        <v-icon>
          mdi-equal
        </v-icon>
        <dl class="lastPrice">
          <dt>최종결제금액</dt>
          <dd>2,500 원</dd>
        </dl>
      </div>
      <div class="orderInfo">
        <div class="left">
          <dl>
            <dt>회원번호</dt>
            <dd>010-8525-4561</dd>
          </dl>
          <dl>
            <dt>장비명</dt>
            <dd>1번 세탁기</dd>
          </dl>
          <dl>
            <dt>상품명</dt>
            <dd>30분 표준세탁</dd>
          </dl>         
        </div>
        <div class="right">
          <dl class="bonus">
            <dt>추가 적립포인트</dt>
            <dd>250 포인트</dd>
          </dl>
          <dl>
            <dt>현금초과 적립포인트</dt>
            <dd>500 포인트</dd>
          </dl>
          <dl class="userPoint">
            <dt>남은 포인트</dt>
            <dd>2,500 포인트</dd>
          </dl>
        </div>
      </div>

      <div class="bottom">
        <div class="counter">
          <strong>10초</strong> 후 자동으로<br> 
          메인화면으로 이동합니다
        </div>
        <div class="btns">
          <v-btn text class="use">
            <label>장비추가 이용하기</label>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <v-btn text class="home" @click="$router.push('/')">
            <label>메인으로 돌아가기</label>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/layout/base.vue'

export default {
  components:{
    BaseLayout
  }
}
</script>

<style lang="scss">

.finish{
  position: relative;
  height:100%;

  .finishText{
    text-align:center;
    margin-bottom:40px;
    .icon{
      animation:checkOn 0.5s forwards ease-in-out;
      .v-icon{
        font-size:100px;
        color:#EE2073;
        
      }
    }
    @keyframes checkOn {
      0%{
        transform:scale(0)
      }
      50%{
        transform:scale(2)
      }
      100%{
        transform:scale(1)
      }
    }
    h4{
      font-size:42px;
      font-weight:500;
      margin-top:20px;
    }
    p{
      display:inline-block;
      padding:0 20px;
      font-size:24px;
      margin-top:10px;
      height:36px;
      border-radius:18px;
      background:#EE2073;
      color:#fff;
      b{
        color:#fbff00;
        font-weight:400
      }
    }
  }

  .total{
    display:flex;
    background:#fff;
    border-radius:15px;
    border:2px solid #e2e2e2;
    justify-content: space-around;
    align-items: center;
    padding:15px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

    .v-icon{
      width:50px;
      height:50px;
      background:#c2c2c2;
      color:#fff;
      font-size:32px;
      border-radius:25px;
    }

    dl{
      text-align:center;
      dt{
        font-size:16px;
        margin-bottom:5px;
        color:#888;
      }
      dd{
        font-size:24px;
        font-weight:500;
      }
    }

    dl.usePoint{
      dd{color:#0085DE}
    }
    dl.lastPrice{
      dd{color:#EE2073}
    }
  }

  .orderInfo{
    display:flex;
    background:#fff;
    border-radius:15px;
    border:2px solid #e2e2e2;
    margin-top:20px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

    .left, .right{
      flex:1;
      padding:40px;
    }

    .left{border-right:1px solid #e2e2e2}
    .right{border-left:1px solid #e2e2e2}


    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;  
      font-size:18px;
      margin-bottom:20px;

      dt{color:#888;}
      dd{
        color:#292929;
        letter-spacing: 0;
        font-weight:500;
      }
    }
    dl:last-child{
      margin-bottom:0px;
    }

    dl.bonus{
      dd{
        color:#0085DE;
      }
    }
  }

  .bottom{
    position: absolute;
    width:100%;
    bottom:0;
    display:flex;
    justify-content: space-between;
    align-items: center;

    .counter{
      font-size:20px;
      color:#888;
      strong{
        font-weight:500;
        color:#0085DE
      }
    }

    .btns{
      .v-btn{
        width:250px;
        height:60px;
        justify-content: space-between;
        background:#292929;
        border-radius:5px;
        font-size:18px;
        color:#fff;
        margin-left:10px;
        font-weight:400;
      }

      .v-btn.home{
        background:#0085DE;
      }
    }
  }
}

</style>