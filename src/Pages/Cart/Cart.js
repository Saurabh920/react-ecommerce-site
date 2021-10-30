import React, {useState, useEffect} from 'react'
import {Table, Button, Image} from 'react-bootstrap'
import {AiFillDelete} from "react-icons/ai";
import CheckOut from "../../Assets/Images/CheckOut/checkout.png"
import { Link } from 'react-router-dom';
import { getProduct } from '../../Store/Actions/Products/productAction';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
const [counterone, setCounterOne] = useState(1);
const [countertwo, setCounterTwo] = useState(1);
  if(counterone===0) {
    setCounterOne(1);
}
    if(countertwo===0) {
    setCounterTwo(1);
    }

const dispatch = useDispatch();
useEffect(() => {
    dispatch(getProduct());
}, [])
const {product} = useSelector((state) => state.productReducer);
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
        {product.slice(6,7).map((data, index) => (
        <tbody>
            <tr>
            <td>1</td>
            <th style={{textAlign: 'center'}}><Image src={data.image} rounded style={{height: '180px', width: '180px'}}/>
            <br/>
            {data.title}
            </th>
            <td>{data.description}</td>
            <td>
            <Button variant="danger" onClick={() => setCounterOne(counterone - 1)} style={{marginRight:'1rem', borderRadius: '25px 0 0 25px'}}>-</Button>
            {counterone}
            <Button variant="success" onClick={() => setCounterOne(counterone + 1)} style={{marginLeft:'1rem', borderRadius: '0 25px 25px 0'}}>+</Button>
            <br/>
            <br/>
            </td>
            <td>${data.price}</td>
            <td><Button variant="danger" style={{borderRadius: '25px', width: '3rem'}} onClick={() => setCounterOne(0)}><AiFillDelete/></Button></td>
            </tr>
            <tr>
            <td>2</td>
            <th style={{textAlign: 'center'}}><Image src={data.image} rounded style={{height: '180px', width: '180px'}}/>
            <br/>
            {data.title}
            </th>
            <td>{data.description}</td>
            <td>
            <Button variant="danger" onClick={() => setCounterTwo(countertwo - 1)} style={{marginRight:'1rem', borderRadius: '25px 0 0 25px'}}>-</Button>
            {countertwo}
            <Button variant="success" onClick={() => setCounterTwo(countertwo + 1)} style={{marginLeft:'1rem', borderRadius: '0 25px 25px 0'}}>+</Button>
            <br/>
            <br/>
            </td>
            <td>${data.price}</td>
            <td><Button variant="danger" style={{borderRadius: '25px', width: '3rem'}} onClick={() => setCounterTwo(0)}><AiFillDelete/></Button></td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            
            <td></td>
            <th style={{textAlign: 'left'}}>Grand Total: Npr. XXXXXX</th>
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
        ))}
        </Table>
        </>
    )
}

export default Cart
