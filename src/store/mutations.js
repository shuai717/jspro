import {GETINDEX} from './mutations_type'
export default{
    [GETINDEX](state,data){
        state.index=data;
    }
}