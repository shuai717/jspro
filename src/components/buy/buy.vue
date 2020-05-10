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
      <div class="scrollwrap" ref='scroll'>
        <div class="scroll">
          <div class="nav">
                <div class="backg">
                  <div class="text">
                      <span style='font-size:32px'>值得买</span><span style='font-size:16px'>严选好物</span><span style='font-size:16px'>用心生活</span>
                  </div>
                  <div class="swipeWrap" v-if="navList.length!=0">
                    <van-swipe class="swipe"  indicator-color="blue" :width='90' :loop='false' ref='swipe'>
                        <van-swipe-item  v-for="(item,index) in navList.slice(0,Math.ceil(navList.length/2))" :key='index'>
                            <div class="item" >
                                <div class="itemtop">
                                    <img :src="item.picUrl" alt="">
                                    <span style='color :#999;font-size:12px'>{{item.mainTitle}}</span>
                                    <span style='color :#999;font-size:12px'>{{item.viceTitle}}</span>
                                </div>
                                <div class="itembottom" v-if='navList[index+Math.ceil(navList.length/2)]'>
                                    <img :src="navList[index+Math.ceil(navList.length/2)].picUrl" alt="">
                                    <span style='color :#999;font-size:12px'>{{navList[index+Math.ceil(navList.length/2)].mainTitle}}</span>
                                    <span style='color :#999;font-size:12px'>{{navList[index+Math.ceil(navList.length/2)].mainTitle}}</span>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                  </div>
                </div>
            </div>
            <!-- 瀑布流 -->
            <div class="waterfall" ref='waterfall'>
                  <div class="masonry">
                    
                    <div class="column" v-for='(item,index) in waterfallList' :key='index' v-show="index%2===0" >
                                <div v-lazy-container="{ selector: 'img' }">
                                      <img :data-src="item.topics[0].newAppBanner?item.topics[0].newAppBanner:item.topics[0].picUrl" alt="" style='width:100%' >
                                      <div style='background:white;width:100%;font-size:12px;padding:18px 16px 0;
                                      font-size:14px;box-sizing:border-box'>{{item.topics[0].title}}</div>
                                      <div style='background:white;width:100%;display:flex;justify-content:space-around;align-items:center;margin:8px 0 '>
                                        <div style='display:flex;align-items:center;margin-left:1px;justify-content:flex-start'>
                                          <img :data-src="item.topics[0].avatar" alt="" style='width:24px;height:24px;border-radius:50%;margin-right :4px;margin-left:-10px'>
                                          <span style='font-size:12px'>{{item.topics[0].nickname}}</span>
                                        </div>
                                        <span style='font-size:12px'>{{parseInt(item.topics[0].readCount/1000)}}K</span>
                                      </div>
                                </div>
                    </div>
                    
                </div>
                <div class="masonry">
                    <div class="column" v-for='(item,index) in waterfallList' :key='index' v-show='index%2' >
                              <div v-lazy-container="{ selector: 'img' }">
                                      <img :data-src="item.topics[0].newAppBanner?item.topics[0].newAppBanner:item.topics[0].picUrl" alt="" style='width:100%' >
                                      <div style='background:white;width:100%;font-size:12px;padding:18px 16px 0;
                                      font-size:14px;box-sizing:border-box'>{{item.topics[0].title}}</div>
                                      <div style='background:white;width:100%;display:flex;justify-content:space-around;align-items:center;margin:8px 0 '>
                                        <div style='display:flex;align-items:center;margin-left:1px;justify-content:flex-start'>
                                          <img :data-src="item.topics[0].avatar" alt="" style='width:24px;height:24px;border-radius:50%;margin-right :4px;margin-left:-10px'>
                                          <span style='font-size:12px'>{{item.topics[0].nickname}}</span>
                                        </div>
                                        <span style='font-size:12px'>{{parseInt(item.topics[0].readCount/1000)}}K</span>
                                      </div>
                                </div>
                    </div>
                </div>        
            </div>
        </div>
        <span class='bottomFlag'>到底了正在加载中</span>
      </div>
  </div>
</template>

<script >
  import Vue from 'vue'
  import Meta from 'vue-meta'
  import { Swipe, SwipeItem } from 'vant';
 
  import { Lazyload } from 'vant';
  Vue.use(Lazyload, {
    lazyComponent: true,
  });
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
            waterfallList:[],
            page:1,
            size:5
      }
    },
    components: {
        
    },
   async mounted(){
      let resulte=await this.$http.buy.getNav();

      const {code,data}=resulte
      if(code==='200'){
        this.navList=data.navList
      }

      let resulte2=await this.$http.buy.getWaterfall()

      this.waterfallList=resulte2.data

      let resulte3=await this.$http.buy.getNewData({page:1,size:5})
      this.page++
      this.waterfallList.push(...resulte3.data.result)
      this.$nextTick(()=>{
        setTimeout(() => {
            window.addEventListener('scroll',async ()=>{
            let height=document.documentElement.clientHeight
            if(this.$refs.scroll){
              let nodeHeight=this.$refs.scroll.clientHeight
              let nodeTop=document.documentElement.scrollTop
              let top=nodeHeight-height+90
              if(top<=nodeTop){
                let resulte=await this.$http.buy.getNewData({page:this.page,size:this.size})
                this.page++;
                this.waterfallList.push(...resulte.data.result)
              }
            }
            
      })
        }, 0);
     })
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
  .scrollwrap
    position relative
    .bottomFlag
      position absolute
      left 50%
      bottom 40px
      font-size 32px
      transform translateX(-50%)
    .scroll
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
                  &:nth-of-type(7)
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
        width 100%
        display flex
        margin-top 20px
        margin-bottom 80px
        .masonry 
          width 48%
          display flex
          flex-direction column
          flex-wrap wrap
          margin 6px
          .column
            display flex
            flex-direction column
            width calc(100%)
            background white
            border-radius 20px
            overflow hidden
            margin-bottom 40px
            
</style>