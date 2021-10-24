import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AnotherNavbar from '../Components/Navbar/AnotherNavbar';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const AuthRoutes = () => {
//     if (localStorage.getItem("token")){
//         return <Redirect to="/" />;
// }
    return (
    <>
    <Switch>
      <Route path="/login" component={Login} exact/>
      <Route path="/register" component={Register} exact/>
    </Switch>
    </>
    )
}

export default AuthRoutes;