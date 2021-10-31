import React, { useState, useEffect } from 'react'
import {Card, Button, Col, Row, Spinner} from 'react-bootstrap';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { getProduct } from '../../Store/Actions/Products/productAction';
import { useDispatch, useSelector } from 'react-redux';
import "./Products.css"
import Modals from "../Modal/Modal"
import { addCart } from '../../Store/Actions/CartProducts/cartAction';

const Products = () => {
    const [cartProducts, setCartProducts] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const modal = (image) => {
        setModalShow(true);
    }
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());
    }, [])
    const {loading, product} = useSelector((state) => state.productReducer);

    const addToCart = (id ,image, description, price) => {
        let payload = {
            productId: id,
            image: image,
            description: description,
            price: price,
        }
        let items = [...cartProducts];
        items.push(payload);
        setCartProducts(items)
        dispatch(addCart(items));
    }
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
                    {product.map((product, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem', margin: 'auto'}}>
                            <img variant="top" src={product.image} className="proimg" alt="" style={{height: '13rem', width: '15rem', margin: '20px'}} onClick={modal.bind(null, product.image)}/>
                                <Card.Body>
                                    <Card.Title style={{fontFamily: 'Montserrat, sans-serif', textAlign: 'center', maxHeight: "1.5rem", overflow: "hidden", whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{product.title}</Card.Title>
                                    <Card.Text><strong>Price: </strong>${product.price}</Card.Text>
                                    <Card.Text style={{overflow: "hidden", whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{product.description}</Card.Text>
                                    <Button className="w-100" variant='success' style={{borderRadius: '25px'}} onClick={addToCart.bind(null, product.id, product.image, product.description, product.price)}>ADD TO CART<ShoppingCartTwoToneIcon style={{height: '1rem', marginTop: '-2.5px'}}/></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                )}
            
            </div>
            <Modals show={modalShow} onHide={() => setModalShow(false)} product={product}/>
        </>

    )
}

export default Products
