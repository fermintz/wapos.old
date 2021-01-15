<template>
  <v-dialog
    v-model="visible"
    class="dialog"
    width="960px"
  >
    <div class="terms">
      <div class="termsHead">
        {{serviceTerms.title}}
      </div>

      <div class="termsBody" v-html="serviceTerms.body">

      </div>

      <div class="termsBottom">
        <v-btn outlined @click="open">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

import { info, user as userInfo } from '@/assets/docs/terms';

export default {
  data(){
    return{
      visible:false,
      serviceTerms: {
        title: '개인정보취급방침',
        body: userInfo.replace(/\n/g, '<br /><br/>')
      },

      userTerms:{
        body: info.replace(/\n/g, '<br /><br/>')
      }
      

    }
  },
  methods:{
    open(){
      this.visible = !this.visible;
    }
  }
}
</script>


<style lang="scss" scoped>
.terms{
  display:flex;
  flex-direction: column;
  background:#fff;
  border-radius:20px;
  overflow:hidden;
  height:800px;
  max-height:800px;
  

  .termsHead{
    display:flex;
    align-items: center;
    font-size:24px;
    font-weight:500;
    height:80px;
    padding:0 30px;
    border-bottom:2px solid #e2e2e2
  }

  .termsBody{
    flex:1;
    padding:30px;
    overflow-y:auto;
    font-size:20px;

    iframe{
      border:0px;
    }
  }

  .termsBottom{
    display:flex;
    justify-content: center;
    align-items:center;
    height:80px;
    border-top:2px solid #e2e2e2;

    .v-btn{
      font-size:18px;
      width:200px;
      height:50px;
      background:#292929;
      color:#fff;
      font-weight:500;
      border-radius:30px;
    }
  }
}

</style>