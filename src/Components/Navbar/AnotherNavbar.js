import React from 'react'
import {Navbar, Container, Nav, Form, FormControl,NavDropdown} from 'react-bootstrap'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from '@mui/material/Badge';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import logo from '../../Assets/Images/Logo/logo.png'
import ES from '../../Assets/Images/Logo/ES.png'
import './AnotherNavbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AnotherNavbar = () => {
    const {addedCartItems} = useSelector((state) => state.cartReducer);
    const numberOfItemsInCart = (addedCartItems.length)
    return (
        <>
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                    src={logo}
                    width="100rem"
                    height="50px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search for a Product" className="mr-2" aria-label="Search" style={{marginLeft: '10px',borderRadius: '25px', height: '48px', width: '32rem'}}/>
                        <SearchTwoToneIcon style={{marginTop: '13px', marginLeft: '-36px', color: '#198754', cursor: 'pointer'}}/>
                    </Form>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/login"><AccountCircleOutlinedIcon/>Login/Register</Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            <Badge color="success" badgeContent={numberOfItemsInCart} showZero>
                            <ShoppingCartTwoToneIcon/>
                            </Badge>
                        </Nav.Link>
                        <NavDropdown>
                            <NavDropdown.Item as={Link} to="/orderhistory">Order History</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default AnotherNavbar
