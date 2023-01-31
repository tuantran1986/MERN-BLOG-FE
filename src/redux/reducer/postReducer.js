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

        // 2.UPDATE_LIKE_COUNT_POST
        case type.UPDATE_LIKE_COUNT_POST:            
            return {
                ...state,
                loading: true
            };

        
        // CÁCH 1 - UPDATE = map
        case type.UPDATE_LIKE_COUNT_POST_SUCCESS:
            const postListUpdateLikeCount = state.postList.map(item =>  item._id === action.data._id ? 
                {...item, likeCount: action.data.likeCount + 1} 
                : 
                item
            );

            return {
                ...state,
                loading: false,
                postList: postListUpdateLikeCount
            };
        
        // CÁCH 2 - UPDATE = findIndex
        // case type.UPDATE_LIKE_COUNT_POST_SUCCESS:
        //     const indexUpdateLikeCount = state.postList.findIndex(item => item._id === action.data._id);
        //     const postListUpdateLikeCount = [...state.postList];
        //     if (indexUpdateLikeCount !== -1) {
        //         postListUpdateLikeCount[indexUpdateLikeCount] = {
        //             ...postListUpdateLikeCount[indexUpdateLikeCount],
        //             likeCount: action.data.likeCount + 1
        //         }
        //     }

        //     return {
        //         ...state,
        //         loading: false,
        //         postList: [...postListUpdateLikeCount]
        //     };


        case type.UPDATE_LIKE_COUNT_POST_FAILURE:
            return {
                ...state,
                loading: false
            };

        // N. END
        default:
            return state;
    }
}