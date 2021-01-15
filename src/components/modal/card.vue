<template>
  <v-dialog
    v-model="visible"
    width="unset"
    persistent
    overlay-opacity="0.8"
  >
    <div :class="{cardModal:true, errorModal:cardError}" @click="cardError = true">
      <div class="title">
        <h4>{{!cardError ? '카드결제' :'카드에러'}}</h4>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="visual">
        <img src="@/assets/img/card-push.png" v-if="!cardError">
        <img src="@/assets/img/card-error.png" v-else>
      </div>
      
      <div class="price">
        <label>결제금액</label>
        <strong>4,500원</strong>
      </div>
      <div class="text">
        <p>{{!cardError ? '결제할 카드를 IC슬롯에 투입해주세요':'결제할 카드를 IC슬롯에서 제거 후 다시 투입해주세요'}}</p>
        <span v-show="!cardError">결제가 완료될때까지 카드를 빼지마세요</span>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true,
      cardError:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.cardModal{
  width:480px;
  border-radius:15px;
  background:#fff;
  padding:30px;

  .title{
    display:flex;
    justify-content: space-between;
    align-items: center;
    h4{font-size:24px;font-weight:500;}
    .v-btn{
      width:60px;
      height:60px;
      background:rgba(0,0,0,0.1);
      .v-icon{font-size:40px;}
    }
  }
  .visual{
    display:flex;
    justify-content: center;
    align-items: center;
    margin:60px 0;
    text-align:center;
    

    img{
      display:block; 
    }    
  }

  

  .price{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border:2px solid #e2e2e2;
    height:70px;
    padding:0 15px;
    border-radius:10px;
    background:#f8f8f8;

    label{font-size:18px;line-height:18px;}
    strong{
      font-size:24px;
      font-weight:500;
    }
  }

  .text{
    text-align:center;
    padding:30px 0;

    p{
      font-size:24px;
      margin:0px;
      color:#EC1F72;
    }
    span{
      display:block;
      margin-top:10px;
      font-size:18px;
      color:#888;
    }
  }
}

.cardModal.errorModal{
  background:#EC1F72;
  animation: scaleUp 0.3s forwards ease-out;
  overflow: hidden;

  .title{
    h4{color:#fff}
    .v-btn{
      .v-icon{color:#fff}
    }
  }

  @keyframes scaleUp{
    0%{
      opacity: 0;
      transform: scale(0.5);
     }
    100%{
      opacity:1;
      transform: scale(1);
    }
  }

  .price{
    border:0;

    strong{
      color:#EC1F72;
    }
  }
 
  .text{
    
    p{
      color:#ffee00;
      animation:colorText 1s infinite linear;
    }
    @keyframes colorText {
    0%{
      color:#fff;
    }
    50%{
      color:#ffee00;
    }
    100%{
      color:#fff;
    }
  }
  }
  
}

</style>