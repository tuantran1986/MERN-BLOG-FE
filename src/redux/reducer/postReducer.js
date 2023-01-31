import * as type from '../constant/index';

// test
console.log('REDUCER - POST: tich hop thanh cong !');

const initStatePost = {
    loading: false,
    postList: []
};

export const postReducer = (state = initStatePost, action) => {
    switch (action.type) {

        // 1.GET_ALL_POSTS
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

        // 2.CREATE_POST
        case type.CREATE_POST:            
            return {
                ...state,
                loading: true
            };
        case type.CREATE_POST_SUCCESS:
            console.log('REDUCER: CREATE_POST_SUCCESS - ', action.data);
            return {
                ...state,
                loading: false,
                postList: [...state.postList, action.data]
            };
        case type.CREATE_POST_FAILURE:
            return {
                ...state,
                loading: false
            };


        // N. END
        default:
            return state;
    }
}