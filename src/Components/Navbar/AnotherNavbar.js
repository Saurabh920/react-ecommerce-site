import React from 'react'
import {Navbar, Container, Nav, Form, FormControl,NavDropdown} from 'react-bootstrap'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from '@mui/material/Badge';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import logo from '../../Assets/Images/Logo/logo.png'
import './AnotherNavbar.css'

const AnotherNavbar = () => {
    return (
        <>
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/" >
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
            <a href="/">
            <SearchTwoToneIcon style={{marginTop: '13px', marginLeft: '-36px', color: '#198754'}}/>
            </a>
            </Form>
            <Nav className="ms-auto">
            <Nav.Link href="/login"><AccountCircleOutlinedIcon/>Login/Register</Nav.Link>
            <Nav.Link href="/cart"><Badge color="success" badgeContent={2} showZero>
            <ShoppingCartTwoToneIcon/>
            </Badge>
            </Nav.Link>
            <NavDropdown>
            <NavDropdown.Item href="/orderhistory">Order History</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default AnotherNavbar
