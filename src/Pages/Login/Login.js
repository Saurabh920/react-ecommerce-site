import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button, FormControl} from 'react-bootstrap';
import { HiLockClosed, HiUserCircle } from 'react-icons/hi';
import Back from '../../Assets/Images/Authentication/back.png'
import {useDispatch} from 'react-redux'
import { loginHandler } from '../../Store/Actions/authAction';

const Login = (props) => {
    const [val, setVal] = useState({
        username: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })
    }
    const dispatch = useDispatch();
    const onLogin = (e) => {
        e.preventDefault();
        const payload = {
            username: val.username,
            password: val.password
        }
        dispatch(loginHandler(payload))
            
    }
    return (
    <>
    <Card style={{ width: '25rem', margin: 'auto', marginTop: "3rem"}}>
    <div className='container'>
    <br />
    <h2 style={{textAlign: 'center'}}>Login</h2>
    <br />
    <form autoComplete="off" className='form-group' onSubmit={onLogin}>
        <label htmlFor="username">Username</label>
        <FormControl type="username" className='form-control text-center' value={val.username} name="username" onChange={onChangeHandler} style={{borderRadius: '25px'}} />
        <HiUserCircle style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
        <br />
        <label htmlFor="password">Password</label>
        <FormControl type="password" className='form-control text-center' value={val.password} name="password" onChange={onChangeHandler} style={{borderRadius: '25px'}} />
        <HiLockClosed style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
        <br />
        <Button type="submit" className='btn btn-success btn-md mybtn w-100' style={{borderRadius: '25px'}}>LOGIN</Button>
    </form>
    {/* {error && <span className='error-msg'>{error}</span>} */}
    <br/>
    <span>Don't have an account? Register
        <Link to="/register"> Here</Link>
    </span>
    </div>
    </Card>
    {/* <Image src={Left} style={{height: '87vh', width: '35rem', marginTop: '-77.65vh', marginLeft: '12rem'}}/>
    <Image src={Right} style={{height: '87vh', width: '35rem', marginTop: '-76.3vh'}}/> */}
    <Image src={Back} style={{height: '100vh', width: '48.9%', marginTop: '-75.5vh', marginLeft: '18.5rem'}}/>
    </>
    )
}

export default Login;