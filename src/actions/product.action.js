import axios from "../helpers/axios"
import { productConstants } from "./constants";


export const getProductsBySlug = (slug) => {
    return async (dispatch) => {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_BY_SLUG_REQUEST })
        const res = await axios.get(`/products/${slug}`);
        const { products, productsByPrice } = res.data;
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_BY_SLUG_SUCCESS,
                payload: { products, productsByPrice }
            })
        } else {
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_BY_SLUG_FAILED,
                payload: { error: res.data.error }
            })
        }
    }
}

export const getProductPage = (payload) => {
    return async (dispatch) => {
        const { cid, type } = payload
        dispatch({
            type: productConstants.GET_PRODUCT_PAGE_REQUEST
        })
        const res = await axios.get(`/page/${cid}/${type}`)
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                payload: {
                    productPage: res.data.page
                }
            })
        } else {
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_FAILED,
                payload: {
                    error: res.data.error
                }
            })
        }
    }
}

export const getProductDetailsById = (payload) => {
    return async (dispatch) => {
        const { productId } = payload
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST })
        const res = await axios.get(`/product/${productId}`)
        
        if(res.status===200){
            dispatch({
                type:productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload:{productDetails:res.data.product}
            })
        }else{
            dispatch({
                type:productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILED,
                payload:{error:res.data.error}
            })
        }
    }
}