<template>
    <div class="footer">
        <div >
            <router-link to='/index' class="one">
                <div class="top1"></div>
                首页
            </router-link>
        </div>
         <div >
             <router-link to='/category' class="one">
               <div class="top2"></div>
                分类
            </router-link>
        </div>
         <div >
             <router-link to='/buy' class="one">
                <div class="top3"></div>
                值得买
            </router-link>
        </div>
         <div >
            <router-link to='/shopcar' class="one">
                <div class="top4"></div>
                购物车
            </router-link>
        </div>
         <div >
            <router-link to='/personal' class="one"> 
                <div class="top5"></div>
                个人
            </router-link>
        </div>
    </div>
</template>

<script >
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang='stylus' >
.footer
    width 100%
    height 98px
    background white
    border-top 1px solid red;
    box-sizing border-box
    position fixed
    left 0
    bottom 0
    display flex
    justify-content space-around
    &>div
        display flex
        justify-content center
        align-items center
        flex-direction column
        .one
                display flex
                justify-content center
                align-items center
                flex-direction column
                font-size 24px
                text-decoration none
                color black
                &.active
                    color:red;
                    .top1
                        background: url('../../static/image/1.png') no-repeat 0 -200px
                        background-size 100%
                    .top2
                        background: url('../../static/image/1.png') no-repeat 0 -100px
                        background-size 100%
                    .top3
                        background: url('../../static/image/1.png') no-repeat 0 -300px
                        background-size 100%
                    .top4
                        background: url('../../static/image/1.png') no-repeat 0 -00px
                        background-size 100%
                    .top5
                        background: url('../../static/image/1.png') no-repeat 0 -400px
                        background-size 100%
                .top1
                    width 40px
                    height 40px
                    background: url('../../static/image/1.png') no-repeat 0 -250px
                    background-size 100%
                .top2
                    width 40px
                    height 40px
                    background: url('../../static/image/1.png') no-repeat 0 -150px
                    background-size 100%
                .top3
                    width 40px
                    height 40px
                    background: url('../../static/image/1.png') no-repeat 0 -350px
                    background-size 100%
                .top4
                    width 40px
                    height 40px
                    background: url('../../static/image/1.png') no-repeat 0 -50px
                    background-size 100%
                .top5
                    width 40px
                    height 40px
                    background: url('../../static/image/1.png') no-repeat 0 -450px
                    background-size 100%
</style>