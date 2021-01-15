<template>
  <div class="option">
    <div class="title-line">
      <h4>장비설정</h4>
      <p>매장 내 장비를 설정합니다</p>
    </div>
    <div class="inner">
      <div class="eqList">
        <ul class="list">
          <li class="head">
            <label>장비카테고리</label>
            <label>장치번호</label>
            <label>포트번호</label>
            <label>삭제</label>
          </li>
          <li class="item" v-for="item in 20" :key="item">
            <span>세탁기</span>
            <span>01</span>
            <span>01</span>
            <span>
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </span>
          </li>
        </ul>

        <div class="v-scroll">
          <div class="scrollBar" />
        </div>
      </div>
  
      <div class="right">
        <div class="top">
          <v-btn text @click="$refs.eqAdd.open(true)">장비 추가하기</v-btn>
          <v-btn text>전체삭제</v-btn>
        </div>
        <div class="bottom">
          <v-btn text @click="$router.push('/')">건너뛰기</v-btn>
        </div>
      </div>
    </div>

    <EqAdd ref="eqAdd"/>
  </div>
</template>

<script>
import EqAdd from '@/components/modal/eqAdd.vue';

export default {
  components:{
    EqAdd,
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

<style lang="scss" scoped>
.option{
  display:flex;
  flex-direction: column;
  padding:50px;
  background:#373B40;
  color:#fff;
  height:100%;
  
  .title-line{
    display:flex;
    align-items: flex-end;
  
    h4{
      font-size:36px;
      line-height:36px;
    }
    p{
      font-size:18px;
      margin:0px;
      margin-left:20px;
      color:rgba(255,255,255,0.4)
    }
  }
  
  .inner{
    flex:1;
    margin-top:30px;    
    display:flex;
 
    .eqList{
      display:flex;
      height:800px;
      flex:1;
      margin-right:50px;

      .v-scroll {
        position: relative;
        min-width: 10px;
        background: #000;
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

      ul{
        flex:1;
        background:#fff;
        border-radius:15px;
        overflow-y:auto;

        li{
          text-align:center;
        }

        .head{
          position:sticky;
          top:0px;
          display:flex;
          align-items: center;
          background:#0085de;
          height:80px;
          z-indeX:2;

          label{flex:1;}
        }

        .item{
          display:flex;
          align-items: center;
          color:#292929;
          border-bottom:2px solid #e2e2e2;
          height:80px;
          font-size:24px;
          span{
            flex:1;

            .v-btn{
              width:50px;
              height:50px;
              background:#e2e2e2;
            }
          }
        }
      }

      .list::-webkit-scrollbar{
        display:none;
      }
    }

    .right{
      position: relative;
      width:250px;

      .v-btn{
        width:100%;
        height:60px;
        font-size:18px;
        background:#fff;
      }

      .top{
        .v-btn{margin-bottom:20px;}
      }

      .bottom{
        width:100%;
        position: absolute;
        bottom:0px;

        .v-btn{
          color:#fff;
          background:#EC1F72
        }
      }
    }
  }

  

}
</style>