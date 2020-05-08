
export default {
    name:'index',
    api:{
       
        getNav:{
            url:"/topic/v1/know/navWap.json",
            method:"get",
            corsUrl:"/163",
            toast:true,
        },
        getWaterfall:{
            url:"/topic/v1/find/recManual.json",
            method:"get",
            corsUrl:"/163",
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