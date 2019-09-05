<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-left">
        <a href>
          <img src="../../assets/images/logo.png" class="logo" alt="疾病百科" />
        </a>
        <ul class="left-nav">
          <li class="nav-item">疾病症状</li>
          <li class="nav-item">检查</li>
          <li class="nav-item">手术</li>
          <li class="nav-item">症状自查</li>
        </ul>
      </div>
      <div class="header-right">
        <div class="search">
          <input type="text" class="text" placeholder="疾病/症状/检查/手术" />
          <input type="button" class="button" value="搜索" />
        </div>
        <div class="qusetion">问医生</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.header {
  position: relative;
  height: 70px;
  width: auto;
  background-color: #00a1d6;

  .content-wrapper {
    width: 1000px;
    margin: 0 auto;

    .header-left {
      width: 560px;
      justify-content: space-between;
      float: left;

      .logo {
        margin-top: 14px;
        float: left;
      }

      .left-nav {
        margin-left: 40px;
        float: left;
        height: 70px;

        .nav-item {
          float: left;
          margin-right: 25px;
          line-height: 70px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;

          &:hover {
            color: #f25d8e;
          }
        }
      }
    }

    .header-right {
      float: right;
      display: inline-block;
      vertical-align: top;
      margin-left: 20px;
      width: 420px;

      .search {
        background: #fff;
        height: 35px;
        border-radius: 5px;
        width: 305px;
        margin-top: 17.5px;
        float: left;
        overflow: hidden;

        .text {
          width: 230px;
          border: 0px;
          height: 33px;
          margin-left: 10px;
          outline: 0px;
          margin-top: 0px;
        }

        .button {
          height: 20px;
          line-height: 19px;
          color: #00a1d6;
          font-size: 14px;
          background: #fff;
          width: 58px;
          border-left: 1px solid #00a1d6;
          margin-top: 7.5px;
          outline: none;
          cursor: pointer;
        }
      }

      .qusetion {
        margin-left: 20px;
        width: 68px;
        height: 35px;
        line-height: 35px;
        background: #f25d8e;
        color: #fff;
        float: left;
        margin-top: 17.5px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
