<template>
    <div class="register">
        <div class="registerHeader">
            <span class='iconfont icon-home' style='font-size:32px' @click='goHome'></span>
            <span>网易严选</span>
            <div class="right">
            <span class='iconfont icon-fangdajing' style='font-size:32px;margin-right:20px' @click='goSearch'></span>
            <span class='iconfont icon-gouwuche' style='font-size:32px' @click='goCar'></span>
            </div>
        </div>
         <div class="title">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="loginMain">
            <form >
                <div class="email">
                    
                        <input type="text" placeholder="请输入邮箱账号"  v-if='id==="2"' v-model='email'  name="email" v-validate="'required|email'" >
                        <span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    
                    
                        <input type="tel" placeholder="请输入手机号" v-if='id==="1"' v-model='phone'  maxlength="11"  name="phone"   v-validate="`required|phone`" >
                        <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                    
                    
                </div>
                <div class="pwd">
                    
                        <input type="password" placeholder="请输入密码" v-if='id==="2"' v-model='pwd' maxlength="8" name="pwd" minlength="6" v-validate="'required|pwd'">
                        <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                    
                    
                        <input type="text" placeholder="请输入短信验证码" v-if='id==="1"' v-model='code' name="captcha" v-validate="{required: true}" maxlength="6" minlength="4">
                        <span style="color: red;" v-show="errors.has('captcha')">{{ errors.first('captcha') }}</span>
                   
                    
                    <div class="yzm" v-if='id==="1"' @click='requestYZM'>
                        <span >{{timeText}}</span>
                    </div>
                </div>
                <div class="desc">
                    <span > 注册账号</span>
                    <span>忘记密码</span>
                </div>
                <button class="upButton" @click.prevent='submit'>
                    登录
                </button>
            </form>
            <div class="qita" @click='gotoLoginRoot'>
                <span>请他方式登录</span>
                <span class='iconfont icon-arrow-right'></span>
            </div>
        </div>
    </div>
</template>

<script >
import '../../until/vee-validate'
import Vue from 'vue'
import Meta from 'vue-meta'
import {Toast} from "vant"
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
            timeText:'获取验证码',
            phoneNumber:'',
            pwdNumber:'',
            codeNumber:'',
            emailNumber:'',
            phoneReg:/^1\d{10}/igm,
      }
    },
    props:{
        id:String
    },
    components: {

    },
    methods:{
        goSearch(){
            this.$router.push('/search')
        },
        goCar(){
            this.$router.push('/shopCar')
        },
        goHome(){
            this.$router.push('/index')
        },
        requestYZM(){
            this.timeText=60
            this.IntervalObj=setInterval(() => {
                if(this.timeText>=1){
                    this.timeText--
                }else{
                    clearInterval(this.IntervalObj)
                    this.timeText='获取验证码'
                }
                
            }, 1000);
        },
        gotoLoginRoot(){
            this.$router.push('/loginRoot')
        },
        async submit(){

                if(this.id==="1")//手机号
                {
                    // if(this.phoneNumber==="")
                    // {   
                        
                    //     Toast.fail({
                    //         message:'手机号不能为空'
                    //     })
                    // }else
                    //  if(this.codeNumber===''){
                    //     Toast.fail({
                    //         message:'验证码不能为空'
                    //     })
                    // }else
                    // if(this.phoneNumber!==""){
                    //     if(this.phoneNumber.split('').length<=3||this.phoneNumber.split('').length>=11){
                    //         Toast.fail({
                    //             message:'手机号的位数在4到10之间'
                    //         })
                    //     }
                    // }
                     const flag = await this.$validator.validateAll(["phone","captcha"])
                    if(!flag) return;
                }
                //账号
                else{
                     const flag = await this.$validator.validateAll(["email","pwd"])
                    if(!flag) return;
                }
        }
    },
    computed:{
        phone:{
            get(){return this.phoneNumber},
            set(val){ this.phoneNumber=val}
        },
        pwd:{
            get(){return this.pwdNumber},
            set(val){ this.pwdNumber=val}
        },
        code:{
            get(){return this.codeNumber},
            set(val){ this.codeNumber=val}
        },
        email:{
            get(){return this.emailNumber},
            set(val){ this.emailNumber=val}
        },
    }
  }
</script>

<style lang='stylus'>
    .register
        width 100%
        height 100%
        background white
        .registerHeader
            background #eee
            width 100%
            box-sizing border-box
            height 100px
            padding 0 26px 0 24px
            font-size 32px
            display flex
            align-items center
            justify-content space-between
        .title
            background white
            width 750px
            height 90px
            padding 40px 0 232px 0
            img 
                width 268px
                height 90px
                display block
                margin 0 auto
        .loginMain
            width 100%
            height 578px
            padding 0 40px
            box-sizing border-box
            // background pink
            .email
                width 100%
                height 90px
                box-sizing border-box
                border-bottom 1Px solid red
                margin-bottom 50px
                padding 2px 0
                &>input 
                    width 100%
                    height 98%
                    border none
                    font-size 32px
            .pwd
                width 100%
                height 90px
                box-sizing border-box
                border-bottom 1Px solid red
                margin-bottom 50px
                padding 2px 0
                position relative
                .yzm
                    border 1Px solid red
                    padding 6px
                    font-size 28px
                    position absolute 
                    right 20px
                    bottom 20px
                &>input 
                    width 100%
                    height 98%
                    border none
                    font-size 32px
            .desc
                display flex
                justify-content space-between
                font-size 26px
                margin-top 20px
            .upButton
                width 100%
                height 90px
                color rgba(255,255,255,0.6)
                background #DD1A21
                border-radius 10px
                line-height 90px
                text-align center
                margin-top 20px
            .qita
                width 100%
                text-align center
                font-size 26px
                margin-top 20px
</style>