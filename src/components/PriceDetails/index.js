import React from "react";

export const PriceDetails = (props) => {
  return (
    <div
        style={props.style&&props.style}
    >
      <div
        style={{
          margin: "5px 5px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Total Items : {props.totalItems}
      </div>

      <div
        style={{
          padding: "5px 5px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "left",
          borderBottom:'2px solid grey'
        }}
      >
        Shipping Charges: 0
      </div>

      <div
        style={{
          margin: "5px 5px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Total Amount : {props.totalPrice}
      </div>
    </div>
  );
};
