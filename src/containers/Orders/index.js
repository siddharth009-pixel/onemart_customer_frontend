import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../actions/order.action'
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig'



export default function Orders() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    return (
        <>

            <Layout>
                <div>
                    <div>
                        <div>
                            {
                                user.orders && user.orders.map((order) => {
                                    return order.items.map((item,key) => {
                                        return (
                                            <div key={key} style={{display:'flex',margin:'10px 10px',padding:'10px 10px',boxShadow:'-2px -2px 10px 2px grey'}} >
                                                <div style={{width:'100px',overflow:'hidden'}}>
                                                    <img style={{width:'100px',height:'100px',objectFit:'contain'}} src={generatePublicUrl(item.productId.productPictures[0].img)} />
                                                </div>
                                                <div style={{margin:'20px 10px 10px 40px',width:'300px',fontWeight:'bold'}}>
                                                    {item.productId.name}
                                                </div>
                                                <div style={{margin:'20px 10px 10px 40px',width:'100px',fontWeight:'bold'}}>
                                                    {item.productId.price}
                                                </div>
                                                <div style={{margin:'20px 10px 10px 40px',width:'300px',fontWeight:'bold'}}>
                                                    {order.paymentStatus}
                                                </div>
                                            </div>
                                        )
                                    })
                                })
                            }
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
