<template>
  <div class="product">
    <div class="tabsWrap">
      <div class="tabs">
        <v-btn
          text
          v-for="(item, i) in tabs"
          :key="i"
          @click="activeTab = i"
          :class="{ active: activeTab === i }"
        >
          {{ item }}
        </v-btn>
      </div>
      <div class="control">
        <v-btn text @click="leftScroll">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn text @click="rightScroll">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>

    <div
      class="tabContents"
      v-for="(items, i) in tabs"
      :key="i"
      v-show="activeTab === i"
    >
      <div class="list">
        <div class="listHead">
          장비를 선택해주세요
        </div>
        <ul>
          <li
            v-ripple
            @click="$refs.productModal.open(true)"
          >
            <div class="itemInfo">
              <strong>1번 세탁기</strong>
              <span>19Kg</span>
            </div>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </li>
          <li
            v-ripple
            @click="$router.push('inputCash')"
          >
            <div class="itemInfo">
              <strong>2번 세탁기</strong>
              <span>19Kg</span>
            </div>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </li>
        </ul>
      </div>
      <!-- list -->

      <div class="v-scroll">
        <div class="scrollBar" />
      </div>
    </div>
    <!-- tabContents -->

    <ProductModal ref="productModal" />
  </div>
</template>

<script>
import ProductModal from "@/components/modal/product.vue";

export default {
  components: {
    ProductModal,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        "세탁기",
        "건조기",
        "운동화세탁",
        "자판기",
        "운동화세탁",
        "자판기",
      ],
    };
  },
  mounted() {
    const list = document.querySelector(".list");
    this.scrollControl();
    list.addEventListener("scroll", this.scrollControl);
  },
  methods: {
    rightScroll() {
      const tabs = document.querySelector(".tabs");
      tabs.scrollLeft += 150;
    },
    leftScroll() {
      const tabs = document.querySelector(".tabs");
      tabs.scrollLeft -= 150;
    },
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
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  .tabsWrap {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    padding: 0 60px;
    height: 60px;

    .control {
      display: flex;
      position: absolute;
      align-items: center;
      height: 0px;
      top: 50%;
      left: 0px;
      width: 100%;
      justify-content: space-between;

      .v-btn {
        min-width: 40px;
        width: 40px;
        height: 40px;
        background: #0085de;
        border: 0px;
        border-radius: 20px;

        .v-icon {
          color: #fff;
        }
      }
    }

    .tabs {
      position: relative;
      white-space: nowrap;
      overflow: auto;
      scroll-behavior: smooth;
      border: 2px solid #d2d2d2;
      border-radius: 30px;
      

      .v-btn {
        font-size: 22px;
        height: 56px;
        padding: 0 40px;
        border-radius: 0px;
        border-right: 2px solid #e2e2e2;
        background: #fff;
      }

      .v-btn:last-child {
        border-right: 0px;
      }

      .v-btn.active {
        color: #fff;
        background: #0085de;
      }
    }

    .tabs::-webkit-scrollbar {
      display: none;
    }
  }

  .tabContents {
    display: flex;
    border: 0px;

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

    .list {
      flex: 1;
      border: 2px solid #e2e2e2;
      background: #fff;
      border-radius: 20px;
      height: 100%;
      max-height: 684px;
      overflow-y: scroll;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

      .listHead {
        display: flex;
        position: sticky;
        top: 0px;
        left: 0px;
        align-items: center;
        justify-content: center;
        background: #494949;
        height: 70px;
        color: #fff;
        font-size: 22px;
        z-index: 1;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      }

      ul {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 84px;
          padding: 0 30px;
          border-bottom: 2px solid #e2e2e2;

          strong {
            font-size: 24px;
          }
          span {
            font-size: 18px;
            color: #888;
            margin-left: 20px;
          }

          .v-icon {
            font-size: 30px;
            color: #0085de;
          }
        }
        li:last-child {
          border-bottom: 0px;
        }
      }
    }

    .list::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
