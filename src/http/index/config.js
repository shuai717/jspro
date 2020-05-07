
export default {
    name:'index',
    api:{
        getindex:{
            url:"/index",
            method:"get",
            corsUrl:"/3000",
            toast:true,
        },
    },
    timeout:3000,
    hooks:{
        beforeReq(){},
        afterReqSuccess(){},
        afterReqFail(){},
      }
}