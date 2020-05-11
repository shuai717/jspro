
export default {
    name:'login',
    api:{
        login:{
            url:"/login",
            method:"post",
            corsUrl:"/3000",
            toast:true,
        }
    },
    timeout:3000,
    hooks:{
        beforeReq(){},
        afterReqSuccess(){},
        afterReqFail(){},
      }
}