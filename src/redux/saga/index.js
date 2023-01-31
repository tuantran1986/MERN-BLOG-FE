import { takeLatest, call, put } from 'redux-saga/effects';
import * as type from '../constant/index';
import * as api from '../api/index';
// KHÔNG SỬ DỤNG - * AS ACTION - vì trùng với THAM SỐ - ACTION REQUEST LÊN!
// import * as action from '../action/index';
import { createPostSuccess, getAllPostsSuccess } from '../action';


// test
console.log('SAGA: tich hop thanh cong !');


// 1.SAGA WORKER:
function* sagaGetAllPosts() {
    // 1.1. call API:
    const response = yield call(api.fetchAllPosts);

    console.log('4...run saga: sagaGetAllPosts');
    console.log('sagaGetAllPosts - response = ', response);
    
    // 1.2. đẩy DATA vào STORE:
    yield put(getAllPostsSuccess(response.data.postList));
}

// 1.SAGA WORKER: nhận vào "action"
function* sagaCreatePost(action) {
    const payload = action.data;
    // 1.1. call API:
    const response = yield call(api.createPost, payload);

    console.log('4...run saga: sagaCreatePost');
    console.log('sagaCreatePost - response = ', response);
    
    // 1.2. đẩy DATA vào STORE:
    if (response && response.status === 200) {
        yield put(createPostSuccess(response.data.postList));        
    }
}



// N.ROOTSAGA - WATCHER:
function* rootSaga() {
    yield takeLatest(type.GET_ALL_POSTS, sagaGetAllPosts);
    yield takeLatest(type.CREATE_POST, sagaCreatePost);
}

export default rootSaga;