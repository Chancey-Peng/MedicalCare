<template>
  <div class="select">
    <div class="select-type">
      <p
        class="subnav-item-cur"
        @click="select(0,$event)"
        :class="{'active':selectType===0}"
      >{{desc.room}}</p>
      <p
        class="subnav-item-cur"
        @click="select(1,$event)"
        :class="{'active':selectType===1}"
      >{{desc.position}}</p>
    </div>
  </div>
</template>
<script>
const ROOM = 0;
const position = 1;
export default {
  selectType: {
    type: Number,
    default: ROOM
  },
  desc: {
    type: Object,
    default() {
      return {
        room: "科室",
        position: "部位"
      };
    }
  }
};
</script>
<style lang="stylus" scoped>
.select {
  .subnav-item-cur {
    border-top: 2px solid #00a1d6;
    border-bottom: 1px solid #f6f7f5 !important;
    color: #00a1d6 !important;
    background-color: white;
  }
}
</style>