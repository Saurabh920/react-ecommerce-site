import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {Card, FormControl, Image} from 'react-bootstrap'
import {HiLockClosed, HiMail, HiUserCircle} from 'react-icons/hi'
import Back from '../../Assets/Images/Authentication/back.png'

const Register = () => {
    const [val, setVal] = useState({name: "", email: "", password: ""})

    const onChangeHandler = (e) => {
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit= (e) => {
        e.preventDefault();
        console.log(val);
    }


    
    return (
        <>
        <Card style={{ width: '25rem', margin: 'auto', marginTop: "3rem"}}>
        <div className="container">
            <br />
            <h2 style={{textAlign: 'center'}}>Register</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={onSubmit} >
                <label htmlFor="name">Name</label>
                <FormControl type="text" className='form-control text-center' required onChange={onChangeHandler} value={val.name} name="name" style={{borderRadius: '25px'}}/>
                <HiUserCircle style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
                <br />
                <label htmlFor="email">Email</label>
                <FormControl type="email" className='form-control text-center' required onChange={onChangeHandler} value={val.email} name="email" style={{borderRadius: '25px'}} />
                <HiMail style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
                <br />
                <label htmlFor="passowrd">Password</label>
                <FormControl type="password" className='form-control text-center' required onChange={onChangeHandler} value={val.password} name="password" style={{borderRadius: '25px'}} />
                <HiLockClosed style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn w-100' style={{borderRadius: '25px'}}>SUBMIT</button>
            </form>
            {/* {error && <span className='error-msg'>{error}</span>} */}
            <br />
            <span>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
        </div>
        </Card>
        {/* <Image src={Left} style={{height: '87vh', width: '35rem', marginTop: '-77.65vh', marginLeft: '12rem'}}/>
        <Image src={Right} style={{height: '87vh', width: '35rem', marginTop: '-76.3vh'}}/> */}
        <Image src={Back} style={{height: '100vh', width: '48.9%', marginTop: '-88.5vh', marginLeft: '18.5rem'}}/> 
        </>
    )
}

export default Register
