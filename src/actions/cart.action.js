import axios from "../helpers/axios"
import store from "../store"
import { cartConstants } from "./constants"


export const addToCart = (product, newQty = 1) => {
    return async (dispatch) => {
        const auth = store.getState().auth
        const { cartItems } = store.getState().cart
        const qty = cartItems[product._id] ? parseInt(parseInt(cartItems[product._id].qty) + newQty) : 1
        cartItems[product._id] = {
            ...product, qty
        }

        if (auth.authenticate) {
            const newCartItems = []
            Object.keys(cartItems).map((key, index) => {
                newCartItems.push({
                    product: key,
                    quantity: cartItems[key].qty
                })
            })


            const res = await axios.post('/user/cart/addtocart', { cartItems: newCartItems })
            if (res.status === 201) {
                const { cartItems } = res.data
                dispatch(getCartItems())
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(cartItems))

            dispatch({
                type: cartConstants.ADD_TO_CART,
                payload: { cartItems }
            })
        }

    }
}

const getCartItems = () => {
    return async (dispatch) => {
        const res = await axios.get('/user/cart/getcartitems')
        if (res.status === 200) {
            const { cartItems } = res.data
            dispatch({
                type: cartConstants.ADD_TO_CART,
                payload: { cartItems }
            })
        }
    }
}

export const updateCart = () => {
    return async (dispatch) => {
        const auth = store.getState().auth
        if (auth.authenticate) {
            const cartItems = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'))
            localStorage.removeItem('cart')
            const newCartItems = []
            if (cartItems) {
                Object.keys(cartItems).map((key, index) => {
                    newCartItems.push({
                        product: key,
                        quantity: cartItems[key].qty
                    })
                })
            }
            const res = await axios.post('/user/cart/addtocart', { cartItems: newCartItems })
            if (res.status === 201) {
                dispatch(getCartItems())
            }
        } else {
            const cartItems = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) :
                null;
            if (cartItems) {
                dispatch({
                    type: cartConstants.ADD_TO_CART,
                    payload: { cartItems: cartItems }
                })
            }
        }

    }
}

export const resetCart=()=>{
    return async(dispatch)=>{
        localStorage.removeItem('cart');
        dispatch({
            type:cartConstants.RESET_CART
        })
    }
}

export { getCartItems }