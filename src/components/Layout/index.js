import React, { Children, useEffect } from 'react'
import Header from '../Header'
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import MenuHeader from '../MenuHeader';


export default function Layout(props) {


    return (
        <>
            <Header/>
           {props.children}
        </>
    )
}
