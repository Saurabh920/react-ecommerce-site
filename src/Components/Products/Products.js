import React from 'react'
import {Card, Button, Col, Row} from 'react-bootstrap';
import Product from '../../Assets/Images/Products/products.jpg'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Products = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>Products</h1>
            <div style={{margin: '5%'}}>
            <Row md={3} className="g-4">
            {Array.from({ length: 9 }).map((_, idx) => (
                <Col>
                <Card style={{ width: '20rem', margin: 'auto'}}>
                <Card.Img variant="top" src={Product} style={{height: '15rem'}} />
                <Card.Body>
                    <Card.Title style={{fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>Title</Card.Title>
                    <h6>Npr. XXXXXX /-</h6>
                    <Card.Text >
                    Eu aute eu occaecat amet nulla ipsum eu quis. Cupidatat pariatur culpa.
                    </Card.Text>
                    <Button className="w-100" variant='success' style={{borderRadius: '25px'}}><ShoppingCartTwoToneIcon/>ADD TO CART</Button>
                </Card.Body>
                </Card>
                </Col>
                ))}
                </Row>
                </div>
        </>
    )
}

export default Products
