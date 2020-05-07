<template>
  <div id="index">
      <div class="xyTop">
        <div class="header">
            <a href="##"><img src="../../static/image/wyyx.png" alt=""></a>
            <div class="search">
              <div class="fdj">

              </div>
              <span>搜索商品，共26220款好物</span>
            </div>
            <div class="login">登录</div>
        </div>
        <div class="headerTagWarp">
          <div class='headerTag' v-if='data.kingKongModule'>
            <div class='headerTagItem' :class='currentIndex===0?"active flag0":""' @click='watchActive(0)'>推荐</div>
            <div class='headerTagItem' v-for='(item,index) in data.kingKongModule.kingKongList' :key='index' :class='currentIndex===index+1?`active ${"flag"+(index+1)}`:""' @click='watchActive(index+1)'>{{item.text}}</div>
          </div>
          <div class="tagMask">
              <div class="left">

              </div>
              <div class="right">
                <div class="jiantou" :class='jiantou?"active":""' @click='ChangeJiantou'></div>
              </div>
            </div>
        </div>

        <!-- 全部频道遮罩 -->
        <div class="mask" v-if='jiantou'>
            <div class="maskTop">
              全部频道
            </div>
            <div class="maskBottom">
              <div class='maskBottomItem' :class='currentIndex===0?"active flag0":""' @click='watchActive(0)'>推荐</div>
              <div class="maskBottomItem " v-for='(item,index) in data.kingKongModule.kingKongList' :key='index' :class='currentIndex===index+1?`active ${"flag"+(index+1)}`:""' @click='watchActive(index+1)'>
                  {{item.text}}
              </div>
            </div>
        </div>
      </div>
      <div class="main">
        <!-- <div class="mainScroll"> -->
          <!-- 轮播图 -->
            <van-swipe class="swiper" :autoplay="3000" indicator-color="white" >
              <van-swipe-item class='swiperItem' v-for='(item,index) in data.focusList' :key='index'> 
                <img :src="item.picUrl">
              </van-swipe-item>
            </van-swipe>
            <div class="logo">
                <div class="logoDesc" v-for='(item,index) in data.policyDescList' :key='index'>
                  <img :src="item.icon" alt="">
                  <span>{{item.desc}}</span>
                </div>
            </div>
            <div class="creaditShop" v-if='data.kingKongModule'>
                <div class="shopItem" v-for='(item,index) in data.kingKongModule.kingKongList' :key='index'>
                  <img :src="item.picUrl" alt="">
                  <span>{{item.text}}</span>
                </div>
            </div>
            <div class="shopAdv">
            </div>
            <div class="newGift">
                <div class="newGiftHeader">
                  新人专享礼
                </div>
                <div class="newGiftCoent">
                  <div class="newGiftLeft">
                      <span>新人专享礼包</span>
                      <img src="../../static/image/15元.png" alt="">
                  </div>
                  <div class="newGiftRight">
                    <div class="newGiftRightTop">
                        <h2>福利社</h2>
                        <h4>今日特价</h4>
                        <div class="money">
                          <span>￥89</span>
                          <span  style='text-decoration:line-through'>￥99</span>
                        </div>
                        <img src="../../static/image/抽纸.webp" alt="">
                    </div>
                    <div class="newGiftRightBottom">
                        <h2>新人拼团</h2>
                        <h4>1元起包邮</h4>
                        <div class="money">
                          <span>￥2.9</span>
                          <span  style='text-decoration:line-through'>￥13.9</span>
                        </div>
                        <img src="../../static/image/洗发露.webp" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="hotSell">
              <div class="hotSellHeader">
                类目热销榜
              </div>
              <div class="hotSellContent">
                  <div class="oneShop">
                    
                  </div>
              </div>
            </div>
            <!-- <v-shopItem></v-shopItem> -->
        <!-- </div> -->
      </div>
  </div>
</template>

<script >
  import BScroll from 'better-scroll'
  import Vue from 'vue';
  import shopItem from './shopItem'
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  export default {
    data () {
      return {
            data:{},
            currentIndex:0,
            jiantou:false,
      }
    },
    components: {
      "v-shopItem":shopItem
    },
    async mounted(){
      let resulte =await this.$http.index.getindex();
      this.data=resulte;
      // this.initScroll()
      this.$nextTick(()=>{
        this.initScroll()
      })
    },
    methods:{
      initScroll(){
        this.scrollObj=new BScroll('.headerTagWarp',{
          scrollX:true,
          click:true,
        })
        // this.mainScrollObj=new BScroll('.mainScrollWarp',{
        //   scrollY:true,
        //   click:true,
        // })
        
      },
      watchActive(index){
          this.currentIndex=index;
          setTimeout(()=>{
            // console.log(document.querySelector('#index .headerTagWarp .headerTag >.flag1'))
             this.scrollObj.scrollToElement(`${".flag"+(index)}`, 300)
          },0)
          
          // console.log(`${".flag"+(index)}`)
         
          
      },
      ChangeJiantou(){
        this.jiantou=!this.jiantou
      }
    },

  }
</script>

<style lang='stylus'>
#index
  margin 0
  padding 0
  position relative
  overflow hidden
  .xyTop
    background white
    width 100%
    position fixed
    z-index 10
    left 0 
    top 0
    .header
      width 100%
      height 87.97px
      box-sizing border-box
      padding 16px 30px
      display flex
      align-items center
      &>a
        width 138px
        height 39.98px
        margin-right 20px
        &>img 
          width 100%
          height 100%
      .search
        flex 1
        height 100%
        background #ededed
        line-height 56px
        text-align center
        color #666
        border-radius 10px
        display flex
        justify-content center
        align-items center
        .fdj
          width 27.984px
          height 27.984px
          background url('../../static/image/fdj.png') no-repeat;
          background-size 100%
          margin-right 10px
      .login
        width 72px
        height 37.984px
        line-height 37.984px
        text-align center
        margin-left 16px
        border 1Px solid red 
        color red
        border-radius 10px
    .headerTagWarp
      width 100%
      height 60px
      line-height 60px
      position relative
      .headerTag
        display inline-block
        white-space nowrap
        height 100%
        padding 0 30px
        .headerTagItem
          padding 0 16px
          color #333
          font-size 28px
          box-sizing border-box
          position relative
          margin 0 8px
          display inline-block
          &.active
            &::after
              content ''
              position absolute 
              left 0
              bottom 0
              width 100%
              height 3.98px
              background red
      .tagMask
        position absolute 
        top 0
        right 0
        width 159.98px
        height 60px
        z-index 10
        display flex
        .left
          width 60px
          height 60px
          background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 50%,#fff 100%);
          // background white
        .right 
          width 99.98px
          height 60px
          background:white
          .jiantou
            width 30px
            height 30px
            background url('../../static/image/jiantou1.png') no-repeat white
            background-size 100%
            margin 0 auto
            margin-top 15px
            transition all 1s
            &.active
              transform rotate(180deg)
    .mask
      position absolute 
      left 0
      top 87.97px
      width 100%
      height calc(100vh - 87.97px)
      z-index 9
      background rgba(0,0,0,0.3)
      .maskTop
        width 100%
        height 60px
        background white
        padding-left 30px
        line-height 60px
        font-size 28px
      .maskBottom
        width 100%
        height 287.953px
        padding-top 24px
        background white
        display flex
        flex-wrap wrap
        .maskBottomItem
          width 148px
          height 54px
          line-height 54px
          text-align center
          border 1Px solid black
          margin 0 0 40px 30px 
          &.active
            border 1Px solid red
  .main
    width 100%
    margin-top 147.97px
    margin-bottom 98px
    // height calc( 100vh - 245.97px )
    // overflow hidden
    // .mainScroll
    //   width 100%
    .swiper
        white-space nowrap
        width 100%
        height 296px
        .swiperItem
          width 100%
          height 100%
          &>img
            width 100%
            height 100%
        .van-swipe__indicator
          width 39.98px
          height 3.98px
    .logo
      width 100%
      height 72px
      padding 0 30px
      box-sizing border-box
      display flex
      justify-content space-evenly
      background white
      .logoDesc
        display flex
        justify-content center
        align-items center
        &>img 
          width 32px
          height 32px
        &>span 
          font-size 24px
    .creaditShop
      width 100%
      height 340.969px
      display flex
      flex-wrap wrap
      background white
      .shopItem
          width 110px
          height 156px
          margin 10px 20px 9px 20px
          display flex
          flex-direction column
          align-items center
          justify-content center
          &>img 
            width 110px
            height 110px
    .shopAdv
      width 100%
      height 240px
      background url('https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif') no-repeat 
      background-size 100%
    .newGift
      width 100%
      height 557.969px
      padding-bottom 20px
      margin 20px 0 0;
      background #eee;
      .newGiftHeader
        width 690px
        height 90px 
        padding 0 30px
        line-height 90px
        text-align center
        font-size 32px
        background white
        &::before
          content ''
          width 40px
          height 4px
          display inline-block
          background black
          transform translateY(-10px)
        &::after
          content ''
          width 40px
          height 4px
          display inline-block
          background black
          transform translateY(-10px)
      .newGiftCoent
        background white
        width 100%
        height 467.969px
        padding-left 30px
        .newGiftLeft
          width 342.984px
          height 434px
          margin-right 4px
          background #f9e9cf
          float left
          &>span 
            display block
            width 312.984px
            height 48px
            padding 30px 0 0 30px
            font-size 32px
          &>img 
            width 258px
            height 257px
            display block
            margin 40px auto 0
        .newGiftRight
          wdith 342.984px
          height 437.969px
          float left
          .newGiftRightTop
            position relative
            width 342.984px
            box-sizing border-box
            height 215px
            margin-bottom 4px
            margin-right 4px
            padding 20px 0 0 30px
            background #fbe2d3
            &>h2 ,h4
              margin 0
            &>img 
              width 200px
              height 200px
              position absolute 
              right 8px
              bottom 8px
            .money
              width 80px
              height 80px
              border-radius 50%
              background #F59524 
              text-align center
              display flex
              flex-direction column
              align-items center
              justify-content center
              position absolute
              right 20px
              top 20px
          .newGiftRightBottom
            position relative
            box-sizing border-box
            width 342.984px
            height 215px
            margin-bottom 4px
            margin-right 4px
            padding 20px 0 0 30px
            background #fbe2d3
            &>h2 ,h4
              margin 0
            h4
              background rgba(0,0,0,0.3)
              color white
              font-size 24px
              display inline
            &>img 
              width 200px
              height 200px
              position absolute 
              right 8px
              bottom 8px
            .money
              width 80px
              height 80px
              border-radius 50%
              background #F59524 
              text-align center
              display flex
              flex-direction column
              align-items center
              justify-content center
              position absolute
              right 20px
              top 20px
              z-index 9

    .hotSell
      width 100%
      height 709.938px
      margin-bottom 20px
      .hotSellHeader
        padding 0 30px
        width 690px
        height 99.984px
        font-size 32px
        line-height 99.984px
      .hotSellContent
        width 700px
        height 589.953
        padding 0 20px 20px 30px
</style>