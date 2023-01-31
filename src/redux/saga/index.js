import { takeLatest, call, put } from 'redux-saga/effects';
import * as type from '../constant/index';
import * as api from '../api/index';
// KHÔNG SỬ DỤNG - * AS ACTION - vì trùng với THAM SỐ - ACTION REQUEST LÊN!
// import * as action from '../action/index';
import { createPostSuccess, deletePostSuccess, getAllPostsSuccess, updateLikeCountPostSuccess } from '../action';


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

// 2.SAGA WORKER: nhận vào "action"
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

// 3.SAGA WORKER: nhận vào "action"
function* sagaUpdateLikeCountPost(action) {
    const payload = action.data;
    // 1.1. call API:
    const response = yield call(api.updateLikeCountPost, payload);

    console.log('4...run saga: sagaUpdateLikeCountPost');
    console.log('sagaUpdateLikeCountPost - response = ', response);
    
    // 1.2. đẩy DATA vào STORE:
    if (response && response.status === 200) {
        yield put(updateLikeCountPostSuccess(payload));        
    }
}


// 4.SAGA WORKER: nhận vào "action"
function* sagaDeletePost(action) {
    const payload = action.data;
    // 1.1. call API:
    const response = yield call(api.deletePost, payload);

    console.log('4...run saga: sagaDeletePost');
    console.log('sagaDeletePost - response = ', response);
    
    // 1.2. xóa DATA trong STORE:
    if (response && response.status === 200) {
        yield put(deletePostSuccess(payload));        
    }
}


// N.ROOTSAGA - WATCHER:
function* rootSaga() {
    yield takeLatest(type.GET_ALL_POSTS, sagaGetAllPosts);
    yield takeLatest(type.CREATE_POST, sagaCreatePost);
    yield takeLatest(type.UPDATE_LIKE_COUNT_POST, sagaUpdateLikeCountPost);
    yield takeLatest(type.DELETE_POST, sagaDeletePost);
}

export default rootSaga;