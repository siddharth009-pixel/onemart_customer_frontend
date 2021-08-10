import { productConstants } from "../actions/constants";

const initState={
    loading:false,
    products:[],
    productsByPrice:{
        under5k:[],
        under10k:[],
        under15k:[],
        under20k:[],
        under50k:[]
    },
    productPage:{},
    pageRequest:false,
    productDetails:{}
}

export const productReducer=(state=initState,action)=>{
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_BY_SLUG_REQUEST:{
            return{
                ...state,
                loading:true
            }
        }
        case productConstants.GET_ALL_PRODUCTS_BY_SLUG_SUCCESS:{
            return {
                ...state,
                loading:false,
                products:action.payload.products,
                productsByPrice:{
                    ...action.payload.productsByPrice,
                }
            }
        }
        case productConstants.GET_ALL_PRODUCTS_BY_SLUG_FAILED:{
            return {
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:{
            return {
                ...state,
                pageRequest:false,
                productPage:action.payload.productPage
            }
        }
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:{
            return{
                ...state,
                loading:true,
            }
        }
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:{
            return{
                ...state,
                loading:false,
                productDetails:action.payload.productDetails
            }
        }
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILED:{
            return{
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        default:{
            return state;
        }
    }
}