import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: {}
}


export const categoryReducer = (state = initState, action) => {
    
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST: {
            console.log('requested')
            return {
                ...state,
                loading: true
            }
        }
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload.categories,
                loading: false
            }
        }
        case categoryConstants.GET_ALL_CATEGORIES_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:{
            return state;
        }
    }
}