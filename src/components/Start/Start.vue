<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(item, index) in startClasses" :key="index" :class="item"></span>
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  data () {
    return {

    }
  },
  props: {
    score: Number,
    size: Number
  },
  computed: {
    startClasses () {
      const {score} = this
      console.log(score)

      const scs = []
      // 向scs中添加n个CLASS_ON
      const scoreInteger = Math.floor(score)
      for (let i = 0; i < scoreInteger; i++) {
        scs.push(CLASS_ON)
      }
      // 向scs中添加0/1个CLASS_HALF
      if (score * 10 - scoreInteger * 10 >= 5) {
        scs.push(CLASS_HALF)
      }
      // 向scs中添加n个CLASS_OFF
      if (scs.length < 5) {
        scs.push(CLASS_OFF)
      }
      return scs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star24_on')
      &.half
        bg-image('./images/stars/star24_half')
      &.off
        bg-image('./images/stars/star24_off')
</style>
