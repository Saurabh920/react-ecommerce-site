import React from 'react'
import {Image, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Products from "../../Assets/Images/Products/products.jpg"

const Modals = ({show, onHide}) => {
    const {addedCartItems} = useSelector((state) => state.cartReducer);
    return (
        <Modal
                show={show}
                onHide={onHide}
                size="lg"
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <Image src={addedCartItems.image} alt="" style={{height: '80vh', width: '100%'}} />
                </Modal.Body>
        </Modal>
    )
}

export default Modals