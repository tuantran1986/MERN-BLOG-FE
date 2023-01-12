import * as type from '../constant/index';

// test
console.log('REDUCER - POST: tich hop thanh cong !');

const initStatePost = {
    loading: false,
    postList: []
};

export const postReducer = (state = initStatePost, action) => {
    switch (action.type) {

        // 
        case type.GET_ALL_POSTS:            
            return {
                ...state,
                loading: true
            };
        case type.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                postList: action.data
            };
        case type.GET_ALL_POSTS_FAILURE:            
            // return initStatePost;
            return {
                ...state,
                loading: false
            };


        // 
        default:
            return state;
    }
}