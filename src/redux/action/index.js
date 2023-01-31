import * as type from '../constant';


// 1.POST_LIST:
export const getAllPosts = () => {
    console.log('2...run action: GET_ALL_POSTS');
    // 
    return {
        type: type.GET_ALL_POSTS
    }
};
export const getAllPostsSuccess = (data) => {
    console.log('...run action: GET_ALL_POSTS_SUCCESS');
    // 
    return {
        type: type.GET_ALL_POSTS_SUCCESS,
        data: data
    }
};
export const getAllPostsFailure = () => {
    console.log('...run action: GET_ALL_POSTS_FAILURE');
    // 
    return {
        type: type.GET_ALL_POSTS_FAILURE
    }
};

// 2.SHOW_HIDE_MODAL:
export const showModal = () => {
    return {
        type: type.SHOW_MODAL
    }
};
export const hideModal = () => {
    return {
        type: type.HIDE_MODAL
    }
};


// 3.CREATE_POST:
export const createPost = (data) => {
    console.log('2...run action: CREATE_POST');
    // 
    return {
        type: type.CREATE_POST,
        data: data
    }
};
export const createPostSuccess = (data) => {
    console.log('...run action: CREATE_POST_SUCCESS');
    // 
    return {
        type: type.CREATE_POST_SUCCESS,
        data: data
    }
};
export const createPostFailure = (err) => {
    console.log('...run action: CREATE_POST_FAILURE');
    // 
    return {
        type: type.CREATE_POST_FAILURE,
        err: err
    }
};


// 4.UPDATE_LIKE_COUNT_POST:
export const updateLikeCountPost = (data) => {
    console.log('2...run action: UPDATE_LIKE_COUNT_POST');
    // 
    return {
        type: type.UPDATE_LIKE_COUNT_POST,
        data: data
    }
};
export const updateLikeCountPostSuccess = (data) => {
    console.log('...run action: UPDATE_LIKE_COUNT_POST_SUCCESS');
    // 
    return {
        type: type.UPDATE_LIKE_COUNT_POST_SUCCESS,
        data: data
    }
};
export const updateLikeCountPostFailure = (err) => {
    console.log('...run action: UPDATE_LIKE_COUNT_POST_FAILURE');
    // 
    return {
        type: type.UPDATE_LIKE_COUNT_POST_FAILURE,
        err: err
    }
};