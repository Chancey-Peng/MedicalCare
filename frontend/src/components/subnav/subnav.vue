<template>
  <div class="subnav" id="subnavTop" :class="{searchBarFixed: isFixed}">
    <div class="subnav-item">
      <p class="subnav-item-cur" @click="select(0,$event)" :class="{'active':selectType===0}">科室</p>
      <p class="subnav-item-cur" @click="select(1,$event)" :class="{'active':selectType===1}">部位</p>
      <!-- <p class="subnav-item-cur" @click="select(0,$event)" :class="{'active':selectType===0}">科室</p>
      <p class="subnav-item-cur" @click="select(1,$event)" :class="{'active':selectType===1}">部位</p>-->
      <!-- <SelectType></SelectType> -->
    </div>
    <div class="menu-all">
      <div class="menu menu-cur">
        <ul class="menu-ul" id="ulOne">
          <li
            class="menu-icon left bgurlOne"
            v-for="(item,key) in department"
            :key="key"
            :class="setClass(key)"
          >
            <a>{{item.name}}</a>
          </li>
          <!-- <li class="menu-icon left" v-for="item in position" :key="item.id">{{item.name}}</li> -->
        </ul>
        <ul class="menu-ul" id="ulTwo" style="display:none">
          <li
            class="menu-icon left bgurlTwo"
            v-for="(item,key) in position"
            :key="key"
            :class="setClassTwo(key)"
          >
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SelectType from "./select";
const ROOM = 0;
const POSITION = 1;

export default {
  name: "Subnav",
  data() {
    return {
      isFixed: false,
      // flag: false,
      menulist: [
        {
          id: 1,
          type: 0,
          name: "内科"
        },
        {
          id: 2,
          type: 0,
          name: "外科"
        },
        {
          id: 3,
          type: 0,
          name: "妇产科"
        },
        {
          id: 4,
          type: 0,
          name: "儿科"
        },
        {
          id: 5,
          type: 0,
          name: "男科"
        },
        {
          id: 6,
          type: 0,
          name: "皮肤性病"
        },
        {
          id: 7,
          type: 0,
          name: "五官科"
        },
        {
          id: 8,
          type: 0,
          name: "肿瘤科"
        },
        {
          id: 9,
          type: 0,
          name: "传染科"
        },
        {
          id: 10,
          type: 0,
          name: "精神科"
        }
        // {
        //   id: 11,
        //   type: 1,
        //   name: "头部"
        // },
        // {
        //   id: 12,
        //   type: 0,
        //   name: "颈部"
        // },
        // {
        //   id: 13,
        //   type: 1,
        //   name: "胸部"
        // },
        // {
        //   id: 14,
        //   type: 1,
        //   name: "腹部"
        // },
        // {
        //   id: 15,
        //   type: 1,
        //   name: "腰部"
        // },
        // {
        //   id: 16,
        //   type: 1,
        //   name: "男性生殖"
        // },
        // {
        //   id: 17,
        //   type: 1,
        //   name: "女性生殖"
        // },
        // {
        //   id: 18,
        //   type: 1,
        //   name: "全身"
        // },
        // {
        //   id: 19,
        //   type: 1,
        //   name: "精神科"
        // },
        // {
        //   id: 20,
        //   type: 1,
        //   name: "精神科"
        // }
      ],
      department: [
        {
          id: 1,
          type: 0,
          name: "内科"
        },
        {
          id: 2,
          type: 0,
          name: "外科"
        },
        {
          id: 3,
          type: 0,
          name: "妇产科"
        },
        {
          id: 4,
          type: 0,
          name: "儿科"
        },
        {
          id: 5,
          type: 0,
          name: "男科"
        },
        {
          id: 6,
          type: 0,
          name: "皮肤性病"
        },
        {
          id: 7,
          type: 0,
          name: "五官科"
        },
        {
          id: 8,
          type: 0,
          name: "肿瘤科"
        },
        {
          id: 9,
          type: 0,
          name: "传染科"
        },
        {
          id: 10,
          type: 0,
          name: "精神科"
        }
      ],
      position: [
        {
          id: 11,
          type: 1,
          name: "头部"
        },
        {
          id: 12,
          type: 0,
          name: "颈部"
        },
        {
          id: 13,
          type: 1,
          name: "胸部"
        },
        {
          id: 14,
          type: 1,
          name: "腹部"
        },
        {
          id: 15,
          type: 1,
          name: "腰部"
        },
        {
          id: 16,
          type: 1,
          name: "男性生殖"
        },
        {
          id: 17,
          type: 1,
          name: "女性生殖"
        },
        {
          id: 18,
          type: 1,
          name: "全身"
        },
        {
          id: 19,
          type: 1,
          name: "上肢"
        },
        {
          id: 20,
          type: 1,
          name: "下肢"
        },
        {
          id: 21,
          type: 1,
          name: "盆骨"
        },
        {
          id: 22,
          type: 1,
          name: "臀部"
        },
        {
          id: 23,
          type: 1,
          name: "骨"
        }
      ]
    };
  },
  props: {
    selectType: {
      type: Number,
      default: ROOM
    }
  },
  methods: {
    //滚动事件，滑动一定距离固定窗口
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#subnavTop").offsetTop;
      console.log(scrollTop);
      console.log(offsetTop);
      if (scrollTop > offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    //精灵图定位自己所要的元素
    setClass(key) {
      let obj = { icon: true };
      obj[`menu-icon${key}`] = true;
      return obj;
    },
    setClassTwo(key) {
      let obj = { icon: true };
      obj[`icon${key}`] = true;
      return obj;
    },
    select(type, event) {
      this.selectType = type;
      var ulOne = document.getElementById("ulOne");
      var ulTwo = document.getElementById("ulTwo");
      if (ulOne.style.display == "none") {
        ulOne.style.display = "";
        ulTwo.style.display = "none";
      } else {
        ulTwo.style.display = "";
        ulOne.style.display = "none";
      }
    }
  },
  components: {
    SelectType
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.subnav {
  position: absolute;
  top: 137px;
  background: #fff;
  left: 50%;
  z-index: 1;
  margin-left: -695px;

  .subnav-item {
    overflow: hidden;

    .subnav-item-cur {
      // border-top: 2px solid #00a1d6;
      // border-bottom: 1px solid #f6f7f5 !important;
      // color: #00a1d6 !important;
      // background-color: white;
      &.active {
        border-top: 2px solid #00a1d6;
        border-bottom: 1px solid #f6f7f5 !important;
        color: #00a1d6 !important;
        background-color: white;
      }
    }

    p {
      width: 80px;
      color: #666;
      font-size: 16px;
      font-weight: 700;
      float: left;
      border-bottom: 1px solid #f0f0f0;
      text-align: center;
      height: 45px;
      line-height: 45px;
      border-right: 1px solid #f0f0f0;
      cursor: pointer;
      background: #fcfcfc;
    }
  }

  .menu-all {
    .menu {
      position: relative;

      .menu-icon {
        border-bottom: 1px solid #f0f0f0;
        padding-left: 55px;
        cursor: pointer;
        border-right: 1px solid #f0f0f0;
        width: 106px;
        color: #333;
        font-size: 16px;
        height: 45px;
        line-height: 45px;
        background-repeat: no-repeat;

        a {
          &:hover {
            color: #00a1d6;
            background: rgba(137, 207, 240, 0.1);
          }
        }
      }

      .bgurlOne {
        background-image: url('../../assets/images/department0.png');
      }

      .bgurlTwo {
        background-image: url('../../assets/images/position0.png');
      }

      .menu-icon0 {
        background-position: 15px -314px;
      }

      .menu-icon1 {
        background-position: 15px -356px;
      }

      .menu-icon2 {
        background-position: 15px -442px;
      }

      .menu-icon3 {
        background-position: 15px -398px;
      }

      .menu-icon4 {
        background-position: 15px 6px;
      }

      .menu-icon5 {
        background-position: 15px -273px;
      }

      .menu-icon6 {
        background-position: 15px -148px;
      }

      .menu-icon7 {
        background-position: 15px -32px;
      }

      .menu-icon8 {
        background-position: 15px -191px;
      }

      .menu-icon9 {
        background-position: 15px -231px;
      }

      .icon0 {
        background-position: 15px -233px;
      }

      .icon1 {
        background-position: 15px 6px;
      }

      .icon2 {
        background-position: 15px -190px;
      }

      .icon3 {
        background-position: 15px -270px;
      }

      .icon4 {
        background-position: 15px -437px;
      }

      .icon5 {
        background-position: 15px -71px;
      }

      .icon6 {
        background-position: 15px -352px;
      }

      .icon7 {
        background-position: 15px -312px;
      }

      .icon8 {
        background-position: 15px -396px;
      }

      .icon9 {
        background-position: 15px -396px;
      }

      .icon10 {
        background-position: 15px -112px;
      }

      .icon11 {
        background-position: 15px -34px;
      }

      .icon12 {
        background-position: 15px -152px;
      }
    }
  }
}

.searchBarFixed {
  position: fixed;
  top: 10px;
}
</style>