
export default {
    name:'register',
    api:{
        resgiter:{
            url:"/resgiter",
            method:"post",
            corsUrl:"/3000",
            toast:true,
        },
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