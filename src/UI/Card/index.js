import React from "react";
import { Form } from "react-bootstrap";
import './style.css'

export const Card = (props) => {
  return (
    <div
        className="card"
        style={{...props.style}}    
    >
            {props.children}
    </div>
    );
};
