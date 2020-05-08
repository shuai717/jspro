
export default {
    name:'index',
    api:{
        getCategoryList:{
            url:"/cateLists",
            method:"get",
            corsUrl:"/3000",
            toast:true,
        },
        getCategoryNavDatas:{
            url:"/cateNavDatas",
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