import React from "react"
import { useEffect } from "react"
import { NavLink } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getProductsBySlug } from "../../../actions/product.action"
import { generatePublicUrl } from "../../../urlConfig"
import './style.css'
import { Link } from "react-router-dom"


const ProductStore = (props) => {

    const product = useSelector(store => store.product)

    const dispatch = useDispatch();
    useEffect(async () => {
        const { slug } = props.match.params;
        dispatch(getProductsBySlug(slug));
    }, [])

    return (
        <>
            <div>
                <div className="card">
                    <div className="cardHeader">
                        <div>All products</div>
                        <button>view all</button>
                    </div>
                    <div style={{ display: "flex" }}>
                        {
                            product.products.map((product) => {
                                return (
                                    <Link 
                                        className="productContainer"
                                        style={{display:"block"}}
                                        to={`/${product.slug}/${product._id}/p`}
                                    >    
                                        <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)}></img>
                                            </div>
                                            <div className="productInfo">
                                                <span className="productRating">4.4</span>
                                                <span>3300</span>
                                            </div>
                                            <div className="productName">{product.name}</div>
                                            <div className="price">{product.price}</div>
                                    </Link>
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
                                    Object.keys(product.productsByPrice[key]).length > 0 ?
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
                                        : null
                                }
                            </>
                        )

                    })
                }
            </div>
        </>
    )
}

export default ProductStore