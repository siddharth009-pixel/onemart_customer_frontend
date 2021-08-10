import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductPage } from "../../../actions/product.action"
import getParams from "../../../utils/getParams"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Card } from "../../../UI/Card";

const ProductPage = (props) => {

    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        const { cid, type } = props.match.params
        console.log(cid);
        console.log(type);
        const payload = {
            cid: cid,
            type: type
        }
        dispatch(getProductPage(payload))
    }, [])

    return (
        <>
            <div>
                <h1>{product.productPage.title}</h1>
            </div>
            <div style={{
                border:'2px solid grey',
                borderRadius:'5px',
                margin:'10px 10px',
                marginBottom:'50px',
                boxShadow: '5px 10px 8px 10px #888888'

            }}>
                <Carousel
                    renderThumbs={() => { }}
                >
                    {product.productPage.banners ?
                        product.productPage.banners.map((banner, index) => {
                            return (
                                <div>
                                    <img src={banner.img} />
                                </div>
                            )
                        }) :
                        null
                    }
                </Carousel>
            </div>
            <div style={{   display: 'flex',
                            justifyContent:"center",
                            flexWrap:'wrap',
                            margin:'0 5px'
                            }}>
                {product.productPage.products ?
                    product.productPage.products.map((product, index) => {
                        return (
                            <Card
                            key={index}
                            style={{
                                width:'320px',
                                height:'350px',
                                margin:'20px 20px',

                            }}
                            >
                                <a href={product.navigateTo} style={{display:"block"}} >
                                    <img src={product.img} style={{width:'100%' }} />
                               </a>
                            </Card>

                        )
                    }) :
                    null
                }
            </div>
        </>
    )
}

export default ProductPage