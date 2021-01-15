<template>
  <div class="creditSelect">
    <div class="credit cash" v-ripple @click="$router.push('orderCheck')">
      <div class="img">
        <img src="@/assets/img/cash.png">
      </div>
      <dl>
        <dt>현금(지폐)로 결제하기</dt>
        <dd>포인트 추가 최대 <b>10% 적립</b></dd>
      </dl>
      <v-icon>
        mdi-chevron-right
      </v-icon>
    </div>

    <div class="credit card" v-ripple>
      <div class="img">
        <img src="@/assets/img/card.png">
      </div>
      <dl>
        <dt>카드로 결제하기</dt>
        <dd>포인트 추가 최대 <b>5% 적립</b></dd>
      </dl>
      <v-icon>
        mdi-chevron-right
      </v-icon>
    </div>
  </div>
</template>

<script>


export default {
  components:{
    
  }
}
</script>

<style lang="scss" scoped>

.creditSelect{
  .credit{
    border:2px solid #e2e2e2;
    padding:30px;
    background:#fff;
    border-radius:15px;
    margin-bottom:20px;
    display:flex;
    align-items: center;
    min-height:160px;

    .img{
      margin-right:30px;
      img{display:block;}
    }

    dl{
      dt{font-size:28px;}
      dd{
        font-size:20px;
        margin-top:5px;
        font-weight:400;
      }
    }

    .v-icon{
      position:absolute;
      right:30px;
      font-size:40px;
    }
  }

  .cash{
    border-color:#EC1F72;
    dl{
      dt{color:#EC1F72}
      dd{
        b{
          color:#EC1F72
        }
      }
    }
    

    .v-icon{
      color:#EC1F72
    }
  }

  .card{
    border-color:#0085DE;
    dl{
      dt{color:#0085DE}
      dd{
        b{
          color:#0085DE
        }
      }
    }
    .v-icon{
      color:#0085DE
    }
  }
}


</style>