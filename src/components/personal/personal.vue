<template>
  <div class='personal'>
      <div class="personalHeadr">
          <div class="left">
            <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=ILicfjGNRQhfeAtic6ch5DRQ&s=100&t=1556763157" alt="">
            <div class="lefttext">
              <span>name</span>
              <span>VIP</span>
            </div>
          </div>
          <div class="right">
            <div class="rightTop">
              <img src="https://yanxuan.nosdn.127.net/595480970a07e7142c557416d23e2cac.png" alt="">
              <span></span>
            </div>
            <div class="rightBottom">

            </div>
          </div>
      </div>
  </div>
</template>

<script >
import Vue from 'vue'
import Meta from 'vue-meta'
Vue.use(Meta)
  export default {
     metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=0.5,minimum-scale=0.5,maximum-scale=0.5,user-scalable=no' }
      ]
    },
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang='stylus'>
.personal
  width 100%
  height 100%
  background #eee
  .personalHeadr
    width 720px
    padding-left 30px
    height 270px
    background url('../../static/image/vip.png') no-repeat 
    background-size 100%
    display flex
    align-items center
    justify-content space-between
    .left
      display flex
      align-items center
      img 
        width 141.984px
        height 141.984px
        border-radius 50%
        margin-right 20px
      .lefttext
        font-size 32px
        color white
        display flex
        flex-direction column
        &>span 
          margin-top 10px
    .right
      .rightTop
        &>img 
          width 44px
          height 44px
      .rightBottom
        width 203px
        height 84px
        background-image linear-gradient(to bottom,#574e44 0,#0e0e0e 100%)
        border-radius 40px 0 0 40px
        margin-top 30px
        margin-bottom -30px
</style>
