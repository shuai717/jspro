import {loading,success,fail} from './toast'
export default function (axios,config={}){
    if(!config.name) config.name='default'
    const modename= config.name
    if(!config.api) throw new Error(`${modename}模块必须存在api配置对象`)
    if(!config.api instanceof Object) throw new Error(`${modename}模块的api必须是一个对象`)

    const httpObj={};
    const api =config.api;

    for(let apiname in api){
        
        let {url,method,isparams,params,isform,toast,hooks,corsUrl,token,urlenCoded}=api[apiname];
        let URL=corsUrl+url;
        console.log(URL)
        httpObj[apiname]=async (data={})=>{
            let resulte;
            let transformData;
            let headers={};
               
                if(corsUrl){
                    url=corsUrl+url
                    corsUrl=''
                }
               
               if(urlenCoded){
                url=URL
                url=url+'?'
                for(let key in data){
                    url=url+`${key}=${data[key]}`
                }
                    data={}
                }
            if(isform){
                transformData = new FormData();
                for(let key in data){
                  transformData.append(key,data[key])
                }
            }else{
                transformData=data;
            }
            if(isparams){
                data=params
            }
            if(token){
                // console.log(token())
                headers={
                    authorization:token()
                }
            }
           try {
               
               toast && loading();
               hooks && hooks.beforeReq();
                switch (method) {
                    case 'get':
                        resulte=await axios({
                            url,
                            params:data,
                            method,
                            headers
                        })
                        break;
                    
                    case 'post':
                        resulte=await axios({
                            url,
                            data:transformData,
                            method,
                            headers
                        })
                    break;
                    case 'put':
                        resulte=await axios({
                            url,
                            data:data,
                            method,
                            headers
                        })
                    break;
                    case 'delete':
                        resulte=await axios({
                            url,
                            params:data,
                            method,
                            headers
                        })
                    break;
                
                }
                toast && success();
                hooks && hooks.afterReqSuccess(resulte);
           } catch (error) {
            toast && fail();
            hooks && hooks.afterReqFail();
           }

            return resulte;
            
        }

    }
    return httpObj;
}