<template>
  <div class="cardChage">
    <div class="ChageItemList">
      <!-- <ul class="list">
        <li v-for="item in 20" :key="item">
          <div class="price">
            <strong>1,000 포인트</strong>
            <span>2,000 원</span>
          </div>
          <div class="bonus">
            <label>적립보너스</label>
            <span>0</span>
          </div>
        </li>
      </ul> -->
      <div class="list">
        <p>충전하실 금액을 선택해주세요</p>
        <v-row>
          <v-col cols="12" md="6" v-for="item in 20" :key="item">
            <div class="item" v-ripple>
              <div class="price">
                <strong>{{item}},000 포인트</strong>
                <span>{{item}},000 원</span>
              </div>
              <div class="bonus">
                <label>적립보너스</label>
                <span>500</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="v-scroll">
        <div class="scrollBar"></div>
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
.cardChage{
  height:100%;
  
  .ChageItemList{
    display:flex;

    p{
      height:40px;
      line-height:40px;
      border-radius:20px;
      background:#f2f2f2;
      text-align:center;
      margin-bottom:20px;
    }
    
    .list{
      width:100%;
      background:#fff;
      border-radius:15px;
      height:774px;
      max-height:774px;
      border:2px solid #e2e2e2;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
      padding:30px;
      overflow-y:auto;
    }

    .item{     
      border:2px solid #e2e2e2;
      border-radius:10px;
      overflow:hidden;

      .price{
        display:flex;
        flex-direction: column;
        padding:15px;

        strong{
          font-size:24px;
          font-weight:500;
        }
        span{
          margin-top:5px;
          font-size:18px;
          color:#EC1F72;
        }
      }
      .bonus{
        display:flex;
        justify-content: space-between;
        padding:15px;
        border-top:2px solid #e2e2e2;
        background:#f8f8f8;

        label{color:#888;}
        span{
          font-weight:500;
          color:#0085de;
        }
      }
    }

    ::-webkit-scrollbar{
      display:none;
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