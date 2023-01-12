import { takeLatest, call } from 'redux-saga/effects';
import * as type from '../constant/index';
import * as api from '../api/index';


// test
console.log('SAGA: tich hop thanh cong !');


// 1.SAGA WORKER:
function* sagaGetAllPosts() {
    const response = yield call(api.fetchAllPosts);

    console.log('4...run saga: sagaGetAllPosts');
    console.log('sagaGetAllPosts - response = ', response);
}



// N.ROOTSAGA - WATCHER:
function* rootSaga() {
    yield takeLatest(type.GET_ALL_POSTS, sagaGetAllPosts)
}

export default rootSaga;