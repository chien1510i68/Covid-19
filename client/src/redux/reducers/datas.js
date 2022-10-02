import { INIT_STATE } from '../../constant';
import { getDatas, getType } from '../actions';

function* dataReducers(state = INIT_STATE.datas, action) {
    switch (action.type) {
        case getType(getDatas.getDatasRequest): // case ' getData 
            return {
                ...state,
                isLoading: true,
            }
        case getType(getDatas.getDatasSuccess): // case ' getData 
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getDatas.getDatasFailure): // case ' getData 
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }

        default:
            return state;
    }
}

export default dataReducers;
