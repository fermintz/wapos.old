<template>
  <div class="orderCheck">
    <div class="top">
      <dl>
        <dt>결제예정금액</dt>
        <dd>5,000 원</dd>
      </dl>
      <v-btn text @click="$refs.pointUse.open(true)">
        포인트 사용하기
        <v-icon>mdi-arrow-right-circle</v-icon>
      </v-btn>
    </div>
    <div class="bottom">
      <dl>
        <dt>장비명</dt>
        <dd>1번 세탁기</dd>
      </dl>
      <dl>
        <dt>장비명</dt>
        <dd>일반세탁 30분</dd>
      </dl>
      <div class="divider" />
      <dl>
        <dt>상품금액</dt>
        <dd>8,000원</dd>
      </dl>
      <dl class="point">
        <dt>포인트 사용액</dt>
        <dd>-3,000</dd>
      </dl>
      <dl>
        <dt>결제방법</dt>
        <dd>카드</dd>
      </dl>
    </div>
    <div class="finishBtns">
      <v-btn text @click="$router.push('finish')">
        결제하기
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>


    <PointUse ref="pointUse"/>
    <CardModal />
    <CashModal />
    <Progress text="결제를 진행중입니다"/>
  </div>
</template>

<script>
import PointUse from '@/components/modal/pointUse.vue'
import CardModal from '@/components/modal/card.vue'
import CashModal from '@/components/modal/cash.vue'
import Progress from '@/components/modal/progress.vue'

export default {
  components:{
    PointUse, CardModal, CashModal, Progress
  }
}
</script>

<style lang="scss" scoped>

.orderCheck{
  position: relative;
  background:#fff;
  height:100%;
  border:2px solid #e2e2e2;
  border-radius:15px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

  .top{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:2px solid #e2e2e2;
    padding:40px;

    dl{
      dt{
        font-size:18px;
        color:#888;
        font-weight:400;
        margin-bottom:5px;
      }
      dd{
        font-size:36px;
        color:#EE2073;
        font-weight:500;
      }
    }

    .v-btn{
      height:80px;
      border:2px solid #0085DE;
      color:#0085DE;
      font-size:18px;
      border-radius:10px;

      .v-icon{margin-left:20px;font-size:30px;}
    }
  }
  
  .bottom{
    padding:40px;

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      font-size:20px;
      margin-bottom:15px;
    }

    dl.point{
      dd{
        color:#0085DE
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }

    .divider{
      height:2px;
      background:#e2e2e2;
      margin:30px 0;
    }
  }

  .finishBtns{
    width:100%;
    position:absolute;
    bottom:40px;
    left:0px;
    padding:0 40px;

    .v-btn{
      width:100%;
      height:70px;
      background:#fff;
      color:#EE2073;
      font-size:24px;
      border-radius:15px;
      animation: aglimmer 0.8s infinite linear;

      .v-icon{
        font-size:36px;
        margin-left:20px;
      }
    }
  }

  @keyframes  aglimmer{
    0%{
      border:4px solid #ff287e;
      color:#EE2073;
    }
    50%{
      border:4px solid #000;
      color:#292929;
    }
    100%{
      border:4px solid #ff287e;
      color:#EE2073;
    }
  }

}
</style>