<template>
  <div class="mypage">
    <div class="myList">
      <ul class="list">
        <li v-for="item in 20" :key="item">
          <div class="top">
            <div class="item-info">
              <div class="textIcon chage">충전</div>
              <div class="textIcon use">사용</div>
              <div class="textIcon admin">관리자</div>
              <div class="date">2020.12.28 10:34</div>
            </div>
            <div class="eqInfo">키오스크</div>
          </div>
          <div class="bottom">
            <dl>
              <dt>결제금액</dt>
              <dd>50,000원</dd>
            </dl>
            <dl>
              <dt>사용포인트</dt>
              <dd>0</dd>
            </dl>
            <dl>
              <dt>보너스</dt>
              <dd>5,000원</dd>
            </dl>
            <dl class="point">
              <dt>변동포인트</dt>
              <dd>50,000원</dd>
            </dl>
          </div>
        </li>
      </ul>
      <div class="v-scroll">
        <div class="scrollBar" />
      </div>
    </div>

    <div class="btns">
      <v-btn text class="use">
        <label>장비 이용하기</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn text class="home" @click="$router.push('/')">
        <label>메인으로 돌아가기</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    const list = document.querySelector(".list");
    this.scrollControl();
    list.addEventListener("scroll", this.scrollControl);
  },
  methods:{
    scrollControl() {
      const list = document.querySelector(".list");
      const scrollBar = document.querySelector(".scrollBar");
      const scrollY = list.scrollTop; // 스크롤의 현재 y 값
      const totalHeight = list.scrollHeight; // 리스트 전체 높이
      const listHeight = list.clientHeight; // 뷰의 높이

      const maxStartPointY =
        listHeight - (listHeight / totalHeight) * listHeight;
      const maxViewPointY = totalHeight - listHeight;

      if (maxViewPointY === 0) {
        scrollBar.style.display = "none";
      } else {
        const currentBarStartY = (maxStartPointY / maxViewPointY) * scrollY;

        scrollBar.style.display = "block";
        scrollBar.style.height = (listHeight / totalHeight) * listHeight + "px";
        scrollBar.style.transform = `translateY(${currentBarStartY}px)`;
      }
    },
  }
}
</script>

<style lang="scss">
.mypage{
  height:100%;
  
  .myList{
    display:flex;
    
    ul{
      flex:1;
      background:#fff;
      border:2px solid #e2e2e2;
      border-radius:15px;
      height:680px;
      overflow-y:auto;
      scroll-behavior: smooth;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

      li{
        border-bottom:2px solid #e2e2e2;
        padding:20px;
        
        .top{
          display:flex;
          align-items: center;
          justify-content: space-between;
          background:#f2f2f2;
          border-radius:15px;
          padding-right:15px;

          .item-info{
            display:flex;
            align-items: center;

            .textIcon{
              display:flex;
              align-items: center;
              justify-content: center;
              font-size:16px;
              color:#fff;
              padding:0 15px;
              height:30px;
              border-radius:15px;
              margin-right:10px;
            }

            .textIcon.chage{
              background:#0085de
            }
            .textIcon.use{
              background:#EE2073
            }
            .textIcon.admin{
              background:#0093A4
            }
          }

          .eqInfo{
            font-size:16px;
          }
        }
        .bottom{
          display:flex;
          align-items: center;
          margin-top:20px;

          dl{
            display:flex;
            flex-direction: column;
            justify-content: center;
            border-right:2px solid #e2e2e2;
            margin-right:10px;
            flex:1;
            text-align:center;
            height:60px;

            dt{color:#888;font-size:16px;}
            dd{font-size:18px;font-weight:500;}
          }
          dl:last-child{
            margin-right:0px;
            border-right:0px;
          }
          dl.point{
            dd{
              color:#0085DE
            }
          }
        }
      }

      li:last-child{
        border-bottom:0px;
      }
    }

    ul::-webkit-scrollbar{
      display:none;
    }

     .v-scroll {
      position: relative;
      min-width: 10px;
      background: #e2e2e2;
      margin-left: 30px;
      border-radius: 5px;
      overflow: hidden;

      .scrollBar {
        width: 10px;
        background: #0085de;
        height: 50px;
        border-radius: 5px;
      }
    }
  }

  .btns{
    position:absolute;
    bottom:0px;
    right:0px;
    text-align:right;

    .v-btn{
      width:250px;
      height:60px;
      justify-content: space-between;
      background:#292929;
      border-radius:5px;
      font-size:18px;
      color:#fff;
      margin-left:10px;
      font-weight:400;
    }

    .v-btn.home{
      background:#0085DE;
    }
  }
}
</style>