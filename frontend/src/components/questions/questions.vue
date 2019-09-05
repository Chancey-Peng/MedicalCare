<template  lang="html">
<transition name="fade">
  <div class="AI" v-show="isShow">
    <div class="chat">

      <!-- 聊天界面头部 -->
      <div class="header">
        <div class="header-left">
          <span class="icon-codeigniter"></span>
          <span class="title">欢迎使用智能助手</span>
        </div>
        <div class="header-right">
          <span class="icon-minus" @click="closeAI"></span>
          <!-- <span class="icon-close1"></span> -->
        </div>
      </div>

      <!-- 聊天内容区域 -->
      <div ref="chattingContent" id="chattingContent" class="content">
        <!-- <div ref="contentWrapper"> -->
          <div v-for="item in msgs" :key="item.id">
            <div class="chatting-item self" v-if="item.self">
              <div class="msg-date">{{item.date}}</div>
              <div class="msg-from">
                <!-- <span class="location">{{item.location}}</span> -->
                <span class="msg-author">咨询者</span>
                <img :src="item.avatarurl" alt />
              </div>
              <div class="msg-content">{{item.content}}</div>
            </div>
            <div class="chatting-item ai" v-else>
              <div class="msg-date">{{item.date}}</div>
              <div class="msg-from">
                <!-- <img :src="item.avatarurl" alt /> -->
                <span class="icon-drupal"></span>
                <span class="msg-author">小助手</span>
              </div>
              <div class="msg-content">{{item.content}}</div>
            </div>
          </div>
        <!-- </div> -->
      </div>

      <!-- 输入区域 -->
      <div class="chatinput">
        <div class="content-wrapper">
          <span class="icon-smile"></span>
          <span class="icon-mic"></span>
          <pqa-location @getResData="getResData($event)"></pqa-location>
        </div>
        <div class="question">
          <textarea
            type="text"
            class="text"
            placeholder="请输入你所想咨询的问题"
            v-model.trim="inputContent"
            @keyup.enter="send"
          /></textarea>
          <!-- <textarea id="chatbox_input" class="text grey" data-i18n="saySomething" onfocus="if(value==$.i18n('saySomething')){value=''}" style="background-color: rgb(255, 255, 255); color: rgb(153, 153, 153);">说点什么吧...</textarea> -->
          <!-- <input type="button" class="button" value="发送" /> -->
          <button @click="send" class="button">发送</button>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import pqaLocation from "../city/pqalocation";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      isShow: false,
      inputContent: "",
      oContent: {},
      // msgs:
      //   (localStorage.msgs_ai && JSON.parse(localStorage.msgs_ai)) ||
      //   [
      //     // { date: '2015-11-09 09:57:08', from: 'microzz', avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${this.random(11)}.svg`, content: 'test', self: false}
      //   ],
      msgs: [],
      listHeight: [],
      scrollY: 0,
      msglist: [
        {
          id: 0,
          name: "self",
          datetime: "08-28-09:04",
          location: "广东省佛山市",
          author: "Chancey",
          imageurl: require("../../assets/avatar.png"),
          content: "1234567"
        },
        {
          id: 1,
          name: "self",
          datetime: "08-28-09:04",
          location: "广东省佛山市",
          author: "Chancey",
          imageurl: require("../../assets/avatar.png"),
          content: "12345677417418529652852125"
        },
        {
          id: 2,
          name: "self",
          datetime: "08-28-09:04",
          location: "广东省佛山市",
          author: "Chancey",
          imageurl: require("../../assets/avatar.png"),
          content: "1234567"
        },
        {
          id: 3,
          name: "self",
          datetime: "08-28-09:04",
          location: "广东省佛山市",
          author: "Chancey",
          imageurl: require("../../assets/avatar.png"),
          content: "1234567"
        }
      ]
    };
  },
  mounted() {
    this.oContent = document.getElementById("chattingContent");
    setTimeout(() => {
      this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
    }, 0);
  },
  methods: {
    closeAI() {
      this.isShow = false;
    },
    send() {
      this.oContent.scrollTop = this.oContent.scrollHeight;
      // console.log(this.oContent.scrollHeight);
      if (this.inputContent === "") {
        return;
      } else {
        this.msgs.push({
          date: this.moment().format("MM-DD HH:mm:ss"),
          // location: localStorage.addr,
          // from: `${localStorage.name}`,
          content: this.inputContent,
          self: true,
          // avatarurl: this.avatarurl
          avatarurl: require("../../assets/avatar.png")
        });
        setTimeout(() => {
          this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
        }, 0);
      }
      this.$axios
        .get(
          // `http://192.168.43.159:8000/api/getchatbot?question=${this.inputContent}`
          "http://192.168.43.159:8000/api/getchatbot?question=" +
            this.inputContent
        )
        .then(result => {
          // console.log(result.data.data[0].answer);
          this.msgs.push({
            date: this.moment().format("MM-DD HH:mm:ss"),
            // from: "智能机器人",
            // content: result.data.result.

            content: result.data,
            self: false
            // avatarUrl: 'https://icdn.microzz.com/20170426_vue_chat/icon-ai.svg'
            // avatarUrl: "http://omratag7g.bkt.clouddn.com/icon-ai.svg"
          });
        })
        .then(() => {
          this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
        });
      console.log(this.msgs);

      this.inputContent = "";
    },
    getResData(resData) {
      this.detail_address = resData.detailAddress;
      this.detail_area = resData.detailAreaCode;
      // setTimeout(() => {
      //   //获取van-area的value值
      //   let _value = this.$refs.van_area.getValues();
      //   this.onConfirm(_value);
      // }, 100);
      // console.log(this.detail_address);
    }
    // _initScroll() {
    //   this.chatScroll = new BScroll(this.$refs.contentWrapper, {
    //     click: true
    //   });
    //   console.log(this.chatScroll);
    // }
  },
  created() {
    this.$root.$on("showAI", val => {
      this.isShow = val;
      console.log(val);
    });
    // this.$nextTick(() => {
    //   this._initScroll();
    // });
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     if (!this.scroll) {
  //       this.scroll = new BScroll(this.$refs.contentWrapper, {
  //         click: true
  //       });
  //     } else if (!this.$refs.contentWrapper) {
  //       return;
  //     } else {
  //       this.scroll.refresh();
  //     }
  //   });
  // },
  components: {
    pqaLocation
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.AI {
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 400px;
  width: 500px;
  z-index: 999;
  background-color: rgb(248, 241, 241);

  &.fade-enter-active, &.fade-leave-active {
    transition: all 1s ease;
  }

  // &.fade-enter, &.fade-leave-active {
  // opacity: 0;
  // background: rgba(7, 17, 27, 0);
  // }
  &.fade-leave-active, &.fade-enter {
    height: 0px !important;
  }

  &.fade-leave, &.&.fade-enter-active {
    height: 400px;
  }

  // display: none;
  .chat {
    .header {
      height: 35px;
      width: 100%;
      line-height: 35px;
      color: #fff;
      background: #00a1d6;

      .header-left {
        float: left;

        .icon-codeigniter {
          display: inline;
          margin-left: 5px;
          font-size: 15px;
        }

        .title {
          font-weight: bold;
          font-size: 14px;
          // margin-left: 5px;
        }
      }

      .header-right {
        float: right;

        // .icon-minus {
        // margin: 2px;
        // }
        .icon-minus {
          margin: 0px 10px;
          cursor: pointer;
        }
      }
    }

    .content {
      // -webkit-box-flex: 1;
      // -ms-flex: 1;
      flex: 1;
      width: 100%;
      height: 270px;
      // background-color: rgba(0, 0, 0, 0.1);
      background: #f7f7f7;
      overflow: auto;

      .chatting-item {
        padding: 10px;
        width: 100%;

        .msg-date {
          text-align: center;
          color: grayscale;
          font-size: 80%;
        }

        .msg-from {
          display: flex;
          justify-content: flex-end;
          --webkit-box-pack: end;
          --webkit-box-align: center;
          align-items: center;

          // .location {
          // color: grayscale;
          // font-size: 60%;
          // margin-right: 5px;
          // }
          .author {
            font-size: 1.2rem;
          }

          img {
            margin-left: 10px;
            height: 30px;
            width: 30px;
          }
        }

        .msg-content {
          margin-top: 5px;
          background-color: #fff;
          width: 200px;
          padding: 6px 10px;
          border-radius: 10px;
          font-size: 14px;
          letter-spacing: 2px;
          line-height: 20px;
        }
      }

      // .chatting-item + .chatting-item {
      // margin-top: 10px;
      // }
      .self {
        padding: 10px;
        width: 94%;
        float: right;
        word-wrap: break-word;
        word-break: break-all;
        margin-right: 10px;

        .msg-from {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        // .msg-date {
        // text-align: center;
        // color: grayscale;
        // font-size: 80%;
        // }
        // .msg-from {
        // display: flex;
        // justify-content: flex-end;
        // --webkit-box-pack: end;
        // --webkit-box-align: center;
        // align-items: center;

        // .location {
        // color: grayscale;
        // font-size: 60%;
        // margin-right: 5px;
        // }

        // .author {
        // font-size: 1.2rem;
        // }

        // img {
        // margin-left: 10px;
        // height: 30px;
        // width: 30px;
        // }
        // }
        .msg-content {
          float: right;
          word-wrap: break-word;
          word-break: break-all;
          margin-right: 10px;
          // margin-top: 5px;
          // background-color: #fff;
          // width: 200px;
          // padding: 6px 10px;
          // border-radius: 10px;
        }
      }

      .ai {
        padding: 10px;
        width: 94%;
        float: left;
        word-wrap: break-word;
        word-break: break-all;
        margin-right: 10px;

        .msg-date {
          text-align: center;
          color: grayscale;
          font-size: 80%;
        }

        .msg-from {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          // img {
          // margin-right: 10px;
          // }
          .icon-drupal {
            font-size: 20px;
            margin-right: 10px;
          }
        }

        .msg-content {
          float: left;
          margin-left: 10px;
          word-wrap: break-word;
          word-bread: break-all;
          // margin-right: 10px;
          // margin-top: 5px;
          // background-color: #fff;
          // width: 200px;
          // padding: 6px 10px;
          // border-radius: 10px;
        }
      }
    }

    .chatinput {
      position: absolute;
      display: flex;
      bottom: 0px;
      height: 100px;
      width: 100%;
      // background: #00a1d6;
      // background-color: rgb(248, 241, 241);
      background-color: rgb(255, 255, 255);

      .content-wrapper {
        padding: 4px;
        height: 20px;
        width: inherit;
        line-height: 20px;
        color: #fff;
        // border: 1px solid blue;
        background: #00a1d6;

        .icon-mic {
          &:hover {
            color: #f25d8e;
            cursor: pointer;
          }
        }
      }

      .question {
        position: absolute;
        top: 30px;
        height: 70px;
        width: inherit;

        // background: burlywood;
        .text {
          // outline: none;
          // height: 50px;
          // width: inherit;
          background-color: rgb(255, 255, 255);
          color: rgb(153, 153, 153);
          width: 100%;
          resize: none;
          height: 60px;
          border: 0;
          padding: 5px 0 5px 8px;
          outline: none;
          font-size: 14px;
        }

        .button {
          position: absolute;
          width: 80px;
          right: 0%;
          bottom: 0px;
          margin-bottom: 5px;
          margin-right: 5px;
          border: none;
          border-radius: 5px;
          outline: none;
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
}
</style>