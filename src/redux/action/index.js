import * as type from '../constant';


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

