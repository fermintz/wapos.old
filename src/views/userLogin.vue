<template>
  <BaseLayout>
    <div class="userLogin fill-height">
      <div class="infomation">
        <dl class="title">
          <dt>전화번호 입력</dt>
          <dd>포인트 적립을 위한 전화번호를<br>입력해주세요</dd>
        </dl>

        <div class="numberView">
          <span class="first">{{phone.first}}</span>
          <span class="bar">-</span>
          <span class="middle">{{phone.middle}}</span>
          <span class="bar">-</span>
          <span class="last">{{phone.last}}</span>
        </div>

        <div class="check">
          <input type="checkbox" class="checkbox" checked>
          <p>멤버쉽 가입 및 이용을 위한 개인정보 수집 및 정보제공에 대해 동의합니다</p>
        </div>

        <div class="back" v-ripple @click="$router.push('/')">
          <v-icon>mdi-arrow-left-circle</v-icon>
          <label>뒤로가기</label>
        </div>
      </div>

      <div class="numberPad">
        <div class="numbers" v-for="row in 3" :key="row">
          <v-btn 
            text 
            v-for="number in 3" 
            :key="number"
            @click="setNumber((row-1)*3+number)"
          >{{ (row-1) * 3 + number}}</v-btn>
        </div>
        <div class="numbers">
          <v-btn text @click="removeSetNumber">
            <v-icon size="40">mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn
            text
            @click="setNumber(0)"
          >0</v-btn>
          <v-btn 
            text 
            class="reset"
            @click="resetNumber"
          >초기화</v-btn>
        </div>
        <span class="hol hol1"></span>
        <span class="hol hol2"></span>
        <span class="hol hol3"></span>
        <span class="hol hol4" @click="$router.push('product')"></span>
      </div>
    </div>

    <Pass ref="pass" :phone="joinPhone" :type="type"/>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/layout/base.vue';
import Pass from '@/components/modal/password.vue';

export default {
  components:{
    BaseLayout,Pass
  },

  data(){
    return{
      phone:{
        first:'010',
        middle:'',
        last:'',
      },
      type:''
    }
  },

  watch:{
    setPhone(newValue) {
      if(newValue.length >= 11){
        if(newValue === '01000000000'){
          this.type = 'member'
          this.$refs.pass.open(true)
          this.$refs.pass.password = ''
        }else{
          this.type = 'first'
          this.$refs.pass.open(true)
          this.$refs.pass.password = ''
        }
      }
    }
  },

  computed:{
    setPhone(){
      return [this.phone.first + this.phone.middle + this.phone.last].join('')
    },
    joinPhone(){
      return [this.phone.first + '-' + this.phone.middle + '-' + this.phone.last].join('')
    }
  },

  methods:{
    setNumber(number){
      const {first, middle, last} = this.phone;
      if(first.length < 3){
        this.phone.first += number;
      }else if(middle.length < 4){
        this.phone.middle += number;
      }else if(last.length < 4){
        this.phone.last += number;
      }
    },
    removeSetNumber(){
      const { middle, last} = this.phone;
      if(last.length !== 0){
        this.phone.last = last.slice(0, last.length -1);
      } else if(middle.length !== 0){
        this.phone.middle = middle.slice(0, middle.length -1);
      }
    },
    resetNumber(){
      this.phone.first = '010',
      this.phone.middle = '',
      this.phone.last = ''
    },
  }
}

</script>

<style lang="scss" scoped>

.userLogin{
  display:flex;
  height:100%;

  .infomation{
    flex:1;
    margin-right:50px;
    border-right:2px solid #e2e2e2;
    padding-right:50px;
    padding-right:50px;
    position: relative;

    .title{
      border-bottom:2px solid #e2e2e2;
      padding-bottom:50px;
      margin-bottom:50px;

      dt{
        font-size:36px;
        font-weight:500;
      }

      dd{
        margin-top:20px;
        font-size:24px;
        color:#888;
      }
    }

    .numberView{
      border:1px solid #d2d2d2;
      height:90px;
      border-radius:10px;
      background:#fff;
      display:flex;
      align-items: center;
      justify-content: center;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

      span{
        font-family:'Roboto';
        font-weight:500;
        font-size:36px;
      }
      span.first{
        color:#0085DE
      }
      span.first,span.middle,span.last{
        width:80px;
        text-align:center;
      }
      span.bar{
        margin:0 15px;
        color:#c2c2c2;
      }
    }

    .check{
      display:flex;
      align-items: flex-start;
      margin-top:50px;
      
      .checkbox{
        width:40px;
        height:40px;
        margin-right:20px;
      }

      p{
        font-size:20px;
        flex:1;
        color:#888;
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

  .numberPad{
    flex:1;
    position: relative;
    border:1px solid #d2d2d2;
    border-radius:20px;
    display:Flex;
    flex-direction: column;
    background:#fff;
    justify-content: center;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);

    .numbers{
      display:flex;
      justify-content: center;
      margin:15px 0;

      .v-btn{
        flex:1;
        max-width:110px;
        height:110px;
        border-radius:55px;
        border:2px solid #d2d2d2;
        font-size:30px;
        margin:0 15px;
      }

      .v-btn.reset{
        font-size:22px;
      }
    }


    .hol{
      position:absolute;
      width:40px;
      height:40px;
      border-radius:20px;
      background: rgb(226,226,226);
      background: linear-gradient(142deg, rgba(236,236,236,1) 0%, rgba(255,255,255,0) 100%);
      border:1px solid #e2e2e2;
    }
    .hol1{
      top:25px;
      left:25px;
    }
    .hol2{
      top:25px;
      right:25px;
    }
    .hol3{
      left:25px;
      bottom:25px;
    }
    .hol4{
      right:25px;
      bottom:25px;
    }

  }
}

</style>