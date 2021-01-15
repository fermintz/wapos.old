<template>
  <div class="inputCash">
    <div class="cashForm">
      <div class="top">
        <dl>
          <dt><b>1번세탁기</b>를 선택하셨습니다</dt>
          <dd>장비에 투입할 금액을 입력해주세요</dd>
        </dl>
        <v-btn text>선택취소</v-btn>
      </div>
      <div class="inputCashView">
        <div class="inner">
          <label>장비에 투입할 금액</label>
          <strong>0 원</strong>
        </div>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="btns">
        <v-btn text class="coin">500원 추가</v-btn>
        <v-btn text class="coin">1,000원 추가</v-btn>
        <v-btn text class="finish">입력완료</v-btn>
      </div>
    </div>
    <div class="priceTable">
      <div class="list">
        <p>상품 가격표를 참고해주세요</p>
        <v-row>
          <v-col cols="12" md="6" v-for="item in 20" :key="item">
            <div class="item" v-ripple>
              <label>표준세탁</label>
              <strong>5,000 원</strong>
            </div>
          </v-col>
        </v-row>
        
      </div>
      <div class="v-scroll">
        <div class="scrollBar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const list = document.querySelector(".list");
    this.scrollControl();
    list.addEventListener("scroll", this.scrollControl);
  },
  methods: {
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
  },
}
</script>

<style lang="scss" scoped>
.inputCash{
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

}

.cashForm{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  background:#fff;
  border:2px solid #e2e2e2;
  border-radius:15px;
  padding:30px;
  box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
  height:340px;

  .top{
    display:flex;
    justify-content: space-between;
    align-items: center;

    dl{
      dt{
        font-size:32px;
        b{
          font-weight:500;
          color:#0085DE
        }
      }
      dd{color:#888;margin-top:5px}
    }

    .v-btn{
      height:60px;
      width: 150px;
      font-size:18px;
      background:#f2f2f2;
      border-radius:10px;
    }
  }

  .inputCashView{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    height:80px;
    border:2px solid #e2e2e2;
    border-radius:10px;
    margin:30px 0;

    .inner{
      flex:1;
      margin-right:30px;
      display:flex;
      align-items: center;
      justify-content: space-between;

      label{
        color:#888;
      }
      strong{
        justify-self: flex-end;
        font-size:28px;
        font-weight:500;
        color:#EC1F72
      }
    }
    .v-btn{
      justify-self:flex-end;
      height:50px;
      width:50px;
      background:#292929;
      .v-icon{color:#fff;}   
    }
  }
  .btns{
    display:flex;
    
    .v-btn{
      flex:1;
      background:#f2f2f2;
      border-radius:10px;
      height:60px;
      margin-right:20px;
      font-size:18px;
    }
    .v-btn:last-child{
      margin-right:0px;
    }

    .coin{
      border:2px solid #0085DE;
      background:#fff;
      color:#0085DE
    }
    .finish{
      flex:2;
      background:#0085DE;
      color:#fff
    }
  }
}

.priceTable{
  display:flex;
  height:100%;
  height: 400px;

  .list{
    flex:1;
    background:#fff;
    border-radius:15px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    padding:20px;
    border:2px solid #e2e2e2;
    overflow-y:scroll;

    p{
      background:#f2f2f2;
      height:40px;
      line-height:40px;
      text-align:center;
      border-radius:20px;
      margin-bottom:15px;
      color:#888;
    }

    .col-12{
      padding:7px;
    }

    .item{
      display:flex;
      flex-direction: column;
      border:2px solid #e2e2e2;
      padding:15px;
      border-radius:10px;

      strong{
        align-self: flex-end;
        font-size:24px;
        font-weight:500;
      }
    }
  }
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
</style>