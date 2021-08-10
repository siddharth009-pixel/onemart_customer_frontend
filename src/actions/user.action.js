import axios from "../helpers/axios"
import { userConstants } from "./constants"

export const addAddress=(payload)=>{
    return async(dispatch)=>{

        const res=await axios.post('/user/address/create',{payload})
        if(res.status===201){
            const {address}=res.data.userAddress
            dispatch({
                type:userConstants.ADD_USER_ADDRESS_SUCCESS,
                payload:{address}
            })
        }else{
            
        }
    }
}

export const getAddress=()=>{
    return async(dispatch)=>{
        const res=await axios.get('/user/address/getAddress')
        if(res.status===200){
            const {address}=res.data.userAddress
            dispatch({
                type:userConstants.GET_USER_ADDRESS_SUCCESS,
                payload:{address}
            })
        }
    }
}