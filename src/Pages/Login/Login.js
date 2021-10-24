import React, {useState} from 'react'
// import handleAuth from '../../Api/Auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Card, Image } from 'react-bootstrap';
import { HiLockClosed, HiUserCircle } from 'react-icons/hi';
// import Left from '../../Assets/Images/Authentication/Left.png'
// import Right from '../../Assets/Images/Authentication/Right.png'
import Back from '../../Assets/Images/Authentication/back.png'

const Login = () => {
    const auth= useState({ username: "", password: "" });
    // const [auth, setAuth] = useState({ username: "", password: "" });
    // const [serverError, setServerError] = useState(null);
    const history = useHistory();

    // const inputChangeHandler = (e) => {
    //     setAuth({
    //         ...auth,
    //         [e.target.name]: e.target.value,
    //     })
    // }
    // const submitLoginForm = async () => {
    //     try {
    //         const token = await handleAuth(auth.username, auth.password);
    //         localStorage.setItem("token", token);
    //         history.push("/");
    //     } catch (error) {
    //         setServerError(error);
    //     }
    // }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            history.push('/');
        }).catch(err => setError(err.message));
    }
    return (
    <>
    <Card style={{ width: '25rem', margin: 'auto', marginTop: "3rem"}}>
    <div className='container'>
    <br />
    <h2 style={{textAlign: 'center'}}>Login</h2>
    <br />
    <form autoComplete="off" className='form-group' onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control text-center' required
            onChange={(e) => setEmail(e.target.value)} value={email} style={{borderRadius: '25px'}} />
        <HiUserCircle style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" className='form-control text-center' required
            onChange={(e) => setPassword(e.target.value)} value={password} style={{borderRadius: '25px'}} />
        <HiLockClosed style={{height: '1.5rem', width: '1.5rem', marginTop: '-4.10rem', marginLeft: '10px'}} />
        <br />
        <button type="submit" className='btn btn-success btn-md mybtn w-100' style={{borderRadius: '25px'}}>LOGIN</button>
    </form>
    {error && <span className='error-msg'>{error}</span>}
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