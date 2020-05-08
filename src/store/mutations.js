import {GETSEARCHINT} from './mutations_type'
export default{
    [GETSEARCHINT](state,data){
        state.seachInt=data;
    }
}