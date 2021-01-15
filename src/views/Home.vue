<template>
  <BaseLayout>
    <div class="home">
      <div class="notice">
        <h4>공지사항</h4>
        <div class="rotateBox">
          <marquee
            behavior="scroll"
            scrollamount="10"
            loop="infinite"
          >
            안녕하세요 페이오티 금정점 입니다
          </marquee>
        </div>
      </div>
      <div class="visual-wrap">
        <div class="visual">
          <v-carousel 
            v-model="model" 
            height="auto"
            width="100%" 
            class="items"
            hide-delimiters
            :show-arrows="false"
          >
            <v-carousel-item
              v-for="item in slides"
              :key="item"
              class="item"
            >
              <img :src="item.url" />
            </v-carousel-item>
          </v-carousel>
        </div>
        <ul class="menu">
          <li v-ripple class="use" @click="$router.push('userLogin')">
            <div class="text">  
              <strong>이용하기</strong>
              <p>충전없이 장비를 사용하기</p>
            </div>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </li>
          <li v-ripple class="chage" @click="$router.push('userLogin')"> 
            <div class="text">  
              <strong>충전하기</strong>
              <p>미리 금액을 충전하고 보너스 받기</p>
            </div>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </li>
          <li v-ripple class="find" @click="$router.push('mypage')">
            <div class="text">  
              <strong>조회하기</strong>
              <p>남은 포인트 및 이용내역 조회</p>
            </div>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </li>
        </ul>
      </div>
    </div>

    <div class="home-bg">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
    </div>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/layout/base.vue';

export default {
  name: "home",
  components: {
    BaseLayout
  },
  data: () => ({
    model: 0,
    slides: [
      {
        url:'/img/visual01.png'
      },
      {
        url:'/img/visual02.png'
      },
      {
        url:'/img/visual03.png'
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;
  z-index:2;

  .notice{  
    display:flex;
    border-radius:10px;
    border:2px solid #0085DE;
    background:#fff;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.15);
    
    h4{
      display:flex;
      align-items: center;
      justify-content: center;
      width:180px;
      height:80px;
      font-size:20px;
      color:#0085DE;
      font-weight:500;
    }
    .rotateBox{
      flex:1;
      display:flex;
      align-items: center;
      height:80px;
      font-size:24px;
    }
  }

  .visual-wrap{
    display:flex;
    justify-content: space-between;
    
    .visual{
      width:600px;
      min-width:600px;
      height:650px;
      min-height:650px;
      overflow:hidden;
      border:2px solid #292929;
      border-radius:10px;
      overflow:hidden;
      background:#fff;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.15);

      .items{
        width:100%;
        height:100%;
      }
      .item{
        img{width:100%;}
      }
    }

    .menu{
      flex:1;
      display:flex;
      flex-direction: column;
      border:2px solid #292929;
      border-radius:10px;
      margin-left:30px;
      overflow:hidden;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.15);

      li{
        display:flex;
        align-items: center;
        justify-content: space-between;
        background:#fff;
        flex:1;
        padding:30px;
        border-bottom:2px solid #d2d2d2;

        .text{
          strong{
            font-size:36px;
            font-weight:500;
          }
          p{
            font-size:20px;
            color:rgba(0,0,0,0.7);
            margin-top:5px;
          }
        }

        .v-icon{
          font-size:60px;
        }
      }
      li:last-child{border-bottom:0px;}

      li.use{
        background:#F8F2F4;
        .text{
          strong{color:#E71E6F}
        }
        .v-icon{color:#E71E6F}
      }
      li.chage{
        background:#F8FBFF;
        .text{
          strong{color:#0082DE}
        }
        .v-icon{color:#0082DE}
      }
    }
  }
}

.home-bg{
  position: absolute;
  width:100%;
  height:100%;
  z-index:1;
  left:0px;
  top:0px;

  .wave1{
    position:absolute;
    left:-400px;
    top:-400px;
    width:1000px;
    height:1000px;
    border-radius:400px;
    background: #0082DE;
    animation: wave 15s infinite linear;
  }

  .wave2{
    position:absolute;
    right:-360px;
    bottom:-360px;
    width:800px;
    height:800px;
    border-radius:300px;
    background: #E71E6F;
    animation: wave 15s infinite linear;
  }

  @keyframes wave {
    100%{
      transform: rotate(180deg);
    }
  }
}
</style>