import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductsBySlug } from "../../actions/product.action"
import Layout from "../../components/Layout"
import axios from "../../helpers/axios"
import { generatePublicUrl } from "../../urlConfig"
import getParams from "../../utils/getParams"
import Home from "../Home"
import ProductPage from "./ProductPage"
import ProductStore from "./ProductStore"
import './style.css'

export const ProductListPage = (props) => {

    // const product = useSelector(store => store.product)

    // const dispatch = useDispatch();
    // useEffect(async () => {
    //     const { slug } = props.match.params;
    //     dispatch(getProductsBySlug(slug));
    // }, [])

    const renderProduct = () => {
        const paramsObject = getParams(props.location.search)
        const { cid, type } = paramsObject
        props.match.params.cid=cid;
        props.match.params.type=type;
        let content=null
        console.log(props);
        switch (type) {
            case 'store': {
                content = <ProductStore {...props} />
                break ;
            }
            case 'page':{
                content =  <ProductPage {...props} />
                break ;
            }
            default:{
                content=""
            }
        }
        return content
    }


    return (
        <Layout>


            {
                renderProduct()
            }
            {/* <div> 
            <div className="card">
                <div className="cardHeader">
                    <div>All products</div>
                    <button>view all</button>
                </div>
                <div style={{ display: "flex" }}>
                    {
                        product.products.map((product) => {
                            return (
                                <div className="productContainer">
                                    <div className="productImgContainer">
                                        <img src={generatePublicUrl(product.productPictures[0].img)}></img>
                                    </div>
                                    <div className="productInfo">
                                        <span className="productRating">4.4</span>
                                        <span>3300</span>
                                    </div>
                                    <div className="productName">{product.name}</div>
                                    <div className="price">{product.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                       <>
                        {
                            Object.keys(product.productsByPrice[key]).length>0?  
                        <div className="card">
                        <div className="cardHeader">
                            <div>{key}</div>
                            <button>view all</button>
                        </div>
                        <div style={{ display: "flex" }}>
                            {
                                product.productsByPrice[key].map((product) => {
                                    return (
                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)}></img>
                                            </div>
                                            <div className="productInfo">
                                                <span className="productRating">4.4</span>
                                                <span>3300</span>
                                            </div>
                                            <div className="productName">{product.name}</div>
                                            <div className="price">{product.price}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                            :null
                        }
                    </>
                        )
                
                })
            }
            </div> */}
        </Layout>
    )
}
