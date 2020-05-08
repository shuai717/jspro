<template>
<div id="search">
    <div class="header">
        <div class="content" v-if='searchDatas.defaultKeyword'>
            <p></p>
            <input type="text" :placeholder="searchDatas.defaultKeyword.keyword" v-model='histroyDatas' @input="changeValue">
        </div>
        <span @click='back'>取消</span>
    </div>
    <div class="histroy" v-if='his.length>0'>
        <div class="histroyHeader">
            <span>历史记录</span>
            <span class='iconfont icon-shanchu' style='font-size:32px' @click='deleteHis'></span>
        </div>
        <div class="histroyContent">
            <div class="hisItem" v-for='(item,index) in his' :key='index'>
                {{item}}
            </div>
        </div>
    </div>
    <div class="content">
        <div class="contentTop">
            热门搜索
        </div>
        <div class="contentBottom">
            <div class="item" v-for='(item,index) in searchDatas.hotKeywordVOList' :key='index'>
                {{item.keyword}}
            </div>
        </div>
    </div>
    <div class="hisMask" v-if='valueData'>
        <div class="hisMaskItem" v-for='(item,index) in nowSearchList' :key='index'>
            <span>{{item}}</span>
            <span class='iconfont icon-arrow-right' style='font-size:32px'></span>
        </div>
    </div>
</div>
</template>

<script >
  import Vue from 'vue'
  import Meta from 'vue-meta'
  Vue.use(Meta)
  export default {
    data () {
      return {
          his:[],//搜索历史
          searchDatas:{},//默认列表
          valueData:'',//输入框的内容
          nowSearchList:[],//根据搜索内容出现的列表,
          flag:true//节流标志
      }
    },
    components: {

    },
    methods:{
        back(){
            this.$router.back()
        },
        async changeValue(){
            if(this.valueData){
                
                if(this.flag){
                    let resulte=await this.$http.index.getSearchDatas({keywordPrefix:this.histroyDatas})
                    this.flag=false  
                    const {code,data}=resulte
                    if(code==='200'){
                        this.nowSearchList=data;
                        this.his.unshift(this.histroyDatas)
                        setTimeout(()=>{
                            this.flag=true
                        },3000)
                    }
                }
                
            }

        },
        deleteHis(){
            this.his=[];
        }
    },
    computed:{
        histroyDatas:{
            get(){return this.valueData},
            set(val){this.valueData=val}
        }
    },
    watch:{
        valueData:function (){
            if(!this.valueData){
                this.nowSearchList=[]
            }
        }
    },
    async mounted(){
        let resulte =await this.$http.index.getSearch();
        const {code ,data}=resulte;
        if(code==='200'){
            this.searchDatas=data;
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
#search
    width 100%
    height 100%
    background #eee
    position relative
    .hisMask
        width 100%
        height calc(100vh - 87.97px)
        position absolute 
        left 0
        top 87.97px
        background #eee
        .hisMaskItem
            width 640px
            height 104px
            padding-right 80px
            padding-left 30px
            display flex
            justify-content space-between
            align-items center
            background white
            font-size 32px
    .header 
        width 690px
        padding 0 30px
        height 87.984px
        background white
        display flex
        align-items center
        &>span 
            font-size 28px
        .content
            width 546.016px
            height 56px
            padding 0 20px
            background #eee
            display flex
            line-height 56px
            align-items center
            margin-right 20px
            margin-bottom 0
            &>p
                width 27.984px
                height 27.984px
                background url('../../static/image/fdj.png') no-repeat 
                background-size 100%
                margin 0 16px 0 0
            &>input 
                width 518.047px
                height 39px
                padding-left 2px
                background #eee
                border none
    .content
        width 690px
        height 406px
        padding 0 30px 30px
        margin-bottom 20px
        background white
        .contentTop
            width 690px
            height 90px
            line-height 90px
            font-size 32px
        .contentBottom
            width 720px 
            height 316px
            margin -left -30px
            margin-bottom -32px
            .item
                display inline-block
                padding 4px
                border 1px solid red
                margin 0 20px 20px 0
                color red
    .histroy
        width 690px
        padding 0 30px 30px 
        margin-bottom 20px
        background white
        .histroyHeader
            width 690px
            height 90px
            display flex
            justify-content space-between
            font-size 32px
        .histroyContent
            width 720px
            margin-right -30px
            margin-bottom -32px
            .hisItem
                display inline-block
                border 1px solid red
                padding 6px
                margin 0 20px 20px 0
</style>