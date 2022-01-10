import React, {useState} from 'react'
import {Table, Button, Image, Spinner} from 'react-bootstrap'
import {AiFillDelete} from "react-icons/ai";
import CheckOut from "../../Assets/Images/CheckOut/checkout.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeCart } from '../../Store/Actions/CartProducts/cartAction';
import Loader from '../../Components/Loader/Loader';

const Cart = () => {
const [counterone, setCounterOne] = useState();
const increaseCartQuantity = (id) => {
    // console.log(id, counterone[id]);
    setCounterOne({
        ...counterone,
        [id]: counterone && counterone[id] ? counterone[id] + 1: 1
    })
}
const dercreaseCartQuantity = (id) => {
    setCounterOne({
        ...counterone,
        [id]: counterone && counterone[id] ? counterone[id] - 1: 1
    })
}

const dispatch = useDispatch();

const removeFromCart = (addedCartItems) => {
    dispatch(removeCart(addedCartItems))
}
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
            <th width="80px">Remove</th>
            </tr>
        </thead>
        
        {loading?(
                    <tr>
                    <th colSpan="6"><Loader/></th>
                    </tr>
                    
        ):(
        <tbody>
        {addedCartItems.map((addedCartItems, index) => (
            <tr key={index}>
                <td>{addedCartItems.productId}</td>
                <th style={{textAlign: 'center'}}><Image src={addedCartItems.image} rounded style={{height: '180px', width: '180px'}}/>
                <br/>
                {addedCartItems.title}
                </th>
                <td>{addedCartItems.description}</td>
                <td>
                <Button variant="danger" onClick={() => dercreaseCartQuantity(addedCartItems.productId)} style={{marginRight:'1rem', borderRadius: '25px 0 0 25px'}}>-</Button>
                {(counterone && counterone[addedCartItems.productId]) || 0}
                <Button variant="success" onClick={() => increaseCartQuantity(addedCartItems.productId)} style={{marginLeft:'1rem', borderRadius: '0 25px 25px 0'}}>+</Button>
                <br/>
                <br/>
                </td>
                <td>${addedCartItems.price}</td>
                <td><Button variant="danger" style={{borderRadius: '25px', width: '3rem'}} onClick={removeFromCart.bind(null, addedCartItems)}><AiFillDelete/></Button></td>
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
                <Link to="/checkout">
                <Button variant="success" style={{borderRadius: '25px', height: '3rem', color: "black"}}>Proceed To Checkout <Image src={CheckOut} alt="" style={{height:'22px', width:'20px', marginTop: '-8px'}}/></Button>
                </Link>
                </th>
                <td></td>
            </tr>
            
        </tbody>
        )}
        </Table>
        </>
    )
}

export default Cart
