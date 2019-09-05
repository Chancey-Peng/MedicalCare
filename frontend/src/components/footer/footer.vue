<template>
  <div class="footer">
    <div class="content-wrapper">
      <div class="box">
        <div class="box-left"></div>
        <div class="box-right"></div>
      </div>
      <div class="info">
        <ul class="info-item">
          <li class="item" v-for="item in infolist" :key="item.id">
            <a href>{{item.infoname}}</a>
          </li>
        </ul>
        <p class="info-p">
          <a href>健康网</a>
          - 中国优质医疗保健信息与在线健康服务平台 Copyright © 2000-
          2019 未经授权请勿转载
        </p>
      </div>
      <div class="copyright">
        <span class="copyright-one">
          <a href>
            <img src="../../assets/images/footer/inform.png" alt />
          </a>
        </span>
        <span class="copyright-two">
          <img src="../../assets/images/footer/offline.png" alt />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infolist: [
        {
          id: 1,
          infoname: "网站简介"
        },
        {
          id: 2,
          infoname: "网站地图"
        },
        {
          id: 3,
          infoname: "友情链接"
        },
        {
          id: 4,
          infoname: "媒体报道"
        },
        {
          id: 5,
          infoname: "合作伙伴"
        },
        {
          id: 6,
          infoname: "人才招聘"
        },
        {
          id: 7,
          infoname: "网络营销中心"
        },
        {
          id: 8,
          infoname: "联系方式"
        },
        {
          id: 9,
          infoname: "电脑版"
        },
        {
          id: 10,
          infoname: "手机版"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.footer {
  // position: absolute;
  margin-top: 20px;
  padding-bottom: 10px;
  // bottom: 0px;
  overflow: hidden;
  background: #fff;

  .content-wrapper {
    width: 677px;
    margin: 0 auto;

    .box {
      margin: 25px auto 0;
      overflow: hidden;
      width: 595px;

      .box-left {
      }

      .box-right {
      }
    }

    .info {
      margin-top: 25px;
      text-align: center;

      .info-item {
        .item {
          display: inline-block;
          padding: 0px 5px;

          a {
            font-size: 14px;
            color: #7e8c8d;

            &:hover {
              color: #00a1d6;
            }
          }
        }
      }

      .info-p {
        margin-top: 10px;
        color: #999;
        font-size: 13px;
      }
    }

    .copyright {
      margin-top: 20px;
      text-align: center;
      line-height: 28px;

      .copyright-one, .copyright-two {
        overflow: hidden;
        display: inline-block;
        padding: 0 10px;

        &.copyright-one {
          width: 120px;
          margin-right: 10px;
        }

        &.copyright-two {
          height: 70px;
          margin-left: 10px;

          img {
            max-height: 100%;
            vertical-align: middle;
          }
        }

        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>