<template>
  <div class="category">
      <div class="header">
          <div class="searchWrap" @click='$router.push("/search")'>
              <span class='iconfont icon-fangdajing'  style='font-size:32px;width:27.984px; height: 27.984px; '></span>
              <span>{{seachInt}}</span>
          </div>
      </div>
      <div class="content" >
            <div class="contentLeft" v-if='categoryLists.length>0'>
                <div class="leftItem" v-for='(item,index) in categoryNavDatas.categoryL1List' :key='index' :class='currentIndex===index?"active":""' @click='changeCurrent(index)'>
                  {{item.name}}
                </div>
            </div>
            <div id="contentRight">
                <div class='contentRightwrap' >
                    <img v-if='categoryLists.length>0' :src="categoryLists[currentIndex].categoryList ? categoryLists[currentIndex].categoryList[0].wapBannerUrl:categoryLists[currentIndex].subCateList[0].wapBannerUrl" alt="" class='topImg'>
                    <div class="contentRightContent" v-if='categoryLists.length>0'>
                        <div class="contentRightContentItem" v-for='(item,index) in categoryLists[currentIndex].categoryList?categoryLists[currentIndex].categoryList:categoryLists[currentIndex].subCateList' :key='index'>
                            <img :src="item.bannerUrl?item.bannerUrl:item.wapBannerUrl" alt="">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script >
  import Vue from 'vue'
  import Meta from 'vue-meta'
  Vue.use(Meta)
  import {mapActions,mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
            categoryLists:[],
            categoryNavDatas:[],
            currentIndex:0
      }
    },
    components: {

    },
    async mounted(){
      let resulte1=await this.$http.category.getCategoryList();
      this.categoryLists=resulte1;
      let resulte2=await this.$http.category.getCategoryNavDatas();
      this.categoryNavDatas=resulte2;
      let resulte3=await this.$http.index.getSearch();
      this.actSetSearchInit(resulte3.data.defaultKeyword.keyword)
      this.$nextTick(()=>{
        this.initBscroll()
      })
    },
    computed:{
        ...mapState(['seachInt'])
    },
    methods:{
      ...mapActions(['actSetSearchInit']),
      changeCurrent(index){
        this.currentIndex=index;
      },
      initBscroll(){
        
          this.BScrollObj=new BScroll('#contentRight',{scrollY:true,click:true})
        
      }
    },
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=0.5,minimum-scale=0.5,maximum-scale=0.5,user-scalable=no' }
      ]
    },
  }
</script>

<style lang='stylus'>
  .category
    width 100%
    height 100%
    background white
    .header
      width 690px
      height 87.984px
      padding 0 30px
      border-bottom 1Px solid #333
      text-align center
      display flex
      align-items center
      .searchWrap
        border-radius 20px
        width 690px
        height 56px
        line-height 56px
        background #eeeeee
        font-size 28px
        color #999
    .content
      display flex
      width 750px
      height calc(100vh - 186.97px)
      .contentLeft
        width 162px
        height calc(100vh - 186.97px)
        padding 40px 0
        border-right 1Px solid red
        &>div:first-of-type
          margin 0
        .leftItem
          position relative
          width 162px
          height 50px
          line-height 50px
          text-align center
          margin-top 40px
          &.active
            &::after
              content ''
              position absolute 
              width 6px
              height 50px
              left 0
              top 0
              background #ab2b2b
      #contentRight
        width 528px 
        height calc(100vh - 237.97px)
        padding 30px 30px 21px
        overflow hidden
        .contentRightwrap
          .topImg
            width 528px
            height 192px
            margin-bottom 32px
          .contentRightContent
            display flex
            flex-wrap wrap
            width 528px
            .contentRightContentItem
              width 144px
              height 216px
              margin-right 20px
              display flex
              flex-direction column
              align-items center
              &>img
                width 144px
                height 144px
</style>