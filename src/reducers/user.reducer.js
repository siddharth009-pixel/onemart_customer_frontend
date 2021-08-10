import { userConstants } from "../actions/constants"

const initState={
    address:[],
    orders:[],
    orderFetching:null,
    loading:false,
    error:null
}

export const userReducer=(state=initState,action)=>{
    switch(action.type){
        case userConstants.GET_USER_ADDRESS_REQUEST:{
            return {
                ...state,
                loading:true
            }
        }
        case userConstants.GET_USER_ADDRESS_SUCCESS:{
            return {
                ...state,
                loading:false,
                address:action.payload.address
            }
        }
        case userConstants.GET_USER_ADDRESS_FAILED:{
            return {
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        case userConstants.ADD_USER_ADDRESS_REQUEST:{
            return {
                ...state,
                loading:true
            }
        }
        case userConstants.ADD_USER_ADDRESS_SUCCESS:{
            return {
                ...state,
                loading:false,
                address:action.payload.address
            }
        }
        case userConstants.ADD_USER_ADDRESS_FAILED:{
            return{
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        case userConstants.ADD_USER_ORDER_SUCCESS:{
            return{
                ...state,
                loading:false,
            }
        }
        case userConstants.GET_USER_ORDERS_SUCCESS:{
            return{
                ...state,
                orderFetching:false,
                orders:action.payload.orders
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}