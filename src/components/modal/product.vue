<template>
  <v-dialog
    v-model="visible"
    width="unset"
    overlay-opacity="0.85"
  >
    <div class="product_modal">
      <div class="selected_eq">
        <div class="text">
          <span>세탁기 카테고리</span>
          <strong>
            <b>1번세탁기</b>를 선택하셨습니다
          </strong>
        </div>
        <v-btn text>
          선택취소
        </v-btn>
      </div>
      <div class="list">
        <div class="list-head">
          상품을 선택해주세요
        </div>
        <ul>
          <li 
            v-for="item in 10" 
            :key="item"
            v-ripple
            @click="$router.push('creditSelect')"
          >
            <label>일반세탁 30분</label>
            <strong>5,000원</strong>
          </li>
        </ul>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    open(value){
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>
.product_modal{
  width:720px;

  .selected_eq{
    display:flex;
    align-items: center;
    justify-content: space-between;
    background:#fff;
    padding:30px;
    border-radius:15px;
    margin-bottom:20px;
    border:4px solid #292929;

    .text{
      span{
        display:block;
        font-size:18px;
        color:#888;
      }
      strong{
        display:block;
        font-size:28px;
        font-weight:500;
        b{color:#0085DE;font-weight:500;}
      }
    }

    .v-btn{
      font-size:18px;
      height:46px;
      border-radius:23px;
      border:2px solid #292929;
    }
  }

  .list{
    max-height:600px;
    min-height:600px;
    background:#f2f2f2;
    border-radius:15px;
    overflow-y:scroll;

    .list-head{
      display:flex;
      position:sticky;
      top:0px;
      left:0px;
      align-items: center;
      justify-content: center;
      background:#0085DE;
      height:70px;
      color:#fff;
      font-size:22px;
      z-index:1;
      box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    }

    ul{
      li{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 30px;
        height:90px;
        border-bottom:2px solid #e2e2e2;
        background:#fff;
        
        label{
          font-size:24px;
        }
        strong{
          font-size:24px;
        }
      }
    }
  }
}
</style>