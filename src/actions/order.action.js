import axios from "../helpers/axios"
import { resetCart } from "./cart.action"
import { userConstants } from "./constants"

export const addOrder = (payload) => {
    return async (dispatch) => {
        const res = await axios.post('/addOrder', payload)
        if (res.status === 201) {
            dispatch(resetCart())

            console.log(res.data);
            // dispatch({
            //     type:userConstants.ADD_USER_ORDER_SUCCESS,
            //     payload:res.data.order
            // })
        }
    }
}

export const getOrders = () => {
    return async (dispatch) => {
        console.log('asdfghj');
        const res = await axios.get('/getOrders')
        if (res.status === 200) {
            console.log(res.data);
            dispatch({
                type: userConstants.GET_USER_ORDERS_SUCCESS,
                payload: { orders: res.data.orders }
            })
        } else {
            
        }
    }
}