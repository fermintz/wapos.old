<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/logo_w.png">
    </div>
    <div class="v-divider" />
    <div class="loginForm">
      <h4>PAYOT KIOSK LOGIN</h4>
      <form>
        <input type="text" placeholder="아이디">
        <input type="text" placeholder="비밀번호">
        <v-btn text @click="$router.push('option')">로그인</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.login{
  background:#373B40;
  height:100%;
  display:flex;
  align-items: center;

  .logo{
    display:flex;
    align-items: center;
    justify-content: center;
    flex:1;
    img{height:100px;}
  }

  .v-divider{
    height:400px;
    width:2px;
    border-left:1px solid rgba(0,0,0,1);
    border-right:1px solid rgba(255,255,255,0.2);
  }

  .loginForm{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex:1;

    h4{
      color:rgba(255,255,255,0.4);
      margin-bottom:30px;
      font-size:18px;
      letter-spacing: 5px;
    }

    form{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    input{
      background:#fff;
      width:400px;
      height:60px;
      margin-bottom:20px;
      padding:0 10px;
    }

    .v-btn{
      width:400px;
      height:60px;
      border-radius:0px;
      font-size:18px;
      background:#EC1F72;
      color:#fff;
    }
  }
}

</style>