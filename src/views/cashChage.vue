<template>
  <div class="cashChage">
    <div class="chageBox">
      <div class="coinImg">
        <img src="@/assets/img/cash.gif" />
      </div>
      <div class="chageForm">
        <div class="price">
          <dl>
            <dt>투입된 금액</dt>
          </dl>
          <div class="getPrice">{{ price | numeral("0,0") }} 원</div>
          <p>한번에 최대 5만원까지 충전이 가능합니다</p>
          <dl style="margin-top:40px;">
            <dt>추가적립 포인트</dt>
            <dd>0</dd>
          </dl>
          <dl class="last">
            <dt>최종 나의 포인트</dt>
            <dd>2,400</dd>
          </dl>
        </div>
        <v-btn 
          outlined
          @click="$refs.progress.open(true)"
        >투입완료</v-btn>
      </div>
    </div>

    <div class="chageTip">
      <h4>한번에 많이 충전할 수 록 쌓이는 적립포인트</h4>
      <ul>
        <li v-for="item in 6" :key="item">
          <span>{{item}}만원 이상</span>
          <strong>{{item}}% 추가적립</strong>
        </li>
      </ul>
    </div>

    <Progress text="포인트를 적립중입니다" ref="progress"/>
  </div>
</template>

<script>
import Progress from '@/components/modal/progress.vue'

export default {
  components:{
    Progress
  },
  data(){
    return{
      price:0,
      black:true,
    }
  },
}
</script>

<style lang="scss" scoped>

.cashChage{
  display:flex;
  height:100%;
  flex-direction: column;
  justify-content: space-between;

  .chageBox {
    background: #fff;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #e2e2e2;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 3;
    height:480px;
    max-height:480px;

    .coinImg {
      width: 300px;
      background: #f2f2f2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }
    }

    .chageForm {
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 30px;

      .price{
        dl {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;

          dt {
            color: #888;
            font-size: 18px;
          }
          dd {
            color: #292929;
            font-weight: 500;
            font-size: 22px;
          }
        }

        dl.last {
          dd {
            color:#ee2073;
          }
        }

        p {
          margin-top: 20px;
          background: #fff3f3;
          text-align: center;
          padding: 10px 0;
          color: #ee2073;
        }

        .getPrice {
          font-size: 28px;
          border-bottom: 2px solid #0085de;
          padding-bottom: 10px;
          margin-top: 10px;
          text-align: right;
          font-weight: 500;
          color: #0085de;
        }
      }

      .v-btn {
        width: 100%;
        height: 60px;
        margin-top: 20px;
        border-radius: 10px;
        border: 0px;
        color: #fff;
        font-size: 24px;
        font-weight: 400;
        animation: getBtn 0.8s linear infinite;
      }

      @keyframes getBtn {
        0% {
          background: #0085de;
        }
        50% {
          background: #0066aa;
        }
        100% {
          background: #0085de;
        }
      }
    }
  }
  .chageTip{
    h4{
      margin-bottom:20px;
      font-size:20px;
    }
    ul{
      column-count: 3;
      column-gap: 10px;

      li{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:90px;
        border-radius:10px;
        border:2px solid #e2e2e2;
        background:#fff;
        margin-bottom:10px;

        span{
          font-size:18px;
        }
        strong{
          font-weight:500;
          font-size:20px;
          color:#0085de
        }
      }
      li:nth-child(2n){
        margin-bottom:0px;
      }
    }
  }
}
</style>
