<template>
  <div class="header">
    <div class="left">
      <v-btn text @click="$router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <!-- <img src="@/assets/img/logo_b.png"> -->
      <span>페이오티 금정점</span>
    </div>

    <div class="right">
      <div class="time-box">
        <strong>21:34</strong>
        <span>2021년 01월 8일 금요일</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
   return{

   } 
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  z-index:2;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:120px;
  border-bottom:2px solid #e2e2e2;
  padding:0 25px;
  background:#fff;

  .left{
    display:flex;
    align-items: center;

    img{height:60px;}
    span{
      margin-left:20px;
      font-size:28px;
      font-weight:500
    }

    .v-btn{
      width:64px;
      min-width:64px;
      min-height:64px;
      background:transparent;
      border:4px solid #292929;
      border-radius:10px;

      .v-icon{
        font-size:32px;
        color:#292929;
      }
    }
  }

  .right{
    display:flex;
    align-items: center;

    .time-box{
      text-align:right;

      strong{
        display:block;
        font-size:36px;
        font-weight:400;
      }
      span{
        display:block;
        font-size:16px;
        color:#888;
      }
      
    }

    
  }
}
</style>