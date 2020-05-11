<template>
    <div class="resgiter">
        <form action="##">
            <div class="userName">
                <span><span>用</span> <span>户</span> <span>名：</span> </span>

                <input type="text" placeholder="6-8位数字字母" v-model="comUserName"  name="username" v-validate="'required|username'" minlength="1" maxlength="8">
                <span class='tipOne' style="color: red;" v-show="errors.has('username')">{{ errors.first('username') }}</span>
            </div>
            <div class="password">
                <span> <span>密</span><span>码：</span> </span>
                <input :type="type" placeholder="6-8位数字字母" v-model="comPwd"  name="pwd" v-validate="'required|pwd'" minlength="6" maxlength="8">
                <span class='tipOne' style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                <span class="iconfont icon-yanjing-bi" v-if='yj' @click='changeYj'></span>
                <span class="iconfont icon-yanjing" v-if='!yj' @click='changeYj'></span>
            </div>
            <div class="confirm">
                <span>确认密码：</span>
                <input :type="type" placeholder="请输入确认密码" v-model="comConfirmPwd" name="confirmPassword" v-validate="'required|pwd'" minlength="6" maxlength="8">
                <span class='tipOne' style="color: red;" v-show="errors.has('confirmPassword')">{{ errors.first('confirmPassword') }}</span>
            </div>
            <div class="tip">
                <input type="checkbox"  v-model="comcheckBox"><span>用户注册即代表同意<a href="##">《服务条款》</a>和<a href="##">隐私政策</a></span>
            </div>
            <button @click.prevent='resgiter'>注册</button>
        </form>
    </div>
</template>

<script >
  import Vue from 'vue'
  import Meta from 'vue-meta'
  import {Toast} from 'vant'
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
          type:'password',
          userName:'',
          password:'',
          confirmPassword:'',
          yj:true,
          checkbox:false
      }
    },
    components: {

    },
    methods:{
       async resgiter(){
            if(this.checkbox){
                const flag = await this.$validator.validateAll(["username","pwd","confirmPassword"])
                if(!flag) return;
                if(this.password!=this.confirmPassword)
                {
                    Toast('两次输入的密码不一致')
                }
                let resulte=await this.$http.resgiter.resgiter({name:this.userName,pwd:this.password})
                const {code,data,err}=resulte
                if(code){
                    localStorage.setItem('username',JSON.stringify(this.userName))
                    this.$router.push('/login/2')
                    
                }
            }else{
                Toast(
                   "请先勾选用户手册"
                )
            }
        },
        changeYj(){
            console.log(111)
            this.yj=!this.yj
            if(this.yj){
                this.type='password'
            }else{
                this.type='text'
            }
        }
    },
    computed:{
        comUserName:{
            get(){return this.userName},
            set(val){this.userName=val}
        },
        comPwd:{
            get(){return this.password},
            set(val){this.password=val}
        },
        comConfirmPwd:{
            get(){return this.confirmPassword},
            set(val){this.confirmPassword=val}
        },
        comcheckBox:{
            get(){return this.checkbox},
            set(val){this.checkbox=val}
        }
    }
  }
</script>

<style lang='stylus'>
.resgiter
    width 100%
    height 100%
    background white
    padding 80px 40px 0
    font-size 36px
    box-sizing border-box
    form
        .userName,.password,.confirm
            display flex
            align-items center
            justify-content center
            width 100%
            height 100px
            border 1Px solid red
            display flex
            margin-bottom 20px
            border-radius 20px
            position relative
            &>span:first-of-type 
                width 180px
                display flex
                justify-content space-between
            .tipOne
                position absolute 
                left 0
                bottom 0
            input 
                height 60px
                border none
            .iconfont
                width 40px
                heihgt 40px
                font-size 40px
                position absolute 
                top 50%
                right 20px
                transform translateY(-50%)
        .tip
            margin-top 40px
            input 
                width 30px
                height 30px
            font-size 28px
        button 
            width 100%
            height 100px
            margin-top 20px
            background red
            border 1Px solid red
            box-sizing border-box
            border-radius 20px
</style>