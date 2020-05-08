import {GETSEARCHINT} from './mutations_type'
export default{
    actSetSearchInit(store,data){
        store.commit(GETSEARCHINT,data)
    }
}