import React from 'react'
import {Link} from 'react-router-dom';
import {Table, Button, Image, Spinner} from 'react-bootstrap'
import Products from '../../Assets/Images/Products/products.jpg';
import {AiFillHome} from "react-icons/ai";
import { useSelector } from 'react-redux';

const OrderHistory = () => {
    const {loading, addedCartItems} = useSelector((state) => state.cartReducer);
    return (
        <>
        <Table borderless hover>
        <thead>
            <tr>
                <th>ID</th>
                <th width="100px">Product</th>
                <th width="500px">Description</th>
                <th>Quantity</th>
                <th  width="250px">Price</th>
            </tr>
        </thead>
        {loading?(
                    <tr>
                    <th colSpan="6"><h4 style={{textAlign: "center"}}>Loading... <Spinner animation="border" variant="success" /></h4></th>
                    </tr>
                    
        ):(
        <tbody>
        {addedCartItems.map((data, index) => (
            <tr key={index}>
                <td>{data.productId}</td>
                <th style={{textAlign: 'center'}}><Image src={data.image} rounded style={{height: '180px', width: '180px'}}/>
                <br/>
                {data.title}
                </th>
                <td>{data.description}</td>
                <td>1
                </td>
                <td>${data.price}</td>
            </tr>
        ))}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                
                <td></td>
                <th style={{textAlign: 'left'}}>Total Price: $ XXXXXX</th>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th colSpan="5" width="100px" style={{textAlign: 'right'}}>
                <Link to="/">
                <Button variant="success" style={{borderRadius: '25px', height: '3rem', color: "black"}}>Return To Home <AiFillHome style={{height:'22px', width:'20px', marginTop: '-5px'}}/></Button>
                </Link>
                </th>
            </tr>
        </tbody>
        )}
        </Table>
        </>
    )
}

export default OrderHistory
