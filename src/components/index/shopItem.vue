<template>
  <div id='shopItem' v-if='bannerList.category'>
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for='(item,index) in bannerList.category.bannerUrlList' :key='index'> <img :src="item" alt=""></van-swipe-item>
      </van-swipe>
      <div class="shopItemWrap" >
        <div class="shopItem" v-for='(item,index) in datas.subCateList.slice(0,5)' :key='index'>
          <div class="shopItemHeader">
            <h2>{{item.name}}</h2>
            <span>{{item.frontName}}</span>
          </div>
          <div class="shopItemContent">
            <div class="shopItemContentItem" v-for='(item,index) in bannerList.itemList' :key='index'>
                <img :src="item.listPicUrl" alt="" style='wdith:345px;height:345px;'>
                <span>{{item.name+item.simpleDesc}}</span>
                <span style='color:red;'></span>
                <span>限时购</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script >
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  export default {
    data () {
      return {
          datas:{},
          bannerList:[]
      }
    },
    components: {

    },
   async  mounted(){
      let resulte =await this.$http.index.getIndexCateModuleData();
      console.log(resulte)
      this.datas=resulte[this.index-1]
      let resulte2 =await this.$http.index.getIndexCateBannerList();
      console.log(resulte2)
      this.bannerList=resulte2[this.index-1]
    },
    props:{
      index:Number
    }
  }
</script>

<style lang='stylus'>
  #shopItem
    width 100%
    .swipe
      width 100%
      height 296px
      margin-bottom 20px
      .van-swipe__indicator
          width 39.98px
          height 3.98px
      van-swipe-item
        wdith 100%
        height 1005
        &>img 
          width 100%
          height 100%
    .shopItemWrap
      wdith 750px
      .shopItem
        wdith 750px
        height 6033.170px
        margin-bottom 20px
        background white
        .shopItemHeader
          height 120px
          display flex
          flex-direction column
          justify-content center
          align-items center
          &>h2
            margin 0
            font-weight normal
          &>span 
            color #999
            margin-top 6px
        .shopItemContent
          width 100%
          display flex
          flex-wrap wrap
          .shopItemContentItem
            width 345px
            // height 492.828px
            padding 0 10px 33px 20px
            display flex
            flex-direction column
            align-items flex-start
</style>