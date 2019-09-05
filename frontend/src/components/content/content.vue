<template>
  <div class="content">
    <div class="disease">
      <p class="title">人群疾病</p>
      <div class="disease-male" v-for="(item,key) in contentlist" :key="key">
        <div class="left">
          <p class="male-title icon" :class="setClass(key)">{{item.type}}</p>
          <ul class="male-ul">
            <li v-for="dis in item.diseaseone" :key="dis.one">
              <a href="#">{{dis.desc}}</a>
            </li>
          </ul>
          <ul class="male-ul">
            <li v-for="distwo in item.diseasetwo" :key="distwo.two">
              <a href="#">{{distwo.desc}}</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <div v-for="doc in item.doctor" :key="doc.doctorId" class="divmargin">
            <div class="r-left">
              <div class="area">
                <a href>
                  <div class="avatar common">
                    <img :src="doc.avatarurl" alt />
                  </div>
                  <p class="name">
                    {{doc.name}}
                    <span>{{doc.position}}</span>
                  </p>
                  <p class="address">
                    {{doc.address}}
                    <span>{{doc.department}}</span>
                  </p>
                  <p class="txt">{{doc.text}}</p>
                </a>
              </div>
              <ul class="r-ul">
                <li v-for="fangfa in doc.des" :key="fangfa.desId">
                  <a href>{{fangfa.text}}</a>
                </li>
              </ul>
            </div>
            <!-- <div class="r-right">
              <div class="area">
                <a href>
                  <div class="avatar">
                    <img :src="doc.avatarurl" alt />
                  </div>
                  <p class="name">
                    doc.name
                    <span>doc.position</span>
                  </p>
                  <p class="address">
                    doc.address
                    <span>doc.department</span>
                  </p>
                  <p class="txt">doc.text</p>
                </a>
              </div>
              <ul class="r-ul">
                <li>
                  <a href>123432</a>
                </li>
              </ul>
            </div>-->
          </div>
          <div class="drug" v-for="drugitem in item.drug" :key="drugitem.erro">
            <a href>
              <div class="drug-img">
                <img :src="drugitem.drugImg" alt />
              </div>
              <div class="drug-txt">
                <p>{{drugitem.name}}</p>
                <p v-if="drugitem.price>0">￥{{drugitem.price}}元</p>
                <p v-else>暂无</p>
              </div>
            </a>
          </div>
          <!-- <div class="r-right">
            <a href>
              <div class="r-drug">
                <img src alt />
              </div>
              <div class="r-drug-txt">
                <p>1231</p>
                <p>465</p>
              </div>
            </a>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentlist: [
        {
          id: 0,
          type: "男性",
          diseaseone: [
            {
              one: 11,
              desc: "早泄"
            },
            {
              one: 22,
              desc: "阳痿"
            },
            {
              one: 33,
              desc: "小阴茎"
            },
            {
              one: 44,
              desc: "包皮过长"
            },
            {
              one: 55,
              desc: "遗精"
            },
            {
              one: 66,
              desc: "睾丸疼痛"
            },
            {
              one: 77,
              desc: "肾虚症状"
            },
            {
              one: 88,
              desc: "阴茎短"
            }
          ],
          diseasetwo: [
            {
              two: 99,
              desc: "男科检查"
            },
            {
              two: 111,
              desc: "外生殖器检查"
            },
            {
              two: 112,
              desc: "精液检查"
            },
            {
              two: 113,
              desc: "前列腺B超"
            },
            {
              two: 114,
              desc: "输精管结扎术"
            },
            {
              two: 115,
              desc: "阴茎全切除术"
            }
          ],
          doctor: [
            {
              doctorId: 100,
              avatarurl: require("../../assets/images/doctor/1913599.jpg"),
              name: "曾宪梓",
              position: "主任医师",
              address: "随州市中医医院",
              department: "外科",
              text: "烧烤配啤酒 小心阴茎勃起无力",
              des: [
                {
                  desId: 101,
                  text: "前列腺炎如何治疗好得快"
                },
                {
                  desId: 102,
                  text: "前列腺炎的病因及治疗方法"
                },
                {
                  desId: 103,
                  text: "慢性前列腺炎症状治疗的方法"
                }
              ]
            },
            {
              doctorId: 104,
              avatarurl: require("../../assets/images/doctor/2277562.jpg"),
              name: "顾昕",
              position: "副主任医师",
              address: "常州市疾控中心",
              department: "传染病与皮肤病",
              text: "阴茎湿疹原因是什么",
              des: [
                {
                  desId: 105,
                  text: "男科前列腺炎症状有哪些"
                },
                {
                  desId: 106,
                  text: "前列腺炎好治吗 视病情而定"
                },
                {
                  desId: 107,
                  text: "无菌性前列腺炎症状有哪些"
                }
              ]
            }
          ],
          drug: [
            {
              erro: 108,
              drugImg: require("../../assets/images/drug/Te2a5e999409.gif"),
              name: "参茸强肾片",
              price: 34.45
            },
            {
              erro: 109,
              drugImg: require("../../assets/images/drug/623296.jpg"),
              name: "强肾片",
              price: 37.45
            }
          ]
        },
        {
          id: 1,
          type: "女性",
          diseaseone: [
            {
              one: 111,
              desc: "宫颈糜烂"
            },
            {
              one: 222,
              desc: "阴道炎"
            },
            {
              one: 333,
              desc: "小月经不调"
            },
            {
              one: 444,
              desc: "盆腔炎"
            },
            {
              one: 555,
              desc: "白带多是什么原因"
            },
            {
              one: 666,
              desc: "乳房胀痛"
            },
            {
              one: 777,
              desc: "阴毛脱落"
            },
            {
              one: 888,
              desc: "盆腔积液"
            }
          ],
          diseasetwo: [
            {
              two: 999,
              desc: "白带常规检查"
            },
            {
              two: 1010,
              desc: "阴道检查"
            },
            {
              two: 1011,
              desc: "宫颈刮片"
            },
            {
              two: 1012,
              desc: "乳腺筛查"
            },
            {
              two: 1013,
              desc: "人流"
            },
            {
              two: 1014,
              desc: "处女膜修补术"
            }
          ],
          doctor: [
            {
              doctorId: 200,
              avatarurl: require("../../assets/images/doctor/1425756.jpg"),
              name: "梅泉",
              position: "副主任医师",
              address: "宜昌市第二人民医院",
              department: "妇产科",
              text: "多事之秋，女人如何远离盆腔炎骚扰？",
              des: [
                {
                  desId: 201,
                  text: "宫外孕出血和月经出血有和不同"
                },
                {
                  desId: 202,
                  text: "盆腔炎注意什么 两大方面要留心"
                },
                {
                  desId: 203,
                  text: "宫外孕怎么引起的  原因都有哪些"
                }
              ]
            },
            {
              doctorId: 204,
              avatarurl: require("../../assets/images/doctor/1425756.jpg"),
              name: "梅泉",
              position: "副主任医师",
              address: "宜昌市第二人民医院",
              department: "妇产科",
              text: "盆腔炎有哪些常见症状？盆腔炎症状知多少",
              des: [
                {
                  desId: 205,
                  text: "急性盆腔炎怎么治疗 女性要关爱自己"
                },
                {
                  desId: 206,
                  text: "不治疗盆腔炎后果有哪些呢"
                },
                {
                  desId: 207,
                  text: "宫外孕输卵管妊娠的原因有哪些"
                }
              ]
            }
          ],
          drug: [
            {
              erro: 208,
              drugImg: require("../../assets/images/drug/nopic.gif"),
              name: "阴道炎联合检测试剂盒(干化学酶法)",
              price: "暂无"
            },
            {
              erro: 209,
              drugImg: require("../../assets/images/drug/nopic.gif"),
              name: "阴道炎联合检测试剂盒(化学反应法)",
              price: "暂无"
            }
          ]
        },
        {
          id: 2,
          type: "老人",
          diseaseone: [
            {
              one: 1111,
              desc: "糖尿病"
            },
            {
              one: 2222,
              desc: "高血压"
            },
            {
              one: 3333,
              desc: "骨关节炎"
            },
            {
              one: 4444,
              desc: "中风"
            },
            {
              one: 5555,
              desc: "更年期综合征表现"
            },
            {
              one: 6666,
              desc: "血压高"
            },
            {
              one: 7777,
              desc: "失眠怎么办"
            },
            {
              one: 8888,
              desc: "心肌缺血的症状"
            }
          ],
          diseasetwo: [
            {
              two: 9999,
              desc: "糖尿病检查"
            },
            {
              two: 101010,
              desc: "高血压检查"
            },
            {
              two: 121212,
              desc: "动脉硬化检查"
            },
            {
              two: 131313,
              desc: "肿瘤检查"
            },
            {
              two: 141414,
              desc: "心脏搭桥"
            },
            {
              two: 151515,
              desc: "冠状动脉造影"
            }
          ],
          doctor: [
            {
              doctorId: 300,
              avatarurl: require("../../assets/images/doctor/13418070025099.jpg"),
              name: "徐安定",
              position: "主任医师",
              address: "暨南大学附属第一医院",
              department: "神经内科",
              text: "看脸、查胳膊、听语言  快速识别中风记住“中风120”",
              des: [
                {
                  desId: 301,
                  text: "冠心病的治疗方法有哪些 怎么解决冠"
                },
                {
                  desId: 302,
                  text: "冠心病介入治疗危害有哪些"
                },
                {
                  desId: 303,
                  text: "冠心病造影  不得不做的两种情况"
                }
              ]
            },
            {
              doctorId: 304,
              avatarurl: require("../../assets/images/doctor/13418070025099.jpg"),
              name: "徐安定",
              position: "主任医师",
              address: "暨南大学附属第一医院",
              department: "神经内科",
              text: "一场倒春寒 小心中风杀个“回马枪”",
              des: [
                {
                  desId: 305,
                  text: "冠心病最佳治疗方案 冠心病如何治疗"
                },
                {
                  desId: 306,
                  text: "心肌缺血是冠心病吗 心肌缺血是不是"
                },
                {
                  desId: 307,
                  text: "早期冠心病的症状有哪些"
                }
              ]
            }
          ],
          drug: [
            {
              erro: 308,
              drugImg: require("../../assets/images/drug/nopic.gif"),
              name: "高血压标志物质控物",
              price: "暂无"
            },
            {
              erro: 309,
              drugImg: require("../../assets/images/drug/885463.jpg"),
              name: "培哚普利吲达帕胺片",
              price: 91
            }
          ]
        },
        {
          id: 3,
          type: "儿童",
          diseaseone: [
            {
              one: 11111,
              desc: "手足口病"
            },
            {
              one: 22222,
              desc: "小儿感冒"
            },
            {
              one: 33333,
              desc: "支原体感染"
            },
            {
              one: 44444,
              desc: "新生儿黄疸"
            },
            {
              one: 55555,
              desc: "咳嗽"
            },
            {
              one: 66666,
              desc: "孩子发烧怎么办"
            },
            {
              one: 77777,
              desc: "新生儿打嗝"
            },
            {
              one: 88888,
              desc: "婴儿睡觉不踏实"
            }
          ],
          diseasetwo: [
            {
              two: 99999,
              desc: "新生儿疾病筛查"
            },
            {
              two: 10101010,
              desc: "新生儿体格检查"
            },
            {
              two: 12121212,
              desc: "黄疸检查"
            },
            {
              two: 13131313,
              desc: "胎儿疾病筛查"
            },
            {
              two: 14141414,
              desc: "近视手术"
            },
            {
              two: 15151515,
              desc: "扁桃体切除术"
            }
          ],
          doctor: [
            {
              doctorId: 400,
              avatarurl: require("../../assets/images/doctor/20170401080345317.jpeg"),
              name: "郝鹏锴",
              position: "主任医师",
              address: "吉林省妇幼保健院",
              department: "儿科",
              text: "“一摸二看”可早期辨别手足口病",
              des: [
                {
                  desId: 401,
                  text: "手足口病初期症状治疗方法有哪些"
                },
                {
                  desId: 402,
                  text: "手足口病会复发吗 怎么预防手足口病"
                },
                {
                  desId: 403,
                  text: "手足口病能洗澡吗 两者关系不大"
                }
              ]
            },
            {
              doctorId: 404,
              avatarurl: require("../../assets/images/doctor/20170401080345317.jpeg"),
              name: "郝鹏锴",
              position: "主任医师",
              address: "吉林省妇幼保健院",
              department: "儿科",
              text: "宝宝得了手足口病 这些东西不能吃”",
              des: [
                {
                  desId: 405,
                  text: "孩子得了手足口病怎么办 尽快到医院"
                },
                {
                  desId: 406,
                  text: "手足口病预防措施 手足口病的症状表"
                },
                {
                  desId: 407,
                  text: "手足口病发烧怎么办 如何处理"
                }
              ]
            }
          ],
          drug: [
            {
              erro: 408,
              drugImg: require("../../assets/images/drug/20181116080739321621.jpg"),
              name: "小儿感冒颗粒",
              price: 5.6
            },
            {
              erro: 409,
              drugImg: require("../../assets/images/drug/818532.jpg"),
              name: "小儿感冒颗粒",
              price: 15
            }
          ]
        }
      ]
    };
  },
  methods: {
    setClass(key) {
      let obj = { icon: true };
      obj[`icon-${key}`] = true;
      return obj;
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  padding: 14px 30px;
  width: 885px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: #fff;
  overflow: hidden;

  .disease {
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;

      // font-size: 12px;
      &:hover {
        color: #00a1d6;
      }
    }

    .title {
      color: #00a1d6;
      font-size: 22px;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 15px;
    }

    .disease-male {
      margin-top: 22px;
      overflow: hidden;

      .left {
        float: left;
        width: 235px;
        overflow: hidden;
        margin-right: 55px;

        .icon-0 {
          background-position: -9px -94px;
        }

        .icon-1 {
          background-position: -9px -136px;
        }

        .icon-2 {
          background-position: -9px -52px;
        }

        .icon-3 {
          background-position: -9px -10px;
        }

        .male-title {
          color: #333;
          font-size: 20px;
          padding-left: 35px;
          background-image: url('https://image.39.net/dist/common/jbk/pc/character_icon.png'); // image.39.net/dist/common/jbk/pc/character_icon.png)
          background-repeat: no-repeat;
        }

        .male-ul {
          margin-top: 15px;
          margin-bottom: 18px;
          overflow: hidden;

          li {
            display: list-item;
            width: 44%;
            float: left;
            margin-right: 3%;
            text-align: -webkit-match-parent;
            line-height: 35px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            a {
              &:hover {
                color: #00a1d6;
              }
            }
          }
        }
      }

      .right {
        width: 590px;
        float: left;

        .divmargin {
          margin-right: 10px;
        }

        div {
          float: left;
          // margin-right: 5%;
          width: 270px;
        }

        .r-left {
          overflow: hidden;

          .area {
            overflow: hidden;

            a {
              display: block;
            }

            .avatar {
              float: left;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .common {
              margin: 0 10px 0 0;
              width: 50px;
              height: 50px;
            }

            .name {
              font-size: 16px;
              color: #333;

              span {
                margin-left: 10px;
                font-size: 14px;
                color: #666;
              }
            }

            .address {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              span {
                margin-left: 10px;
                font-size: 14px;
                color: #666;
              }
            }

            .txt {
              // margin-top: 10px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }

          .r-ul {
            margin-top: 10px;

            li {
              line-height: 40px;

              a {
                &:hover {
                  color: #00a1d6;
                }
              }
            }
          }
        }

        .drug {
          // width: 200px;
          .drug-img {
            width: 70px;
            display: inline-block;
            margin-top: 20px;

            img {
              width: 64px;
              height: 46px;
              border: 1px solid #e4e4e4;
              vertical-align: text-bottom;
            }
          }

          .drug-txt {
            display: inline-block;
            width: calc(100% - 81px);
            margin-top: 10px;
            margin-left: 10px;
            font-size: 14px;

            p:nth-of-type(1) {
              margin-bottom: 10px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            p:nth-of-type(2) {
              color: #ff4949;
            }
          }
        }
      }
    }
  }
}
</style>