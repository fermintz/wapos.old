<template>
  <v-dialog
    v-model="visible"
    width="unset"
    style="overflow:none"
    overlay-opacity="0.8"
    overlay-color="#000"
  >
    <div class="joinModal">
      <div class="left">
        <div class="title">
          <v-icon>mdi-lock</v-icon>
          <h4>{{type === 'first' ? '회원가입' : '회원로그인'}}</h4>
        </div>
        <dl class="message" v-if="type === 'first'">
          <dt>{{phone}} 님,<br><b>첫 방문을 환영합니다</b></dt>
          <dd>첫 방문자는 비밀번호 생성이 필요합니다
버튼을 이용하여 <b>사용하실 비밀번호를 입력</b>해주세요</dd>
        </dl>

        <dl class="message" v-else>
          <dt>{{phone}} 님,<br><b>다시 만나서 반가워요!</b></dt>
          <dd>등록하신 비밀번호를 입력해주세요</dd>
        </dl>

        <div :class="{passwordBox:true, set:password.length >= 1}">
          <label>비밀번호</label>
          <div class="password">
            <span :class="{set:password.length >= item ? true : false}" v-for="item in 4" :key="item">
              
            </span>
          </div>
        </div>
        <p class="sub" v-show="type === 'member'">* 잘못된 비밀번호 입니다</p>

        <div class="btns">
          <v-btn text class="back" @click="visible  = false">
            <v-icon>mdi-arrow-left-circle</v-icon>
            <label>취소</label>
          </v-btn>
          <v-btn text class="find" v-show="type === 'member'" @click="$refs.message.open(true)">
            <label>비밀번호 찾기</label>
            <v-icon>mdi-arrow-right-circle</v-icon>
          </v-btn>
        </div>
      </div>


      <div class="numberPad">
        <div class="numbers" v-for="row in 3" :key="row">
          <v-btn 
            text 
            v-for="number in 3" 
            :key="number"
            @click="setPassword((row-1)*3+number)"
          >{{ (row-1) * 3 + number}}</v-btn>
        </div>
        <div class="numbers">
          <v-btn text @click="remove">
            <v-icon size="32">mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn
            text
            @click="setPassword(0)"
          >0</v-btn>
          <v-btn 
            text 
            class="reset"
            @click="resetPassword"
          >초기화</v-btn>
        </div>
      </div>
    </div>
    <PassFind ref="passFind" />
    <Message type="error" ref="message" title="해당 상품으로 결제를 진행할까요?" description=""/>
  </v-dialog>

</template>

<script>
import PassFind from '@/components/modal/passFind.vue';
import Message from '@/components/modal/message.vue';

export default {
  components:{
    PassFind, Message
  },
  data(){
    return{
      newMember:false,
      visible:false,
      password:'',
      set:0,
    }
  },
  props:{
    phone:String,
    type:String,
  },

  methods:{
    open(value){
      this.visible = value
    },
    setPassword(number){
      if(this.password.length < 4){
        this.password += number
      }
      if(this.set < 4){
        this.set += 1
      }
    },
    remove(){
      const pass = this.password
      if(pass.length !== 0){
        this.password = pass.slice(0, pass.length -1);
      } 
    },
    resetPassword(){
      this.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.joinModal{
  width:1000px;
  height:600px;
  border-radius:20px;
  overflow:hidden;
  display:flex;
  background:#fff;

  .left{
    position: relative;
    width:50%;
    padding:50px;

    .title{
      display:flex;
      border-bottom:2px solid #e2e2e2;
      padding-bottom:15px;
      .v-icon{font-size:24px;margin-right:10px;color:#c2c2c2;}

      h4{
        font-size:24px;
        font-family:'SCDream';
        font-weight:500;
      }
    }

    .message{
      margin-top:30px;
      dt{
        font-size:32px;
        b{
          font-weight:400;
          color:#0085DE
        }
      }
      dd{
        font-size:18px;
        margin-top:20px;
        color:#888;
        b{
          color:#EE2073;
          font-weight:400;
        }
      }
    }

    .passwordBox{
      display:flex;
      justify-content: space-between;
      align-items: center;
      border:2px solid #d2d2d2;
      background-color:#fff;
      border-radius:10px;
      padding:0 15px;
      height:60px;
      margin-top:40px;

      label{
        color:#888
      }
      .password{
        display:flex;
        align-items: center;
        span{
          width:25px;
          height:25px;
          border-radius:12.5px;
          background:#e2e2e2;
          margin-left:12px;
        }
        span.set{
          background:#EE2073
        }
      }
    }
    
    .passwordBox.set{
      animation:point 1s infinite linear
       
    }
    @keyframes point {
      0%{
        border-color:#d2d2d2
      }
      50%{border-color:#EE2073}
      100%{
        border-color:#d2d2d2
      }
    }

    .sub{
      margin-top:10px;
      font-size:16px;
      color:#d22828;
    }

    .btns{
      display:flex;
      justify-content: space-between;
      align-items: center;
      width:100%;
      position:absolute;
      left:0px;
      bottom:30px;
      padding:0 20px;
      
      .v-btn{
        justify-content: space-between;
        height:50px;
        .v-icon{
          font-size:32px;
        }
        label{
          font-size:20px;
        }
      }

      .back{
        .v-icon{margin-right:10px;}
      }

      .find{
        .v-icon{margin-left:10px;color:#0085DE}
      }
    }
  }

  .numberPad{
    flex:1;
    position: relative;
    display:Flex;
    flex-direction: column;
    justify-content: center;
    background:#f2f2f2;

    .numbers{
      display:flex;
      justify-content: center;
      margin:15px 0;

      .v-btn{
        flex:1;
        max-width:90px;
        height:90px;
        border-radius:50px;
        border:2px solid #d2d2d2;
        font-size:30px;
        margin:0 15px;
        background:#fff;
      }

      .v-btn.reset{
        font-size:20px;
      }
    }
  }
}


</style>