<template>
  <BaseLayout>
    <div class="user">
      <div class="userForm">
        <dl class="title">
          <dt>장비 및 상품선택</dt>
          <dd>사용하실 장비와 상품을 선택해주세요</dd>
        </dl>
        <div class="divider"/>
        <div class="userBox userInfo">
          <span>회원정보</span>
          <strong>010-8525-4561</strong>
        </div>
        <div class="userBox userPoint">
          <span>나의 포인트</span>
          <strong>5,000</strong>
          <v-btn text>충전하기</v-btn>
        </div>
        <div class="back" @click="$router.back(-1)">
          <v-icon>mdi-arrow-left-circle</v-icon>
          <label>뒤로가기</label>
        </div>
      </div>

      <div class="divider_v"/>

      <div class="section">
        <router-view />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/layout/base.vue';
export default {
  components:{
    BaseLayout
  }
}
</script>

<style lang="scss" scoped>

.user{
  display:flex;
  height:100%;
  position:relative;
}

.userForm{
  width:300px;
  min-width:300px;

  .title{
    dt{
      font-size:32px;
      font-weight:500;
    }

    dd{
      margin-top:15px;
      font-size:20px;
      line-height:30px;
      color:#888;
    }
  }

  .divider{
    margin: 40px 0;
    height:2px;
    background:#e2e2e2;
  }

  .userBox{
    border:2px solid #d2d2d2;
    background:#fff;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    margin-bottom:20px;
    padding:20px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

    span{font-size:18px;margin-bottom:10px;}
    strong{
      font-size:24px;
    }
  }

  .userPoint{
    strong{
      font-size:32px;
      color:#EC1F72
    }
    .v-btn{
      width:100%;
      height:50px;
      margin-top:15px;
      background:#EC1F72;
      color:#fff;
      font-weight:400;
      font-size:18px;
    }
  }

  .back{
    position: absolute;
    display:Flex;
    align-items: center;
    bottom:0px;
    left:0px;
    border-radius:5px;

    .v-icon{
      font-size:36px;
      margin-right:10px;
    }

    label{
      font-size:24px;
    }
  }
}

.divider_v {
  width: 2px;
  min-width: 2px;
  background: #e2e2e2;
  margin: 0 40px;
}

.section {
  flex: 1;
  max-width: 818px;
}


</style>