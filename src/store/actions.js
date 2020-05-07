import {GETINDEX} from './mutations_type'
export default{
    actSetIndex(store,data){
        store.commit(GETINDEX,data)
    }
}