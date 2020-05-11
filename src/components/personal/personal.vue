<template>
  <div class='personal'>
      <div class="personalHeadr">
          <div class="left">
            <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=ILicfjGNRQhfeAtic6ch5DRQ&s=100&t=1556763157" alt="">
            <div class="lefttext">
              <span>{{name}}</span>
              <span>VIP</span>
            </div>
          </div>
          <div class="right">
            <div class="rightTop">
              <img src="https://yanxuan.nosdn.127.net/595480970a07e7142c557416d23e2cac.png" alt="">
              <div class="bImg">

              </div>
            </div>
            <div class="rightBottom">
                <span></span>
                <div>Pro会员</div>
                <div>立即试用<div></div></div>
            </div>
          </div>
      </div>
      <div class="personalNavTopWrap">
        <div class="personalNavTop">
          我的资产
        </div>
      </div>
      <div class="personalNavBottom">
        <div class="bottomItem">
          <span>￥0</span>
          <span>回馈金</span>
        </div>
        <div class="bottomItem">
          <span>￥0</span>
          <span>红包</span>
        </div>
        <div class="bottomItem">
          <span>￥0</span>
          <span>优惠券</span>
        </div>
        <div class="bottomItem">
          <span>￥0</span>
          <span>津贴</span>
        </div>
        <div class="bottomItem">
          <span>￥0</span>
          <span>礼品卡</span>
        </div>
      </div>
      <div class="personalContent">
        <div class="contentItem">
            <div class="iconfont icon-wodedingdan"></div>
            <div>我的订单</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-zhouliu"></div>
            <div>周六一起拼</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-shouhuo_icon_n"></div>
            <div>售后服务</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-invite"></div>
            <div>邀请返利</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-youxiangou"></div>
            <div>优先购</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-chongzhi"></div>
            <div>积分中心</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-huiyuan"></div>
            <div>会员俱乐部</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-dizhi"></div>
            <div>地址管理</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-anquan"></div>
            <div>账号安全</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-kefu"></div>
            <div>帮助与客服</div>
        </div>
        <div class="contentItem">
            <div class="iconfont icon-yijian"></div>
            <div>意见反馈</div>
        </div>
        <div class="contentItem">
            <div ></div>
            <div></div>
        </div>
      </div>
      <div class="persnalFooter">
          <div class="text" @click='logout'>
            退出登录
          </div>
      </div>
      <div class="maskto" v-if='maskIsShow'>
          <h1 @click='toLogin'>去登陆</h1>
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
            maskIsShow:true,
            name:'name'
      }
    },
    components: {

    },
    methods:{
      toLogin(){
        this.$router.push('/loginRoot')
      },
      logout(){
        if(confirm("确定要退出吗？")){
            localStorage.clear();
            this.$router.replace('/loginRoot')
        }

      }
    },
    mounted(){
      if(localStorage.getItem('username')){
        this.maskIsShow=false;

        this.name=JSON.parse(localStorage.getItem('username'))
      }
    }
  }
</script>

<style lang='stylus'>
.personal
  width 100%
  background #eee
  .maskto
    position fixed 
    left 0
    top 0
    z-index 999
    width 100%
    height 92%
    background rgba(0,0,0,0.7)
    h1
      display block
      text-align center
      color red
      margin-top 500px
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
        display flex
        justify-content center
        &>img 
          width 44px
          height 44px
        .bImg
          width 63.984px
          height 63.984px
          background url('../../static/image/jlt.webp')no-repeat 0 -200px
          background-size 100%
          margin-left 40px
      .rightBottom
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        position relative
        width 203px
        height 84px
        background-image linear-gradient(to bottom,#574e44 0,#0e0e0e 100%)
        border-radius 40px 0 0 40px
        margin-top 30px
        margin-bottom -30px
        &>span 
          position absolute 
          width 56px
          height 56px
          left 6px
          top 50%
          margin-top -28px
          background url('../../static/image/jlt.webp')no-repeat 0 -64px rgba(0,0,0,0.8)
          background-size 100%
          border-radius 50%
        &>div
          display flex
          color #F9E0C0
          margin-left 70px
          align-items center
          white-space nowrap
          &>div
            width 36px
            height 36px
            background url('../../static/image/jlt.webp') no-repeat 0 -60px
            transform  scale(0.5)
            display flex
            margin-top 9px
  .personalNavTopWrap
    width 720px 
    height 104px
    padding-left 30px
    background white
    
    font-size 28px
    line-height 104px
    .personalNavTop
      width 100%
      height 100%
      box-sizing border-box
      border-bottom 1Px solid red
  .personalNavBottom
    width 750px
    height 159.984px
    background white
    overflow hidden
    display flex
    justify-content space-around
    .bottomItem
      padding 40px
      display flex
      flex-direction column
      justify-content center
      align-items center 
  .personalContent
    display flex
    flex-wrap wrap
    justify-content flex-start
    width 100%
    margin-top 20px
    .contentItem
      width 33%
      box-sizing border-box
      margin 0 2px 2px 0
      display flex
      flex-direction column
      justify-content center
      align-items center 
      padding 60px 0
      background white
      &>div
        white-space nowrap
        font-size 28px
      .iconfont
        width 50px
        height 50px
        font-size 50px
        margin-bottom 4px
  .persnalFooter
    width 100%
    height 94px
    margin-top 40px
    padding-bottom 120px
    text-align center
    line-height 94px
    font-size 32px
    .text
      width 100%
      height 100%
      background white
</style>
