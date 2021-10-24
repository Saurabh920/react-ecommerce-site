import React, {useState} from 'react'
import {Table, Button, Image} from 'react-bootstrap'
import Products from '../../Assets/Images/Products/products.jpg';
import {AiFillDelete} from "react-icons/ai";
import CheckOut from "../../Assets/Images/CheckOut/checkout.png"
import { Link } from 'react-router-dom';

const Cart = () => {
const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter===0) {
    decrementCounter = () => setCounter(1);
}
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
        <tbody>
            <tr>
            <td>1</td>
            <th style={{textAlign: 'center'}}><Image src={Products} rounded style={{height: '180px', width: '180px'}}/>
            <br/>
            Title
            </th>
            <td>Amet mollit ullamco nulla voluptate laborum irure qui occaecat laborum labore. Occaecat exercitation sit sunt ex aliqua quis sunt ea amet. Consectetur mollit magna adipisicing aliquip sit ipsum elit velit anim. Ex sit officia aliquip nostrud exercitation ea reprehenderit mollit exercitation aute consequat. Proident culpa non aliquip ut occaecat.</td>
            <td>
            <Button variant="danger" onClick={decrementCounter} style={{marginRight:'1rem', borderRadius: '25px 0 0 25px'}}>-</Button>
            {counter}
            <Button variant="success" onClick={incrementCounter} style={{marginLeft:'1rem', borderRadius: '0 25px 25px 0'}}>+</Button>
            <br/>
            <br/>
            </td>
            <td>Npr. XXXXXX</td>
            <td><Button variant="danger" style={{borderRadius: '25px', width: '3rem'}}><AiFillDelete/></Button></td>
            </tr>
            <tr>
            <td>2</td>
            <th style={{textAlign: 'center'}}><Image src={Products} rounded style={{height: '180px', width: '180px'}}/>
            <br/>
            Title
            </th>
            <td>Amet mollit ullamco nulla voluptate laborum irure qui occaecat laborum labore. Occaecat exercitation sit sunt ex aliqua quis sunt ea amet. Consectetur mollit magna adipisicing aliquip sit ipsum elit velit anim. Ex sit officia aliquip nostrud exercitation ea reprehenderit mollit exercitation aute consequat. Proident culpa non aliquip ut occaecat.</td>
            <td>
            <Button variant="danger" onClick={decrementCounter} style={{marginRight:'1rem', borderRadius: '25px 0 0 25px'}}>-</Button>
            {counter}
            <Button variant="success" onClick={incrementCounter} style={{marginLeft:'1rem', borderRadius: '0 25px 25px 0'}}>+</Button>
            <br/>
            <br/>
            </td>
            <td>Npr. XXXXXX</td>
            <td><Button variant="danger" style={{borderRadius: '25px', width: '3rem'}}><AiFillDelete/></Button></td>
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
        </Table>
        </>
    )
}

export default Cart
