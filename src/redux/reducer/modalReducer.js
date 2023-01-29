import * as type from '../constant/index';

// test
console.log('REDUCER - POST: tich hop thanh cong !');

const initStateModal = {
    showModal: false
};

export const modalReducer = (state = initStateModal, action) => {
    switch (action.type) {

        // 
        case type.SHOW_MODAL:            
            return {
                ...state,
                showModal: true
            };
        // 
        case type.HIDE_MODAL:            
            return {
                ...state,
                showModal: false
            };

        // 
        default:
            return state;
    }
}