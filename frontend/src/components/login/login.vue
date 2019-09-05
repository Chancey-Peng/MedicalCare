<template>
  <div class="login">
    <div class="user">
      <div class="content-wrapper">
        <div class="avatar">
          <el-avatar :src="circleUrl"></el-avatar>
        </div>
        <div class="show">
          <a class="show-tip">Hi~欢迎寻医问药！</a>
          <p>
            <a href>登录</a>
            &nbsp;|&nbsp;
            <a href>注册</a>
          </p>
        </div>
        <div class="profit">
          <a href class="profit-lk">新人福利</a>
          <a href class="profit-lk profit-lk-plus">会员</a>
        </div>
      </div>
    </div>
    <div class="new">
      <div class="new-content">
        <div class="new-top">
          <h5 class="new-title">快讯</h5>
          <a href class="new-more left">更多</a>
        </div>
        <ul class="new-list">
          <li class="new-item" v-for="(item,index) in newlist" :key="index">
            <span class="new-tag">{{item.tag}}</span>
            <a>{{item.content}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      circleUrl: require("../../assets/avatar.png"),
      newlist: [
        {
          id: 1,
          tag: "推荐",
          content: "广州：仅选大医院定点无法报销？"
        },
        {
          id: 2,
          tag: "热门",
          content: "垃圾食品，中国增速第一"
        },
        {
          id: 3,
          tag: "最新",
          content: "安吉丽娜·朱莉切除卵巢输卵管"
        },
        {
          id: 4,
          tag: "热议",
          content: "触目惊心！还原一包辣条制作真相"
        },
        {
          id: 5,
          tag: "资讯",
          content: "人社部：年内将实现大病医保全覆盖"
        },
        {
          id: 6,
          tag: "资讯",
          content: "我国仅有很少部分人拥有健康心脏"
        },
        {
          id: 7,
          tag: "资讯",
          content: "麦当劳抗生素鸡肉会否影响健康"
        },
        {
          id: 8,
          tag: "资讯",
          content: "中药涨价 板蓝根从3元涨到30元"
        },
        {
          id: 9,
          tag: "资讯",
          content: "柳叶刀：全球35亿人有口腔问题，烟酒糖是罪"
        },
        {
          id: 10,
          tag: "资讯",
          content: "贴三伏贴真能“冬病夏治”？这次还贴出大事"
        },
        {
          id: 11,
          tag: "资讯",
          content: "诺如病毒“侵袭”朝阳群众，它究竟有何来头"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
// @import '../common/stylus/mixin.styl';
.login {
  position: absolute;
  top: 137px;
  right: 5%;
  width: 190px;
  height: 510px;

  // z-index: 1;

  // background: black;
  .user {
    height: 120px;
    background: #fff;
    // margin-top: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e3dede;

    .content-wrapper {
      position: relative;
      padding-top: 67px;
      height: 35px;

      .avatar {
        position: absolute;
        left: 20px;
        top: 13px;
        width: 44px;
        height: 44px;
        cursor: pointer;
      }

      .show {
        position: absolute;
        top: 16px;
        left: 74px;
        right: 10px;

        .show-tip {
          color: #666;
          text-decoration: none;
          font-size: 12px;
          cursor: pointer;

          &:hover {
            color: #00a1d6;
          }
        }

        p {
          overflow: hidden;
          height: 20px;
          line-height: 20px;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #666;
          font-size: 12px;

          a {
            &:hover {
              color: #00a1d6;
            }
          }
        }
      }

      .profit {
        height: 25px;
        font-size: 0;
        text-align: center;

        .profit-lk {
          display: inline-block;
          margin: 0 5px;
          width: 70px;
          height: 25px;
          line-height: 25px;
          font-size: 12px;
          text-align: center;
          color: #fff;
          border-radius: 13px;
          background: #f25d8e;
          -webkit-transition: background 0.3s ease, color 0.3s ease;
          transition: background 0.3s ease, color 0.3s ease;

          &:hover {
            color: #fff;
            background: #f45a8d;
          }
        }

        .profit-lk-plus {
          background: #00a1d6;
          color: #fff;

          &:hover {
            color: #fff;
            background: #f45a8d;
          }
        }
      }
    }
  }

  .new {
    overflow: hidden;
    height: 300px;
    background: #fff;

    .new-top {
      height: 20px;
      padding: 10px 0 0;
      position: relative;
      line-height: 20px;
      font-size: 0;
      margin-bottom: 8px;

      .new-title {
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        margin-left: 15px;
        color: #333;
      }

      .new-more {
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 12px;
        color: #999;
      }

      .left {
        &:after {
          float: right;
          content: ' ';
          display: inline-block;
          height: 5px;
          width: 5px;
          border-width: 1px 1px 0 0;
          border-color: #bfbfbf;
          border-style: solid;
          transform: rotate(46deg);
          margin-right: 9px;
          position: relative;
          top: 7.5px;
        }
      }
    }

    .new-list {
      position: relative;
      margin: 0 15px;
      height: 88px;

      .new-item {
        max-width: 160px;
        _width: 160px;
        height: 16px;
        line-height: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #999;
        margin-bottom: 6px;

        .new-tag {
          display: inline-block;
          position: relative;
          font-size: 12px;
          height: 16px;
          width: 35px;
          line-height: 16px;
          text-align: center;
          vertical-align: 0;
          color: #e1251b;
          background-color: rgba(225, 37, 27, 0.08);
          margin-right: 6px;
        }

        a {
          cursor: pointer;
          font-size: 12px;

          &:hover {
            color: #00a1d6;
          }
        }
      }
    }
  }
}
</style>