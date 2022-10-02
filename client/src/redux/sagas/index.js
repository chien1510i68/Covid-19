import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions';
import * as api from '../../mongoDB';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchDatasSaga(action) {
    const datas = yield call(api.fetchDatas);
    console.log('[Datas]', datas);
    /* try {
        const datas = yield call(api.fetchDatas);
        yield put(action.getDatas.getDatasSuccess(datas.data));
    } catch (err) {
        console.error(err);
        yield put(action.getDatas.getDatasFailure(err));
    }
    */
}

function* mySaga() {
    yield takeLatest(actions.getDatas.getDatasRequest, fetchDatasSaga);
    /* yield takeLatest(actions.createPost.createDataRequest, createDataSaga);
    yield takeLatest(actions.updatePost.updateDataRequest, updateDataSaga); */
}
// generator function ES6
export default mySaga;
