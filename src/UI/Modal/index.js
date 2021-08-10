import React from 'react'
import { Modal,Button } from "react-bootstrap"

function NewModal(props){
return(
    <Modal show={props.show} onHide={props.handleClose} size={props.size?props.size:"sm"}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.handleClose}>
                Save Changes
                    </Button>
        </Modal.Footer>
    </Modal>
)}

export default NewModal