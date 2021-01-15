<template>
  <div class="footer">
    <div class="customer">
      <span>고객센터</span>
      <strong>1600-1879</strong>
    </div>
    <div class="nav">
      <v-btn text @click="tremsOpen(true)">개인정보 취급방침</v-btn>
      <v-btn text @click="tremsOpen(true)">서비스 이용방침</v-btn>
    </div>
    <Terms ref="terms"></Terms>
  </div>
</template>

<script>
import Terms from '@/components/modal/terms.vue';

export default {
  components:{
    Terms,
  },
  methods:{
    tremsOpen(value){
      this.$refs.terms.open(value);
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  position: relative;
  z-index:2;
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:50px;
  padding:0 25px;
  background:#292929;

  .customer{
    display:flex;
    align-items: center;
    color:#fff;
    
    span{
      color:#aaa;
      font-size:16px;
    }
    strong{
      margin-left:15px;
      font-size:18px;
      font-weight:400;
      letter-spacing:1px;
    }
  }

  .nav{
    .v-btn{
      color:#fff;
      border-radius:0px;
      height:100%;
      min-height:50px;
      font-weight:400;
      font-size:16px;
    }
  }
}
</style>