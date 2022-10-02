import { createActions,  } from 'redux-actions';
 
// Lay 
export const getType = (reduxActions) => {
    return reduxActions().type;
};
// Tu do tra ve getType ( getData, getDataAc)

export const getDatas = createActions({
    getDatasRequest : undefined,
    getDatasSuccess : (payload) => payload,
    getDatasFailure: (err) => err,
});
// tuừ đó trả về giá trị một function
/* 
    {
        type : 'getDatasRequest;
        payload:{
            name: 'test'
        }
    }
*/