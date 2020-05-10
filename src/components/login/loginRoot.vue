<template>
<div class="login">
    <div class="loginHeader">
        <span class='iconfont icon-home' style='font-size:32px' @click='goHome'></span>
        <span>值得买</span>
        <div class="right">
          <span class='iconfont icon-fangdajing' style='font-size:32px;margin-right:20px' @click='goSearch'></span>
          <span class='iconfont icon-gouwuche' style='font-size:32px' @click='goCar'></span>
        </div>
    </div>
    <div class="title">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="up">
        <div class="upTop">
            <span class='iconfont icon-shouji' style='width:20px;height:30px;line-height:30px'></span>
            <span @click='goToLogin(1)'>手机号快捷的登录</span>
        </div>
        <div class="upBottom">
            <span class='iconfont icon-xin' style='width:20px;height:30px;line-height:30px'></span>
            <span @click='goToLogin(2)'>邮箱账号登录</span>
        </div>
    </div>
    <div class="loginMethods">
        <div class="methodsItem">
            <span class='iconfont icon-weixin'></span>
            <span>微信</span>
        </div>
         <div class="methodsItem">
            <span class='iconfont icon-qq'></span>
            <span>QQ</span>
        </div>
         <div class="methodsItem">
            <span class='iconfont icon-iconfontweibowukuang-copy'></span>
            <span>微博</span>
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
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
      ]
    },
    data () {
      return {

      }
    },
    components: {

    },
    methods:{
        goSearch(){
            this.$router.push('/search')
        },
        goCar(){
            this.$router.push('/car')
        },
        goHome(){
            this.$router.push('/index')
        },
        goToLogin(index){
            this.$router.push(`/login/${index}`)
        }
    }
  }
</script>

<style lang='stylus'>
    .login
        width 100%
        height 100%
        .loginHeader
            background white
            width 100%
            box-sizing border-box
            height 100px
            padding 0 26px 0 24px
            font-size 32px
            display flex
            align-items center
            justify-content space-between
        .title
            width 750px
            height 90px
            padding 160px 0 232px 0
            img 
                width 268px
                height 90px
                display block
                margin 0 auto
        .up
            width 670px
            height 220px
            padding 0 40px
            margin-bottom 206px
            font-size 30px
            .upTop
                width 100%
                height 94px
                margin-bottom 32px
                background #DD1A21
                display flex
                justify-content center
                align-items center
                color white
            .upBottom
                width 100%
                height 94px
                margin-bottom 32px
                display flex
                justify-content center
                align-items center
                color #DD1A21
                border 1Px solid #DD1A21
        .loginMethods
            margin-top 440px
            width 100%
            display flex
            justify-content center
            align-items center
            height 40px
            padding-bottom 50px
            .methodsItem
                color #979797
                font-size 40px
                text-align center
                .iconfont
                    width 40px
                    height 40px
                    font-size 40px
                    margin-left 20px
                    margin-right 8px
                &>span:nth-of-type(2)
                    margin-right 20px
                &:nth-of-type(2)
                    border-left 1px solid #979797
                    border-right 1px solid #979797
</style>