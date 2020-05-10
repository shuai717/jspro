import Vue from "vue";
import VeeValidate from "vee-validate"
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
        phone:"手机号",
        captcha:"短信验证码",
        email:"邮箱号",
        pwd:"密码",
    }
})


VeeValidate.Validator.extend('phone', {
    validate: value => {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
    },
    message: field => field + '必须是11位手机号码'
})
VeeValidate.Validator.extend('email', {
    validate: value => {
        return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)
    },
    message: field => field + '请输入正确的邮箱格式'
})
VeeValidate.Validator.extend('pwd', {
    validate: value => {
        return /^\w+$/.test(value)
    },
    message: field => field + '只能由数字字母下划线构成'
})