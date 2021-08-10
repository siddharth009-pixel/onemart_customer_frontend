import { cartConstants } from "../actions/constants"

const initState={
    cartItems:{}
}

export const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case cartConstants.ADD_TO_CART:{
            return {
                ...state,
                cartItems:action.payload.cartItems
            }
        }
        case cartConstants.RESET_CART:{
            return {
                ...state,
                cartItems:{}
            }
        }
        default:{
            return(state)
        }
    }
}