import React from 'react'
import {Image, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Products from "../../Assets/Images/Products/products.jpg"

const Modals = ({show, onHide}) => {
    const {image} = useSelector((state) => state.cartReducer);
    return (
        <Modal
                show={show}
                onHide={onHide}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton style={{border: 'none'}} ></Modal.Header>
                <Modal.Body>
                <Image src={image} alt="" style={{height: '25rem', width: '25rem', margin: '0rem 2rem'}} />
                </Modal.Body>
        </Modal>
    )
}

export default Modals