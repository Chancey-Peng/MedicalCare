<template>
  <div class="rightnav">
    <ul>
      <li class="li_1">
        <a href="javascript:;" class="itcast_click" @click="showAI">
          <!-- <i id="qimo_badge" style="display: none;">1</i> -->
          <span class="icon-drupal"></span>
          <p>智能问答</p>
        </a>
      </li>
      <li class="li_2">
        <a href="javascript:;" class="itcast_click hand">
          <span class="icon-heart"></span>
          <p>心率测试</p>
        </a>
      </li>
      <li class="li_3">
        <a href="javascript:;" class="itcast_click hand">
          <span class="icon-aid-kit"></span>
          <p>医疗优惠</p>
        </a>
      </li>
      <!-- <li class="li_4">
        <a href="http://www.itheima.com/flow/flow.html" target="_blank" rel="nofollow">
          <span class="icon_s">&nbsp;</span>
          <p>立即报名</p>
        </a>
      </li>-->
      <!-- <li class="li_5 li_gd"> -->
      <!-- <span class="icon_s">&nbsp;</span> -->
      <!-- <p>电话咨询</p> -->
      <!-- <div> -->
      <!-- <p>400-618-9090</p> -->
      <!-- </div> -->
      <!-- </li> -->
      <li class="li_4" v-show="toTopIsShow">
        <a href="javascript:void(0);" @click="backTop">
          <span class="icon-arrow-up"></span>
          <p>返回顶部</p>
        </a>
      </li>
    </ul>
    <!-- <div
      class="qimo_zx itcast_click"
      style="width: 225px; height: 42px; background: rgb(181, 14, 3); border-radius: 2px; overflow: hidden; position: fixed; right: 0px; bottom: 0px; z-index: 1000000; cursor: pointer;"
    >
      <div
        style="float: left; width: 42px;height: 42px;background: #d41d11 url('http://www.itcast.cn/images/indeximg1.svg') no-repeat center;"
      ></div>
      <div
        style="float: right; width: 170px;height: 42px;background: url('http://www.itcast.cn/images/indeximg2.svg') no-repeat 142px center;font-size: 16px;color: #fff;line-height: 42px;padding-left: 10px;"
      >和我们在线交谈！</div>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowAI: true, //控制AI问答框是否显示
      toTopIsShow: false //控制回到顶部按钮是否显示
    };
  },
  methods: {
    showAI() {
      this.$root.$emit("showAI", this.isShowAI);
    },
    backTop() {
      if (document.documentElement.scrollTop > 0) {
        document.documentElement.scrollTop = 0;
      }
    }
  },
  created() {
    var _this = this;
    window.onscroll = function() {
      //鼠标滚动距离超过25px时，回到顶部按钮才显示
      if (document.documentElement.scrollTop > 250) {
        _this.toTopIsShow = true;
      } else {
        _this.toTopIsShow = false;
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.rightnav {
  width: 60px;
  position: fixed;
  right: 0;
  top: 53%;
  margin-top: -150px;
  z-index: 99;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;

  // font-weight: bold;
  li {
    width: 58px;
    height: 58px;
    border: 1px solid #E0E0E0;
    margin-bottom: -1px;
    background: #fff;
    position: relative;
    z-index: 99999;
    font-weight: bold;

    span {
      font-size: 20px;
      display: block;
      width: 24px;
      height: 26px;
      margin: 7px auto 4px;
      color: #00a1d6;
    }

    p {
      font-weight: bold;
    }
  }

  .itcast_click {
    display: block;
    width: 58px;
    height: 58px;
    color: #333;
    overflow: hidden;
  }

  .hand {
    &:hover {
      span {
        color: #fff;
      }

      background: #00a1d6;
      color: #fff;
    }
  }

  .li_1 {
    background: #00a1d6;
    border-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .icon-drupal {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }

  .li_2 {
    .icon-heart {
      color: #ff4949;
    }
  }

  .li_3 {
    .icon-aid-kit {
      color: #800080;
    }
  }
}
</style>