<template>
  <div class="carousel">
    <el-carousel height="510px" width="945px">
      <el-carousel-item v-for="item in imgurl" :key="item.id" name="item.name">
        <!-- <h3 class="small">{{ item.url }}</h3> -->
        <img :src="item.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      imgurl: [
        {
          id: 1,
          name: "医院等你来",
          url: require("../../assets/images/banner/1.jpg")
        },
        {
          id: 2,
          name: "守护肺部",
          url: require("../../assets/images/banner/2.jpg")
        },
        {
          id: 3,
          name: "绿色大森林",
          url: require("../../assets/images/banner/3.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.carousel {
  position: relative;
  height: 600px;
  // height: 510px;
  width: 945px;
  top: 66px;
  left: 50%;
  margin-left: -472px;

  // overflow: hidden;
  .el-carousel {
    overflow: hidden;

    .el-carousel__item img {
      height: 510px;
      width: 945px;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}
</style>