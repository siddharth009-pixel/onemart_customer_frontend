import React, { useState } from "react"
import { generatePublicUrl } from "../../../urlConfig";

export const CartItem = (props) => {

    const { _id, name, price, img} = props.cartItem
    const [qty,setQty]=useState(props.cartItem.qty) 

    const onQuantityIncrement=()=>{
        setQty(qty+1)
        props.onQuantityInc(_id,qty)
    }

    const onQuantityDecrement=()=>{
        if(qty<=1){
            return
        }
        setQty(qty-1)
        props.onQuantityDec(_id,qty)
    }


    return (
        <div style={{
            borderBottom: '1px solid #212121',
            margin:'auto 10px',
            maxHeight: '250px'
        }}>
            <div style={{ display: "flex" }}>

                <div
                    style={{
                        height: '120px',
                        width: '120px'
                    }}
                >
                    <img
                        style={{
                            height: '90%',
                            width: '90%',
                            objectFit: "contain",
                            margin: '3px 3px'
                        }}
                        src={generatePublicUrl(img)}
                        alt="" />
                </div>
                <div>

                    <div style={{
                        textAlign: 'left',
                        margin: '4px 10px'
                    }}>
                        <h3>{name}</h3>
                    </div>
                    <div style={{
                        textAlign: 'left',
                        margin: '4px 10px'
                    }}>
                        <h4>{price}</h4>
                    </div>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'flex',
                height: '40px'
            }}
            >
                <span style={{
                    margin: 'auto 25px',
                    border: '1px solid black',
                    borderRadius: '50%',
                    width: '20px',
                    textAlign: "center"
                    }}
                    onClick={onQuantityIncrement}
                >+</span>
                <h5
                    style={{
                        margin:'auto 5px',
                        padding:'auto 10px',
                        border:'1px solid grey'
                    }}
                >{qty}</h5>
                <span style={{
                    margin: 'auto 25px',
                    border: '1px solid black',
                    borderRadius: '50%',
                    width: '20px',
                    textAlign: "center"
                }}
                onClick={onQuantityDecrement}
                >-</span>
            </div>
        </div>
    )
}