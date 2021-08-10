import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductDetailsById } from "../../actions/product.action"
import Layout from "../../components/Layout"
import { generatePublicUrl } from "../../urlConfig"
import { Row, Col } from 'react-bootstrap'
import { MaterialButton } from "../../components/MaterialUI"
import {
    IoIosArrowForward,
    IoIosStar,
    IoMdCart
} from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import { AiFillThunderbolt } from 'react-icons/ai';
import './style.css'
import { addToCart } from "../../actions/cart.action"

export const ProductDetailsPage = (props) => {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    
    const addToCartButton=()=>{
      const {_id,name,price}=product.productDetails;
      const img=product.productDetails.productPictures[0].img;
      dispatch(addToCart({_id,name,price,img}))
      props.history.push(`/cart`)
    }

    useEffect(() => {
        const { product, productId } = props.match.params
        const payload = {
            productId
        }
        dispatch(getProductDetailsById(payload))
    }, [])

    if (Object.keys(product.productDetails).length == 0) {
        return null
    }
    return (
        <Layout>
          {/* <div>{product.productDetails.name}</div> */}
          <div className="productDescriptionContainer">
            <div className="flexRow"
                style={{
                    display:"flex"
                }}>
              <div className="verticalImageStack">
                {
                  product.productDetails.productPictures.map((thumb, index) => 
                  <div className="thumbnail">
                    <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                  </div>
                  )
                }
                {/* <div className="thumbnail active">
                  {
                    product.productDetails.productPictures.map((thumb, index) => 
                    <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />)
                  }
                </div> */}
              </div>
              <div className="productDescContainer">
                <div className="productDescImgContainer"
                style={{
                    height:'580px'
                }}>
                  <img style={{height:'580px'}}
                  src={generatePublicUrl(product.productDetails.productPictures[0].img)} alt={`${product.productDetails.productPictures[0].img}`} />
                </div>
    
                {/* action buttons */}
                <div className="flexRow">
                  <MaterialButton
                    title="ADD TO CART"
                    bgColor="#ff9f00"
                    textColor="#ffffff"
                    onClick={addToCartButton}
                    style={{
                      margin: '10px auto 5px auto'
                    }}
                    icon={<IoMdCart />}
                  />
                  <MaterialButton
                    title="BUY NOW"
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                        margin: '10px auto 5px auto',
                    }}
                    icon={<AiFillThunderbolt />}
                  />
                </div>
              </div>
            </div>
           
            <div style={{
                margin: '10px auto auto 40px'
            }}>
              {/* home > category > subCategory > productName */}
              <div className="breed">
                <ul>
                  <li><a href="#">Home</a><IoIosArrowForward /></li>
                  <li><a href="#">Mobiles</a><IoIosArrowForward /></li>
                  <li><a href="#">Samsung</a><IoIosArrowForward /></li>
                  <li><a href="#">{product.productDetails.name}</a></li>
                </ul>
              </div>
              {/* product description */}
              <div className="productDetails">
                  <p className="productTitle">{product.productDetails.name}</p>
                <div>
                  <span className="ratingCount">4.3 <IoIosStar /></span>
                  <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
                </div>
                <div className="extraOffer">Extra <BiRupee />4500 off </div>
                <div className="flexRow priceContainer">
                  <span className="pricebtn"><BiRupee />{product.productDetails.price}</span>
                  <span className="discount" style={{ margin: '0 10px' }}>22% off</span>
                  {/* <span>i</span> */}
                  </div>
                <div>
                  <p style={{ 
                    color: '#212121', 
                    fontSize: '14px',
                    fontWeight: '600' 
                    }}>Available Offers</p>
                  <p style={{ display: 'flex' }}>
                    <span style={{
                      width: '100px',
                      fontSize: '14px',
                      color: '#878787',
                      fontWeight: '600',
                      marginRight: '20px'
                  }}>Description</span>
                  <span style={{
                    fontSize: '15px',
                    color: '#212121',
                  }}>{product.productDetails.description}</span>
                  </p>
                </div>
              </div>
              
    
            </div>
          </div>
        </Layout>
      )
    
}