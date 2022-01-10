import React, { useState, useEffect } from 'react'
import {Card, Button, Col, Row, Spinner} from 'react-bootstrap';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { getProduct } from '../../Store/Actions/Products/productAction';
import { useDispatch, useSelector } from 'react-redux';
import "./Products.css"
import Modals from "../Modal/Modal"
import { addCart, getImage, setButton } from '../../Store/Actions/CartProducts/cartAction';
import Loader from '../Loader/Loader'

const Products = () => {
    const [cartProducts, setCartProducts] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const modal = (product) => {
        setModalShow(true);
        dispatch(getImage(product))
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
        dispatch(addCart(items))
        dispatch(setButton(items));
       
        // if (cartBtnTextOne === 'REMOVE FROM CART') {
        //     setCartBtnText('ADD TO CART')
        // }
    }
    const {button} = useSelector((state) => state.cartReducer);
    // const [variant, setVariant] = useState('success')
    const [cartBtnTextOne, setCartBtnText] = useState('ADD TO CART')
    const [cartBtnTextTwo, setCartBtnTextTwo] = useState('REMOVE FROM CART')
    
    console.log(button, "button");
    return (
        <>
            <h1 className="text-center" style={{marginTop: '2rem'}}>Products</h1>
            <div style={{margin: '2rem 5.5rem'}} className="proimg">
                {loading?(
                    <Loader/>
                ):(
                <Row md={4} className="g-4">
                    {product.map((product, index) => (
                        <Col key={index} >
                            <Card style={{ width: '18rem', margin: 'auto'}}>
                            <img variant="top" src={product.image} className="proimg" alt="" style={{height: '13rem', width: '15rem', margin: '20px'}} onClick={modal.bind(null, product.image)}/>
                                <Card.Body>
                                    <Card.Title style={{fontFamily: 'Montserrat, sans-serif', textAlign: 'center', maxHeight: "1.5rem", overflow: "hidden", whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{product.title}</Card.Title>
                                    <Card.Text><strong>Price: </strong>${product.price}</Card.Text>
                                    <Card.Text style={{overflow: "hidden", whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{product.description}</Card.Text>
                                    
                                    <Button 
                                        className="w-100" 
                                        variant={`${button.filter(btnList=>btnList.productId===product.id).length>0 ? "danger" : "success"}`} style={{borderRadius: '25px'}} 
                                        onClick={addToCart.bind(null, product.id, product.image, product.description, product.price)}>
                                        {`${button.filter(btnList=>btnList.productId===product.id).length>0 ? cartBtnTextTwo : cartBtnTextOne }`}
                                        <ShoppingCartTwoToneIcon style={{height: '1rem', marginTop: '-2.5px'}}/>
                                    </Button>
                                    .cona
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
