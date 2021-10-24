import React from 'react'
import {Link} from 'react-router-dom';
import {Table, Button, Image} from 'react-bootstrap'
import Products from '../../Assets/Images/Products/products.jpg';
import {AiFillHome} from "react-icons/ai";
 
const OrderHistory = () => {
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
        <tbody>
            <tr>
            <td>1</td>
            <th style={{textAlign: 'center'}}><Image src={Products} rounded style={{height: '180px', width: '180px'}}/>
            <br/>
            Title
            </th>
            <td>Amet mollit ullamco nulla voluptate laborum irure qui occaecat laborum labore. Occaecat exercitation sit sunt ex aliqua quis sunt ea amet. Consectetur mollit magna adipisicing aliquip sit ipsum elit velit anim. Ex sit officia aliquip nostrud exercitation ea reprehenderit mollit exercitation aute consequat. Proident culpa non aliquip ut occaecat.</td>
            <td>1
            </td>
            <td>Npr. XXXXXX</td>
            </tr>
            <tr>
            <td>2</td>
            <th style={{textAlign: 'center'}}><Image src={Products} rounded style={{height: '180px', width: '180px'}}/>
            <br/>
            Title
            </th>
            <td>Amet mollit ullamco nulla voluptate laborum irure qui occaecat laborum labore. Occaecat exercitation sit sunt ex aliqua quis sunt ea amet. Consectetur mollit magna adipisicing aliquip sit ipsum elit velit anim. Ex sit officia aliquip nostrud exercitation ea reprehenderit mollit exercitation aute consequat. Proident culpa non aliquip ut occaecat.</td>
            <td>1</td>
            <td>Npr. XXXXXX</td>
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
            <Link to="/">
            <Button variant="success" style={{borderRadius: '25px', height: '3rem', color: "black"}}>Return To Home <AiFillHome style={{height:'22px', width:'20px', marginTop: '-5px'}}/></Button>
            </Link>
            </th>
            </tr>
        </tbody>
        </Table>
        </>
    )
}

export default OrderHistory
