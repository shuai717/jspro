<template>
  <div class='buy'>
      <div class="header">
        <span class='iconfont icon-home' style='font-size:32px'></span>
        <span>值得买</span>
        <div class="right">
          <span class='iconfont icon-fangdajing' style='font-size:32px;margin-right:20px' @click='goSearch'></span>
          <span class='iconfont icon-gouwuche' style='font-size:32px' @click='goCar'></span>
        </div>
      </div>
      <div class="nav">
          <div class="backg">
            <div class="text">
                <span style='font-size:32px'>值得买</span><span style='font-size:16px'>严选好物</span><span style='font-size:16px'>用心生活</span>
            </div>
            <div class="swipeWrap" v-if="navList.length!=0">
              <van-swipe class="swipe"  indicator-color="blue" :width='90' :loop='false'>
                  <van-swipe-item  v-for="(item,index) in navList.slice(0,7)" :key='index'>
                      <div class="item" >
                          <div class="itemtop">
                              <img :src="item.picUrl" alt="">
                              <span style='color :#999;font-size:12px'>{{item.mainTitle}}</span>
                              <span style='color :#999;font-size:12px'>{{item.viceTitle}}</span>
                          </div>
                          <div class="itembottom">
                              <img :src="navList[index+7].picUrl" alt="">
                              <span style='color :#999;font-size:12px'>{{navList[index+7].mainTitle}}</span>
                              <span style='color :#999;font-size:12px'>{{navList[index+7].mainTitle}}</span>
                          </div>
                      </div>
                  </van-swipe-item>
                  
              </van-swipe>
            </div>
          </div>
      </div>
      <!-- 瀑布流 -->
      <div class="waterfall">

                <div v-for='(item,index) in waterfallList' :key='index' style='width:33%'>
                    <img :src="item.topics[0].picUrl" alt="" style='width:100%'>
                    <div style='background:white;width:100%;font-size:12px'>{{item.topics[0].title}}</div>
                    <div style='background:white;width:100%'>
                      <img :src="item.topics[0].avatar" alt="" style='width:24px;height:24px'>
                      <span style='font-size:12px'>{{item.topics[0].nickname}}</span>
                      <span style='font-size:12px'>{{item.topics[0].readCount/1000}}K</span>
                    </div>
                </div>
                 
      </div>
  </div>
</template>

<script >
  import Vue from 'vue'
  import Meta from 'vue-meta'
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe);
  Vue.use(SwipeItem);
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
            navList:[],
            waterfallList:[]
      }
    },
    components: {
        
    },
   async mounted(){
      let resulte=await this.$http.buy.getNav();
      console.log(resulte)
      const {code,data}=resulte
      if(code==='200'){
        this.navList=data.navList
      }

      let resulte2=await this.$http.buy.getWaterfall()
      console.log(resulte2)
      this.waterfallList=resulte2.data
    },
    methods:{
      goSearch(){
        this.$router.push('/search')
      },
      goCar(){
        this.$router.push('/shopcar')
      }
    }
  }
</script>

<style lang='stylus'>
.buy
  width 100%
  height 100%
  // overflow hidden
  .header
    position fixed
    left 0
    top 0
    z-index 10
    background white
    width 100%
    box-sizing border-box
    height 100px
    padding 0 26px 0 24px
    font-size 32px
    display flex
    align-items center
    justify-content space-between
  .nav
    width 100%
    margin-top 100px
    overflow hidden
    .backg
      color white
      width 100%
      background url('../../static/image/201.png') no-repeat
      background-size 100%
      overflow hidden
      .text
        margin-left 10px
        margin-top 30px
        margin-bottom 20px
      .swipeWrap
        width 710px
        height 540px
        margin 0 20px
        background white
        border-radius 20px
        display flex
        .swipe
          width 100%
          .van-swipe__indicator
              width 30px
              height 4px
              background red
              &:last-of-type
                display none 
              &:nth-of-type(6)
                display none
          .van-swipe__track
            // display inline-block
            
            .van-swipe-item
                // width 168px !important
                &:last-of-type
                  width 920px !important
                .item
                  flex-shrink 0
                  width 168px
                  height 428px
                  padding 36px 6px 6px 6px 
                  .itemtop
                      display flex
                      flex-direction column
                      justify-content center
                      align-items center
                      width 168px
                      height 200.1px
                      &>img 
                        width 120px
                        height 120px
                    .itembottom
                      display flex
                      flex-direction column
                      justify-content center
                      align-items center
                      width 168px
                      height 200.1px
                      margin-top 28px
                      &>img 
                        width 120px
                        height 120px
  .waterfall
    display flex
    flex-wrap wrap
</style>