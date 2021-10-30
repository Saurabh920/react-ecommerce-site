import React, { useState, useEffect } from 'react'
import {Card, Button, Col, Row, Modal, Spinner} from 'react-bootstrap';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { getProduct } from '../../Store/Actions/Products/productAction';
import { useDispatch, useSelector } from 'react-redux';
import "./Products.css"

const Products = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());
    }, [])
    const {loading, product} = useSelector((state) => state.productReducer);
    return (
        <>
            <h1 className="text-center" style={{marginTop: '2rem'}}>Products</h1>
            <div style={{margin: '2rem 5.5rem'}} className="proimg">
                {loading?(
                    <div className="container">
                    <h4 style={{textAlign: "center"}}>Loading... <Spinner animation="border" variant="success" /></h4>
                    </div>
                    
                ):(
                <Row md={4} className="g-4">
                    {product.map((data, idx) => (
                        <Col>
                            <Card style={{ width: '18rem', margin: 'auto'}}>
                            <img variant="top" src={data.image} className="proimg" alt="" style={{height: '13rem', width: '15rem', margin: '20px'}} onClick={() => setShow(true)}/>
                            <Card.Body>
                                <Card.Title style={{fontFamily: 'Montserrat, sans-serif', textAlign: 'center', maxHeight: "1.5rem", overflow: "hidden", whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{data.title}</Card.Title>
                                <Card.Text><strong>Price: </strong>${data.price}</Card.Text>
                                <Card.Text style={{overflow: "hidden", whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{data.description}</Card.Text>
                                <Button className="w-100" variant='success' style={{borderRadius: '25px'}}>ADD TO CART<ShoppingCartTwoToneIcon style={{height: '1rem', marginTop: '-2.5px'}}/></Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                )}
            
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="lg"
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <img src={product.image} alt="" style={{height: '80vh', width: '100%'}} />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Products
