import axios from 'axios'
import { authConstants } from '../actions/constants'
import store from '../store'
import { api } from '../urlConfig'

const Token=window.localStorage.getItem('token')

const axiosIntance=axios.create({
    baseURL:api,
    headers:{
        'token':Token?Token:''}
})

axiosIntance.interceptors.request.use((req)=>{
    const {auth}=store.getState()
    if(auth.token){
        req.headers.token=auth.token
    }
    return req
})

export default axiosIntance