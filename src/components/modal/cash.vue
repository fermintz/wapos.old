<template>
  <v-dialog
    v-model="visible"
    width="unset"
    persistent
    overlay-opacity="0.8"
    overlay-color="#000"
  >
    <div class="cashModal">
      <div class="visual">
        <img src="@/assets/img/cash.gif">
      </div>
      <div class="right">
        <div class="title">
          <h4>현금(지폐)결제</h4>
          <v-btn icon @click="visible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="divider"/>
        <div class="price">
          <dl>
            <dt>결제금액</dt>
            <dd>4,500원</dd>
          </dl>
          <dl class="inputCash">
            <dt>투입된 금액</dt>
            <dd>0원</dd>
          </dl>
        </div>
        <div class="text">
          <p>※ 결제금액만큼 현금을 투입해주세요</p>
          <p>※ 결제금액 보다 <b>초과 투입시 나머지 금액은 포인트로 적립</b>됩니다</p>
        </div>
        <div class="time">
          <label>대기시간</label>
          <span>60초</span>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true,
    }
  }
}
</script>

<style lang="scss" scoped>
.cashModal{
  width:900px;
  min-height:500px;
  display:flex;
  border-radius:15px;
  background:#fff;
  overflow:hidden;

  .visual{
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:60px 0;

    img{
      width:80%;
      display:block;
    }
  }

  .right{
    position: relative;
    flex:1;
    padding:30px;
    background:#f8f8f8;

    .title{
      display:flex;
      justify-content: space-between;
      align-items: center;

      h4{font-size:24px;font-weight:500;}
      .v-btn{
        width:60px;
        height:60px;
        .v-icon{font-size:40px;}
      }
    }

    .divider{
      height:2px;
      background:#e2e2e2;
      margin-top:10px;
      margin-bottom:30px;
    }
    

    .price{

      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:20px;

        dt{font-size:18px;color:#888;font-weight:400;}
        dd{font-size:20px;font-weight:500;}
      }
      dl:last-child{
        margin-bottom:0px;
      }

      dl.inputCash{
        dd{color:#EC1F72;font-size:24px;}
      }
    }

    .text{
      margin-top:30px;
      text-align:left;
      padding:15px;
      background:#fff;
      border:2px solid #e2e2e2;

      p{
        font-size:18px;
        margin:0px;
        color:#292929;
        margin-bottom:10px;

        b{color:#EC1F72;font-weight:400;}
      }
      p:last-child{
        margin-bottom:0px;
      }
    }

    .time{
      position: absolute;
      bottom:30px;
      right:30px;

      label{margin-right:20px;font-size:18px;color:#888}
      span{font-size:24px;font-weight:500;}
    }
  }
}

</style>