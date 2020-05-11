import axios from 'axios';
import config from './config'
let contentaxios =axios.create({
   baseURL:config.baseURL||'',
   timeout:config.timeout||5000
})

contentaxios.interceptors.request.use((configObj)=>{
    config.hooks && config.hooks.beforeReq && config.hooks.beforeReq.call(config)
return configObj;
})
contentaxios.interceptors.response.use((response)=>{
    config.hooks && config.hooks.afterReqSuccess && config.hooks.afterReqSuccess.call(config,response.data)
    return response.data;
    },(err)=>{
        config.hooks && config.hooks.afterReqFail && config.hooks.afterReqFail.call(config)
        return Promise.reject(err)
    })
export default contentaxios;





