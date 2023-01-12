import { takeLatest, call, put } from 'redux-saga/effects';
import * as action from '../action/index';
import * as type from '../constant/index';
import * as api from '../api/index';


// test
console.log('SAGA: tich hop thanh cong !');


// 1.SAGA WORKER:
function* sagaGetAllPosts() {
    // 1.1. call API:
    const response = yield call(api.fetchAllPosts);

    console.log('4...run saga: sagaGetAllPosts');
    console.log('sagaGetAllPosts - response = ', response);
    
    // 1.2. đẩy DATA vào STORE:
    yield put(action.getAllPostsSuccess(response.data.postList));
}



// N.ROOTSAGA - WATCHER:
function* rootSaga() {
    yield takeLatest(type.GET_ALL_POSTS, sagaGetAllPosts)
}

export default rootSaga;