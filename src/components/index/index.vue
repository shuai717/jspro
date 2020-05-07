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
                      <span>热销榜</span>
                      <img src="../../static/image/1.webp" alt="">
                  </div>
                   <div class="oneShop">
                      <span>好评榜</span>
                      <img src="../../static/image/2.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>居家生活榜</span>
                      <img src="../../static/image/3.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>美食酒水榜</span>
                      <img src="../../static/image/4.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>个户清洁榜</span>
                      <img src="../../static/image/5.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>服饰鞋包榜</span>
                      <img src="../../static/image/6.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>数码家电榜</span>
                      <img src="../../static/image/7.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>严选全球榜</span>
                      <img src="../../static/image/8.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>母婴亲子榜</span>
                      <img src="../../static/image/9.webp" alt="">
                  </div>
                  <div class="twoShop">
                      <span>运动旅行榜</span>
                      <img src="../../static/image/10.webp" alt="">
                  </div>
              </div>
            </div>
            <div class="popularity">
                <div class="popularityheader">
                  <span>人气推荐</span>
                  <span>更多<span class='iconfont icon-arrow-right'></span></span>
                </div>
                <div class="popularityTopWrap">
                  <div class="popularityTop">
                    <img src="../../static/image/11.webp" alt="">
                    <div class="popularityTopRight">
                      <div class="popularityTopRightOne">
                       <span> 母亲节特惠</span>
                      </div>
                      <div class="popularityTopRightTwo">
                        <span>15分钟快速救脸，射频多1111111</span>
                      </div>
                      <div class="popularityTopRightThree">
                        <span>掌心里的美容院</span>
                      </div>
                      <div class="popularityTopRightFour">
                        <span>￥759</span>
                      </div>
                    </div>
                  </div>
                </div >
                <div class="popularityBottom">
                    <div class="popularityBottomItem">
                        <img src="../../static/image/12.webp" alt="">
                        <span>每一口都有七种鱼，全价猫粮11111111111111111</span>
                        <h2>￥88</h2>
                        <div>换购</div>
                    </div>
                    <div class="popularityBottomItem">
                        <img src="../../static/image/13.webp" alt="">
                        <span>[浙江专供]一次性日常防护口罩11111111111111111</span>
                        <h2>￥16</h2>
                        
                    </div>
                    <div class="popularityBottomItem">
                        <img src="../../static/image/15.webp" alt="">
                        <span>远优于欧盟标准，纯牛奶211111111111111111</span>
                        <h2>￥88</h2>
                        <div>换购</div>
                    </div>
                </div>
            </div>
            <div class="timeLimit">
              <div class="timeLimitHeader">
                 <span>限时购</span>
                  <span>更多<span class='iconfont icon-arrow-right'></span></span>
              </div>
              <div class="timeLimitCon">
                  <div class="timeLimitConItem">
                    <img src="../../static/image/101.webp" alt="">
                    <span style='color :red;font-size:28px'>￥279</span>
                    <span style='text-decoration:line-throuth'> ￥349</span>
                  </div>
                  <div class="timeLimitConItem">
                    <img src="../../static/image/102.webp" alt="">
                    <span style='color :red;font-size:28px'>￥69.9</span>
                    <span style='text-decoration:line-throuth'> ￥79.9</span>
                  </div>
                  <div class="timeLimitConItem">
                    <img src="../../static/image/103.webp" alt="">
                    <span style='color :red;font-size:28px'>￥145</span>
                    <span style='text-decoration:line-throuth'> ￥169</span>
                  </div>
                  <div class="timeLimitConItem">
                    <img src="../../static/image/104.webp" alt="">
                    <span style='color :red;font-size:28px'>￥219</span>
                    <span style='text-decoration:line-throuth'> ￥299</span>
                  </div>
                  <div class="timeLimitConItem">
                    <img src="../../static/image/105.webp" alt="">
                    <span style='color :red;font-size:28px'>￥58.7</span>
                    <span style='text-decoration:line-throuth'> ￥69</span>
                  </div>
                  <div class="timeLimitConItem">
                    <img src="../../static/image/106.webp" alt="">
                    <span style='color :red;font-size:28px'>￥109</span>
                    <span style='text-decoration:line-throuth'> ￥129</span>
                  </div>
              </div>
            </div>  
            <div class="newShop">
              <div class="newShopHeader">
                 <span>新品首发</span>
                  <span>更多<span class='iconfont icon-arrow-right'></span></span>
              </div>
              <div class="newShopBottom">
                    <div class="newShopBottomItem">
                        <img src="../../static/image/23.webp" alt="">
                        <span>儿童一次性3D口罩30只11111111111111111</span>
                        <h2>￥42</h2>
                        <div>新人特价</div>
                    </div>
                    <div class="newShopBottomItem">
                        <img src="../../static/image/24.webp" alt="">
                        <span>高钙高蛋白，蟹酥酥30克11111111111111111</span>
                        <h2>￥19</h2>
                        
                    </div>
                    <div class="newShopBottomItem">
                        <img src="../../static/image/25.webp" alt="">
                        <span>男士吸湿速干运动基础T恤211111111111111111</span>
                        <h2>￥49</h2>
                        
                    </div>
                    <div class="newShopBottomItem">
                        <img src="../../static/image/26.webp" alt="">
                        <span>填过初恋的“荔”量，荔枝红茶12袋211111111111111111</span>
                        <h2>￥39</h2>
                    </div>
                    <div class="newShopBottomItem">
                        <img src="../../static/image/27.webp" alt="">
                        <span>一滴消除尴尬气味日本一滴消臭元211111111111111111</span>
                        <h2>￥25</h2>
                        
                    </div>
                    <div class="newShopBottomItem">
                        <img src="../../static/image/107.webp" alt="">
                        <span>遇水发泡全自动清洁日本马桶清洁泡腾211111111111111111</span>
                        <h2>￥10.9</h2>
                        <div>新品尝鲜价</div>
                    </div>
                </div>
            </div>
            <div class="lastShopWrap">
              <div class="lastShop">
                   <div class="lastShopItem">
                  <h1>严选超市</h1>
                  <h3>10元凑好物</h3>
                  <img src="../../static/image/28.webp" alt="">
                  <img src="../../static/image/29.webp" alt="">
              </div>
              <div class="lastShopItem">
                  <h1>口罩购买</h1>
                  <h3>保供1.4/只</h3>
                  <img src="../../static/image/30.webp" alt="">
                  <img src="../../static/image/31.webp" alt="">
              </div>
              <div class="lastShopItem">
                  <h1>员工精选</h1>
                  <h3>天天内部价</h3>
                  <img src="../../static/image/32.webp" alt="">
                  <img src="../../static/image/33.webp" alt="">
              </div>
              <div class="lastShopItem">
                  <h1>回购榜单</h1>
                  <h3>口碑起值价</h3>
                  <img src="../../static/image/34.webp" alt="">
                  <img src="../../static/image/35.webp" alt="">
              </div>
              </div>
            </div>
            <div class="bottom">
                <div class="top">
                    <div class="downLoad">
                      下载APP
                    </div>
                    <div class="window">
                      电脑版
                    </div>
                </div>
                <div class="bottomMin">
                  <div class="bottom1">
                    张景帅版权所有<span class='iconfont icon-banquan'></span>1997-2060
                  </div>
                  <div class="bottom2">
                    食品经营许可证：JS0717520154425
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
      padding-bottom 20px
      background #eee
      .hotSellHeader
        padding 0 30px
        width 690px
        height 99.984px
        font-size 32px
        line-height 99.984px
        background white
      .hotSellContent
        background white
        display flex
        flex-wrap wrap
        width 700px
        height 589.953
        padding 0 20px 20px 30px
        .oneShop
          flex-shrink 0
          width 339.984px
          height 200px
          margin 0 10px 10px 0px
          background #F9F3E4
          d
          &>img 
            width 200px
            height 200px
            float right
            line-height 200px
          &>span 
            margin-left 24px
            float left
            display block
            margin-top 79px
            transform translateY(-50%)
            font-size 32px
            position relative
            &::after
              width 80px
              height 6px
              nackground black
              content ''
              position absolute
              left 0
              bottom -10px
              background black
        .twoShop
          flex-shrink 0
          width 165px
          height 180px
          margin 0 10px 10px 0
          background #f5f5f5
          display flex
          flex-direction column
          justify-content center
          align-items center
          &>img
            width 120px
            height 120px
    .popularity
      width 750px
      height 797.938px
      padding-bottom 20px
      background #eee
      .popularityheader
        background white
        width 690px
        height 99.984px
        padding 0 30px
        display flex
        justify-content space-between
        align-items center
        &>span:nth-of-type(1)
          font-size 32px
        &>span:nth-of-type(2)
          font-size 28px
      .popularityTopWrap
        background white
        width 690px
        margin 0 0px 00px 0px
        padding 0 30px 20px
        .popularityTop
          background white
          height279.984px
          background #FEF0DF
          display flex
          justify-content flex-start
          align-items center
          &>img
            width 279.984px
            height 279.984px
          .popularityTopRight
            display flex
            flex-direction column
            justify-content center
            .popularityTopRightOne
              margin-bottom 5px
              &>span
                display block
                text-align center
                width 150px
                padding 4px
                border 1Px solid red
                border-radius 20px
                color red
                background white
                font-size 28px
            .popularityTopRightTwo
              &>span 
                display block
                white-space nowrap
                width 230px
                text-overflow ellipsis
                overflow hidden
                font-size 28px
            .popularityTopRightThree
              color #7F7F7F
            .popularityTopRightFour
              color red
      .popularityBottom
        background white
        display flex
        width 740px
        height 397.969px
        padding-left 10px
        .popularityBottomItem
          width 216px
          height 384.969px
          padding-bottom 13px
          margin-left 20px
          display flex 
          flex-direction column
          justify-content flex-start
          &>img
            width 216px
            height 216px
            background #eee
          &>span
            display block
            width 216px
            white-space pre-wrap
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          &>h2
            color red
            margin 0
          &>div
            display inline
            border 1Px solid red
            color red
            width 60px
            text-align center
            border-radius 10px
    .timeLimit
      width 100%
      height 699.984px
      padding-bottom 20px
      background #eee
      .timeLimitHeader
        background white
        width 690px
        height 99.984px
        padding 0 30px
        display flex
        justify-content space-between
        align-items center
        &>span:nth-of-type(1)
          font-size 32px
        &>span:nth-of-type(2)
          font-size 28px
      .timeLimitCon
        wdith 710px
        height 600px
        padding 0 10px 0 30px
        background white
        display flex
        flex-wrap wrap
        .timeLimitConItem
          flex-shrink 0
          width 216px
          height 270px
          padding-bottom 30px
          text-align center
          margin-right 20px
          &>img
            width 216px
            height 216px
            background #eee
    .newShop
      width 750px
      height 921.922px
      padding-bottom 20px
      background #eee
      .newShopHeader
        background white
        width 690px
        height 99.984px
        padding 0 30px
        display flex
        justify-content space-between
        align-items center
        &>span:nth-of-type(1)
          font-size 32px
        &>span:nth-of-type(2)
          font-size 28px
      .newShopBottom
        width 740px
        height 825.938px
        padding-left 10px
        background white
        display flex
        background white
        flex-wrap wrap
        .newShopBottomItem
          width 216px
          height 384.969px
          padding-bottom 13px
          margin-left 20px
          display flex 
          flex-direction column
          justify-content flex-start
          &>img
            width 216px
            height 216px
            background #eee
          &>span
            display block
            width 216px
            white-space pre-wrap
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          &>h2
            color red
            margin 0
          &>div
            display inline
            border 1Px solid red
            color red
            width 160px
            text-align center
            border-radius 10px
    .lastShopWrap
      background #eee
      padding-bottom 20px
      .lastShop
        width 694px
        height 565.953px
        padding 10px 30px 20px 26px
        background white
        display flex
        flex-wrap wrap
        .lastShopItem
          // display flex
          // flex-direction column
          // justify-content flex-start
          width 322.984px
          height 244px
          padding 20px 0 0 20px
          margin 4px 0 0 4px
          background #eee
          &>img
            width 150px
            height 150px
            margin-left 4px
          h1,h3
            margin 0
          h3
            color #333
    .bottom
      width 710px
      height 161.984px
      padding 54px 20px 28px 20px
      background #333
      .top
        display flex
        justify-content center
        margin-bottom 20px
        .downLoad
          text-align center
          line-height 50px
          height 50px
          border 1Px solid white
          color white
          padding 0px 20px
          margin-right 50px
        .window
          text-align center
          line-height 50px
          height 50px
          border 1Px solid white
          color white
          padding 0px 20px
      .bottomMin
        color #999
        display flex
        flex-direction column
        align-items center
        justify-content center
</style>